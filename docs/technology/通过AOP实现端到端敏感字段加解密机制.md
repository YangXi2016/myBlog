---
title: 通过AOP实现端到端敏感字段加解密机制
date: '2021-04-05'
sticky: true 
sidebar: auto 
type: 技术
tags: AOP|加解密|设计模式
note: 1. 基于server端session的管理;2. cookie-based的管理方式;3. token-based的管理方式
---

# 通过AOP实现端到端敏感字段加解密机制

*本文内的代码写法仅表示其基本含义，实际项目中需要做更精确的调整。*

## 1. 基本AOP切面能力

指定切面

**在每一个controller类里的接口方法内，对web前台页面传入的参数进行解密**
```
    @Before("execution(public * com.xxx.yyy.controller.*.*(..))")
    public void decrypt(JoinPoint joinPoint) throws CException {
        // 捕获方法参数列表
        List<Object> methodArgs = AspectHelper.getMethodArgs(joinPoint);
        if (methodArgs.size() == 0) {
            return;
        }
        for (Object item : methodArgs) {
            // 对参数项进行敏感字段解密处理
            try {
                argHandlerDecrypt.strategyhandle(item);
            } catch (Exception e) {
                log.error("failed to decrypt, message: ", e);
                throw new CException(ErrorCode.RSA_DECRYPT_FAIL);
            }
        }
    }
```


**在每一个client类里的接口方法内，对即将传递给第三方模块的入参进行加密**
```
    @Before("execution(* com.xxx.yyy.client.*(..))")
    public void encrypt(JoinPoint joinPoint) throws CException {
        // 捕获方法参数列表
        List<Object> methodArgs = AspectHelper.getMethodArgs(joinPoint, EncryptArg.class);
        if (methodArgs.size() == 0) {
            return;
        }
        encryptHandlerStrategy.init();
        argHandlerEncrypt = new ArgHandler(encryptHandlerStrategy);
        for (Object item : methodArgs) {
            // 对参数项进行敏感字段解密处理
            try {
                if (item instanceof SessionKeyReq) {
                    ((SessionKeyReq) item).setSessionKey(encryptHandlerStrategy.getSessinoKeyEncrypted());
                    argHandlerEncrypt.strategyhandle(item);
                }
            } catch (Exception e) {
                log.error("failed to encrypt sessionkey and msg ", e);
                throw new CException(ErrorCode.SESSIONKEY_ENCRYPT_FAIL);
            }
        }
    }
```


## 2. 策略模式处理对象中基本类型字段
引入一个工具类：ArgHandler.Class, 其对外暴露strategyhandle方法，用于处理对象中的基本类型的字段。其具体的处理的方式，将通过后文的策略模式来注入具体的加解密方式。

```
public class ArgHandler {
    private HandlerStrategy strategy;

    public ArgHandler(HandlerStrategy strategy) {
        this.strategy = strategy;
    }

    public void strategyhandle(Object item) throws CException {
        try {
            handleItem(item);
        } catch (Exception e) {
            log.error("strategy handle object error");
            throw new CException(ErrorCode.SYSTEM_ERROR);
        }

    }
```

该类的核心方法：private void handleItem(Object item), 将扫描出基本类型字段，处理之后再回写到原始对象的字段上。如下：
```
    /**
     * 进行敏感字段解密/加密处理
     */
    private void handleItem(Object item) throws Exception {
        if (item == null) {
            return;
        }
        if (item.getClass().isPrimitive()) {
            log.error("can't handle primitive type data");
            return;
        }
        List<Field> fieldList = getDeclaredField(item.getClass());
        for (Field field : fieldList) {
            Class<?> fieldType = field.getType();
            if (fieldType.getName().startsWith("com.xxx.yyy")) {
                // 如果内工程内自定义类，继续迭代处理
                field.setAccessible(Boolean.TRUE) {
                handleItem(field.get(item));
                field.setAccessible(Boolean.FALSE);
            } else if (List.class.isAssignableFrom(fieldType)) {
                handleList(item, field);
            } else if (Map.class.isAssignableFrom(fieldType)) {
                handleMap(item, field);
            } else if (Set.class.isAssignableFrom(fieldType)) {
                handleSet(item, field);
            } else {
                // 若该字段被注解,则进行解密/加密 
                field.setAccessible(Boolean.TRUE);
                handleField(item, field);
                field.setAccessible(Boolean.FALSE);
            }
        }
    }

    private static List<Field> getDeclaredField(Class<?> c) {
        // 获取当前类中的元素
        Field[] fields = c.getDeclaredFields();
        //
        List<Field> fieldList = new ArrayList();
        // 获取有多少个字段
        int filedLength = fields.length;
        for (int i = 0; i < filedLength; ++i) {
            Field temp = fields[i];
            fieldList.add(temp);
        }
        //  判断是否存在父类信息，如果存在则递归的走一次获取类下面的元素
        if (!c.getSuperclass().equals(Object.class)) {
            fieldList.addAll(getDeclaredField(c.getSuperclass()));
        }
        return fieldList;
    }
```

处理方法中，handleList/handleMap/handleSet等方法需要进一步迭代处理，这里就不进一步展开。我们这里直接进入handleField(Object item, Field field)方法。即处理对象里的基本类型的字段

```
    private void handleField(Object item, Field field) throws Exception {
        strategy.handleField(item, field);
    }
```
但这里不直接在ArgHandler中进行基本类型字段的处理，而是使用注入的HandlerStrategy类。通过定义一系列的字段处理算法（加解密），把它们一个个封装起来，并且使它们可相互替换

## 3. 策略模式实现字符串的加解密
先看一下字符串处理策略的接口定义：
```
public abstract class HandlerStrategy {
    /**
     * [处理具体某个对象字段]
     *
     * @param item [对象]
     * @param field [对象的某个字段]
     * @throws Exception [处理中产生的异常]
     */
    public abstract void handleField(Object item, Field field) throws Exception;
}
```

字段加解密策略类核心在于实现handleFiled这个方法。其实现基本雷同，如下：

```
public class DecryptHandlerStrategy extends HandlerStrategy {
    @Override
    public void handleField(Object item, Field field) throws Exception {
        if (field.isAnnotationPresent(SensitiveField.class)) {
            SensitiveField sensitiveField = field.getAnnotation(SensitiveField.class);
            if (sensitiveField.isDec()) {
                Object originVal = field.get(item);
                if (originVal == null) {
                    return;
                }
                field.set(item, handleField(originVal));
            }
        }
    }

    private Object handleField(Object originVal) {
        if (originVal instanceof String) {   // 项目场景中只涉及字符串类型的处理
            return handleField((String) originVal);
        } else {
            return originVal;
        }
    }
}
```
通过自定义一个字段处理的注解，来确定处理方式，是否需要加密或解密。进一步，还可以在注解里定义加密算法及秘钥配置。
SensitiveField定义如下：
```
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface SensitiveField {
    boolean isDec() default true;
    boolean isEnc() default true;
    String algorithm() default "";
}
```

最终，在private String handleField(String originVal)方法体内，完成字符串加解密的操作。
