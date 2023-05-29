<template><div><hr>
<h1 id="flutter对接文档" tabindex="-1"><a class="header-anchor" href="#flutter对接文档" aria-hidden="true">#</a> Flutter对接文档</h1>
<hr>
<h2 id="下载demo和插件、安装包" tabindex="-1"><a class="header-anchor" href="#下载demo和插件、安装包" aria-hidden="true">#</a> 下载Demo和插件、安装包</h2>
<p>这是一个flutter广告插件 + demo工程</p>
<p><a href="https://fpvideo.shenshiads.com/demo_zip/flutter_adsetdemo.zip" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a></p>
<p><a href="https://fpvideo.shenshiads.com/demo_zip/app-release.apk" target="_blank" rel="noopener noreferrer">demo安装包apk下载地址<ExternalLinkIcon/></a></p>
<h2 id="集成插件" tabindex="-1"><a class="header-anchor" href="#集成插件" aria-hidden="true">#</a> 集成插件</h2>
<ul>
<li>
<p>1、拷贝 <code v-pre>flutter_plugin_ad</code> 插件到 <code v-pre>lib/plugins</code> 目录下(其他位置也都可以)</p>
</li>
<li>
<p>2、配置 <code v-pre>pubspec.yaml</code> 集成插件</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>dependencies:
    flutter:
        sdk: flutter

    flutter_plugin_ad:
        path: lib/plugins/flutter_plugin_ad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="android配置" tabindex="-1"><a class="header-anchor" href="#android配置" aria-hidden="true">#</a> Android配置</h2>
<ul>
<li>
<p>1、拷贝aar 拷⻉ <code v-pre>flutter_plugin_ad/android/libs</code> ⽬录下的所有依赖包到您的项⽬的 <code v-pre>android/app/libs</code> ⽬录下</p>
</li>
<li>
<p>2、配置项⽬的依赖<code v-pre>android/app/build.gradle</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>dependencies {
  implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>可以参考 flutter_plugin_ad/android/app/build.gradle 的配置⽂件</em></strong></p>
</li>
<li>
<p>3、安卓sdk版本最低21</p>
<p>根目录下<code v-pre>android/app/build.gradle</code>中修改 <code v-pre>minSdkVersion 21</code></p>
</li>
<li>
<p>4、配置<code v-pre>networkSecurityConfig</code> 拷贝res/xml中的network_security_config.xml到你的项目的res/xml文件中</p>
</li>
<li>
<p>5、配置androidmanifest.xml清单文件</p>
<p><code v-pre>android:networkSecurityConfig</code> 和 <code v-pre>tools:replace</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.adset.flutter_plugin_ad">
   &lt;application
        android:label="flutter_plugin_ad"
        android:networkSecurityConfig="@xml/network_security_config"
        tools:replace="android:label,android:networkSecurityConfig">
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>可以参考 flutter_plugin_ad/android/app/build.gradle 的配置⽂件</em></strong></p>
</li>
<li>
<p>6、混淆配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>拷⻉ `android/app` ⽬录下`proguard-rules.pro`混淆文件到你项目中对应的`android/app/` ⽬录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置混淆文件<code v-pre>android/app/build.gradle</code>文件中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> buildTypes {
        release {
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.debug
        }
        debug {
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.debug
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="广告接口" tabindex="-1"><a class="header-anchor" href="#广告接口" aria-hidden="true">#</a> 广告接口</h2>
<p>可以直接参考 <code v-pre>lib/main.dart</code> 文件，默认的都是测试appkey和测试广告位id</p>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<pre><code>*   详情参考 /lib/main.dart- init()
*   **建议一进来app的`initState` 生命周期就要初始化sdk(必须在调用广告之前)**```
    /// 初始化⼴告 SDK
    /// [appId] App申请的id
    /// [isDebug] 是否为测试模式
    FlutterPluginAd.initAd(appId, isDebug: true);
    ```
</code></pre>
<h3 id="检查并请求权限-仅-android" tabindex="-1"><a class="header-anchor" href="#检查并请求权限-仅-android" aria-hidden="true">#</a> 检查并请求权限（仅 Android）</h3>
<pre><code>*   检查并请求权限（仅 Android）
*   **建议app中必须调用权限，有助于提升广告收入**
```
/// 检查并请求权限（仅 Android）
FlutterPluginAd.checkAndReqPermission();
```
</code></pre>
<h3 id="添加广告监听" tabindex="-1"><a class="header-anchor" href="#添加广告监听" aria-hidden="true">#</a> 添加⼴告监听</h3>
<pre><code>*   详情参考 /lib/main.dart- setAdEvent(),监听状态见 /flutter\_plugin\_ad/lib/entity/ad\_event.dart```
    // 添加⼴告监听
    FlutterPluginAd.onEventListener((event) {
    setState(() {
        _adEvent = 'type:${event.eventType} msg:${event.msg}';
    });
    }, (error) {
    setState(() {
        StringBuffer sb = new StringBuffer();
        sb.write(error);
        // _adEvent = 'code:${code} msg:${msg}';
        // PlatformException err = error
        _adEvent = '${sb.toString()}';
    });
    });
    ```
</code></pre>
<h3 id="展示开屏广告" tabindex="-1"><a class="header-anchor" href="#展示开屏广告" aria-hidden="true">#</a> 展示开屏⼴告</h3>
<pre><code>*   详情参考 /lib/main.dart- showSplashAd()
    
    ```
    /// 展示开屏⼴告
    /// [posIdSplash] ⼴告配置 posIdSplash
    FlutterPluginAd.showSplashAd(posIdSplashsId);
    ```
</code></pre>
<h3 id="展示插屏广告" tabindex="-1"><a class="header-anchor" href="#展示插屏广告" aria-hidden="true">#</a> 展示插屏⼴告</h3>
<pre><code>*   详情参考 /lib/main.dart- showInterstitialAd()
    
    ```
    /// 展示插屏⼴告
    /// [posIdInterstitial] ⼴告配置 posIdInterstitial
    FlutterPluginAd.showInterstitialAd(posIdInterstitial);
    ```
</code></pre>
<h3 id="展示激励视频广告" tabindex="-1"><a class="header-anchor" href="#展示激励视频广告" aria-hidden="true">#</a> 展示激励视频⼴告</h3>
<pre><code>*   详情参考 /lib/main.dart- showRewardVideoAd()
    
    ```
    /// 展示激励视频⼴告
    /// [posIdRewardVideo] ⼴告配置 posIdRewardVideo
    FlutterPluginAd.showRewardVideoAd(posIdRewardVideo);
    ```
</code></pre>
<h3 id="banner-广告" tabindex="-1"><a class="header-anchor" href="#banner-广告" aria-hidden="true">#</a> Banner ⼴告</h3>
<pre><code>*   详情参考 /lib/page/banner\_page.dart 或者 lib/main.dart
    
    ```
    /// 这⾥ Banner 是⼀个 Widget ，你可以放到任何 Flutter 组件上
    /// [adId] ⼴告配置 adIdBanner
    BannerAdWidget(adId: adIdBanner)
    ```
</code></pre>
<h3 id="学习天地" tabindex="-1"><a class="header-anchor" href="#学习天地" aria-hidden="true">#</a> 学习天地</h3>
<p><strong>接入学习天地需要适配AppCompat主题.</strong></p>
<pre><code>安卓项目的AndroidManifest.xml中，application 标签加入 android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot;
</code></pre>
</div></template>


