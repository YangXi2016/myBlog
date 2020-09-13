---
title: VUE內eslint使用
date: '2020-09-13'
sticky: true 
sidebar: auto 
type: 技术
tags: vue|eslint
note: 
---

# VUE內eslint使用
## VUE内添加eslint能力
- 新建项目时添加eslint能力
  ```sh
  vue create your_project_name
  ```
    根据命令行提示选择eslint能力。
- 历史项目添加eslint能力
  ```sh
  vue add eslint
  ```
  这个命令将 @vue/eslint 解析为完整的包名 @vue/cli-plugin-eslint，然后从 npm 安装它，调用它的生成器。
  ```sh
  # 这个和之前的用法等价
  vue add cli-plugin-eslint  
  ```
  你可以向被安装的插件传递生成器选项 (这样做会跳过命令提示)：
  ```sh
  vue add eslint --config airbnb --lintOn save
  ```
  上述命令在添加eslint组件的同时，还使用airbnb开源的eslint规范，并在保存编码文件时检验文件规范。

注：以上命令的前置条件是安装了vue-cli服务
```sh
npm install -g @vue/cli-service-global
```

## VUE内配置eslint能力

### cli-plugin-eslint
ESLint 可以通过 .eslintrc.{js,yml,json}或 package.json 中的 eslintConfig 字段来配置。对于vue项目，也可以直接在vue.config.js文件中进行配置，且支持lintOnsave配置項。

通过 eslint-loader 在每次保存时执行校验的选项是默认开启的，你也可以通过 vue.config.js 中的 lintOnSave 选项将其关闭。
``` js
module.exports = {
  lintOnSave: false
}
```
当设置为 true 时，eslint-loader 将会抛出校验错误作为警告。默认情况下警告只会记录在终端，并不会导致编译失败。

你可以使用 lintOnSave: 'error' 将校验错误显示在浏览器里的浮层中。这会强制 eslint-loader 总是抛出错误。这时也意味着校验错误会导致编译失败。

### eslint核心配置项解读
参考官网说明：https://eslint.org/docs/user-guide/configuring
下面对vue自动添加的eslint规则进行简要解读说明
```js
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
```
- root:  
  ESLint 在目录树种搜索配置文件时，若遇到 root 参数为 true 的配置文件，就会停止搜索，否则沿着目录树一直向父级目录的方向搜索到系统根目录为止。
- env:  
  指定执行环境，一个执行环境会预定义一组全局变量。
- plugins:  
  插件是第三方定制的规则集合，plugins参数用于指定第三方插件，虽然官方提供了上百种的规则可供选择，但是这还不够，因为官方的规则只能检查标准的 JavaScript 语法，如果你写的是 JSX 或者 Vue 单文件组件，ESLint 的规则就开始束手无策了，这个时候就需要安装 ESLint 的插件，来定制一些特定的规则进行检查，ESLint 的插件与扩展一样有固定的命名格式，以  eslint-plugin- 开头，插件名中的  eslint-plugin-  使用的时候也可以省略这个头。  
- extends(重要):  
  其他可供引入的eslintconfig配置。这里的两个配置是由cli-plugin-eslint引入，也可以使用自己公司或其他开源的配置。
- parserOptions:  
  指定语法分析器选项，默认使用的语法分析器支持如下几个选项： ecmaVersion 、 sourceType 、 ecmaFeatures。
- parar:  
  指定 ESLint 使用的语法分析器。ESLint 兼容的语法分析器有：Esprima、Babel-ESLint、@typescript-eslint/parser，vue这里使用Babel-Eslint
- rules(重要):  
  指定 ESLint 校验规则。  
  所有规则独立于其他规则，可单独配置。  
  ESLint 内置规则：eslint.org/docs/rules/
  规则组成：规则名、错误级别、附加选项


### rule配置规则集合
详见官网说明
https://eslint.org/docs/rules/

## 其他配置使用
### .editorconfig文件配置
规范缩进风格，缩进大小，tab长度以及字符集等,解决不同IDE的编码范设置。EditorConfig 插件会去查找当前编辑文件的所在文件夹或其上级文件夹中是否有 .editorconfig 文件。如果有，则编辑器的行为会与 .editorconfig 文件中定义的一致，并且其优先级高于编辑器自身的设置。
```sh
root = true
# 对所有文件有效  //[*js]只对js文件有效
[*]
#设置编码格式
charset = utf-8
#缩进类型  可选space和tab
indent_style = space
#缩进数量可选整数值2 or 4,或者tab
indent_size = 2
#换行符的格式
end_of_line = lf
# 是否在文件的最后插入一个空行  可选true和false
insert_final_newline = true
# 是否删除行尾的空格  可选择true和false
trim_trailing_whitespace = true
```
### .eslintignore文件配置
放置需要ESLint忽略的文件，只对.js文件有效
### 部分代码不进行eslint检查
eslint-disable-next-line：  在下一行禁用eslint  
eslint-disable-line： 本行禁用eslint  
eslint-disable:   放在文件头部则本文件禁用eslint；将需要忽略的代码块用注释包裹起来则对包裹代码禁用eslint  