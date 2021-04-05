---
title: okhttp3及httpclient中的代理设置
date: '2020-12-03'
sticky: true 
type: 技术
tags: java|http
note: 通过http客户端三方类库，主要有三步:1. 设置proxy的地址信息;2. 设置proxy的鉴权信息;3. 如果证书错误，则需要设置sslSocketFactory来处理证书验证。
---

# okhttp3及httpclient中的代理设置

在java工程开发过程中，如果需要向外发送网络请求，但是开发过程中网络不通，我们需要通过vpn的方式代理发起请求。又或者需要使用ip池来进行网络爬取，也得通过ip代理来规避ip封禁。

这里，给出了两种常用的http客户端三方类库——okhttp3和httpclient的代理设置

## okhttp3代理设置
``` java
public class OkHttpUtil {

    private OkHttpClient client;

    private X509TrustManager x509TrustManager() {
        return new X509TrustManager() {
            @Override
            public void checkClientTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {}

            @Override
            public void checkServerTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {}

            @Override
            public X509Certificate[] getAcceptedIssuers() {
                return new X509Certificate[0];
            }
        };
    }

    private SSLSocketFactory sslSocketFactory() {
        try {
            SSLContext sslContext = SSLContext.getInstance("TLS");
            sslContext.init(null, new TrustManager[] {x509TrustManager()}, new SecureRandom());
            return sslContext.getSocketFactory();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }
        return null;
    }

    private OkHttpUtil() {
        final String username = "xxx";
        final String password = "yyy";

        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("ipAdress", 8080));

        Authenticator proxyAuthenticator = new Authenticator() {
            @Override
            public Request authenticate(Route route, Response response) throws IOException {
                String credential = Credentials.basic(username, password);
                return response.request().newBuilder()
                        .header("Proxy-Authorization", credential)
                        .build();
            }
        };


        client = new OkHttpClient.Builder()
                .addInterceptor(new CommonInterceptor())
                .retryOnConnectionFailure(false)//是否开启缓存
                .connectionPool(pool())//连接池
                .connectTimeout(10L, TimeUnit.SECONDS)
                .readTimeout(10L, TimeUnit.SECONDS)
                .sslSocketFactory(sslSocketFactory(), x509TrustManager())
                .proxy(proxy)
                .proxyAuthenticator(proxyAuthenticator)
                .authenticator(proxyAuthenticator)
                .build();
    }

    // todo 使用client对象进行执行request请求
    // client.newCall(request).execute();
}
```
相较于正常使用，在build的过程中，设置了proxy及proxyAuthenticator。如果代理过程中ssl或tls相关的错误，则需要加上sslSocketFactory(sslSocketFactory(), x509TrustManager())来处理证书验证，这里默认的处理模式是全部放通，仅用于开发调测阶段。

注：在okhttp3代理设置中，如果通过 java.net.Authenticator.setDefault的方式来设置net全局代理，会报错代理鉴权失败。

## httphlient代理设置
``` java

        HttpClientBuilder custom = HttpClients.custom();
        
        //设置代理服务器
        HttpHost proxy = new HttpHost("proxy.huawei.com", 8080);
        DefaultProxyRoutePlanner routePlanner = new DefaultProxyRoutePlanner(proxy);
        custom.setRoutePlanner(routePlanner);

        //设置代理认证
        CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
        credentialsProvider.setCredentials(new AuthScope(AuthScope.ANY_HOST, AuthScope.ANY_PORT),
                new UsernamePasswordCredentials("账号", "密码"));
        custom.setDefaultCredentialsProvider(credentialsProvider);
        SSLContext sslContext = null;
        try {
            sslContext = new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy()
            {
                // 信任所有
                public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException
                {
                    return true;
                }
            }).build();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        }
        SSLConnectionSocketFactory sslf = new SSLConnectionSocketFactory(sslContext);
        CloseableHttpClient httpClient = custom.setSSLSocketFactory(sslf).build();


        // todo 使用httpClient对象进行执行request请求
        // httpClient.execute(httpRequest).getEntity()

```
同理，相较于正常使用，额外设置了proxy的路由及鉴权：custom.setRoutePlanner(routePlanner);custom.setDefaultCredentialsProvider(credentialsProvider);
如果代理过程中ssl或tls相关的错误，则需要通过custom.setSSLSocketFactory来处理证书验证，这里默认的处理模式是全部放通，仅用于开发调测阶段。


## 总结：
通过http客户端三方类库，主要有三步。
1. 设置proxy的地址信息
2. 设置proxy的鉴权信息
3. 如果证书错误，则需要设置sslSocketFactory来处理证书验证。