import{_ as a,M as r,p as t,q as l,R as e,t as d,N as i,a1 as o}from"./framework-5866ffd3.js";const s={},c=e("hr",null,null,-1),u=e("h1",{id:"flutter对接文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flutter对接文档","aria-hidden":"true"},"#"),d(" Flutter对接文档")],-1),p=e("hr",null,null,-1),h=e("h2",{id:"下载demo和插件、安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载demo和插件、安装包","aria-hidden":"true"},"#"),d(" 下载Demo和插件、安装包")],-1),m=e("p",null,"这是一个flutter广告插件 + demo工程",-1),g={href:"https://fpvideo.shenshiads.com/demo_zip/flutter_adsetdemo.zip",target:"_blank",rel:"noopener noreferrer"},v={href:"https://fpvideo.shenshiads.com/demo_zip/app-release.apk",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="集成插件" tabindex="-1"><a class="header-anchor" href="#集成插件" aria-hidden="true">#</a> 集成插件</h2><ul><li><p>1、拷贝 <code>flutter_plugin_ad</code> 插件到 <code>lib/plugins</code> 目录下(其他位置也都可以)</p></li><li><p>2、配置 <code>pubspec.yaml</code> 集成插件</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dependencies:
    flutter:
        sdk: flutter

    flutter_plugin_ad:
        path: lib/plugins/flutter_plugin_ad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="android配置" tabindex="-1"><a class="header-anchor" href="#android配置" aria-hidden="true">#</a> Android配置</h2><ul><li><p>1、拷贝aar 拷⻉ <code>flutter_plugin_ad/android/libs</code> ⽬录下的所有依赖包到您的项⽬的 <code>android/app/libs</code> ⽬录下</p></li><li><p>2、配置项⽬的依赖<code>android/app/build.gradle</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dependencies {
  implementation fileTree(dir: &#39;libs&#39;, include: [&#39;*.jar&#39;, &#39;*.aar&#39;])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>可以参考 flutter_plugin_ad/android/app/build.gradle 的配置⽂件</em></strong></p></li><li><p>3、安卓sdk版本最低21</p><p>根目录下<code>android/app/build.gradle</code>中修改 <code>minSdkVersion 21</code></p></li><li><p>4、配置<code>networkSecurityConfig</code> 拷贝res/xml中的network_security_config.xml到你的项目的res/xml文件中</p></li><li><p>5、配置androidmanifest.xml清单文件</p><p><code>android:networkSecurityConfig</code> 和 <code>tools:replace</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    package=&quot;com.adset.flutter_plugin_ad&quot;&gt;
   &lt;application
        android:label=&quot;flutter_plugin_ad&quot;
        android:networkSecurityConfig=&quot;@xml/network_security_config&quot;
        tools:replace=&quot;android:label,android:networkSecurityConfig&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>可以参考 flutter_plugin_ad/android/app/build.gradle 的配置⽂件</em></strong></p></li><li><p>6、混淆配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>拷⻉ \`android/app\` ⽬录下\`proguard-rules.pro\`混淆文件到你项目中对应的\`android/app/\` ⽬录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置混淆文件<code>android/app/build.gradle</code>文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> buildTypes {
        release {
            proguardFiles getDefaultProguardFile(&#39;proguard-android-optimize.txt&#39;), &#39;proguard-rules.pro&#39;
            signingConfig signingConfigs.debug
        }
        debug {
            proguardFiles getDefaultProguardFile(&#39;proguard-android-optimize.txt&#39;), &#39;proguard-rules.pro&#39;
            signingConfig signingConfigs.debug
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="广告接口" tabindex="-1"><a class="header-anchor" href="#广告接口" aria-hidden="true">#</a> 广告接口</h2><p>可以直接参考 <code>lib/main.dart</code> 文件，默认的都是测试appkey和测试广告位id</p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><pre><code>*   详情参考 /lib/main.dart- init()
*   **建议一进来app的\`initState\` 生命周期就要初始化sdk(必须在调用广告之前)**\`\`\`
    /// 初始化⼴告 SDK
    /// [appId] App申请的id
    /// [isDebug] 是否为测试模式
    FlutterPluginAd.initAd(appId, isDebug: true);
    \`\`\`
</code></pre><h3 id="检查并请求权限-仅-android" tabindex="-1"><a class="header-anchor" href="#检查并请求权限-仅-android" aria-hidden="true">#</a> 检查并请求权限（仅 Android）</h3><pre><code>*   检查并请求权限（仅 Android）
*   **建议app中必须调用权限，有助于提升广告收入**
\`\`\`
/// 检查并请求权限（仅 Android）
FlutterPluginAd.checkAndReqPermission();
\`\`\`
</code></pre><h3 id="添加广告监听" tabindex="-1"><a class="header-anchor" href="#添加广告监听" aria-hidden="true">#</a> 添加⼴告监听</h3><pre><code>*   详情参考 /lib/main.dart- setAdEvent(),监听状态见 /flutter\\_plugin\\_ad/lib/entity/ad\\_event.dart\`\`\`
    // 添加⼴告监听
    FlutterPluginAd.onEventListener((event) {
    setState(() {
        _adEvent = &#39;type:\${event.eventType} msg:\${event.msg}&#39;;
    });
    }, (error) {
    setState(() {
        StringBuffer sb = new StringBuffer();
        sb.write(error);
        // _adEvent = &#39;code:\${code} msg:\${msg}&#39;;
        // PlatformException err = error
        _adEvent = &#39;\${sb.toString()}&#39;;
    });
    });
    \`\`\`
</code></pre><h3 id="展示开屏广告" tabindex="-1"><a class="header-anchor" href="#展示开屏广告" aria-hidden="true">#</a> 展示开屏⼴告</h3><pre><code>*   详情参考 /lib/main.dart- showSplashAd()
    
    \`\`\`
    /// 展示开屏⼴告
    /// [posIdSplash] ⼴告配置 posIdSplash
    FlutterPluginAd.showSplashAd(posIdSplashsId);
    \`\`\`
</code></pre><h3 id="展示插屏广告" tabindex="-1"><a class="header-anchor" href="#展示插屏广告" aria-hidden="true">#</a> 展示插屏⼴告</h3><pre><code>*   详情参考 /lib/main.dart- showInterstitialAd()
    
    \`\`\`
    /// 展示插屏⼴告
    /// [posIdInterstitial] ⼴告配置 posIdInterstitial
    FlutterPluginAd.showInterstitialAd(posIdInterstitial);
    \`\`\`
</code></pre><h3 id="展示激励视频广告" tabindex="-1"><a class="header-anchor" href="#展示激励视频广告" aria-hidden="true">#</a> 展示激励视频⼴告</h3><pre><code>*   详情参考 /lib/main.dart- showRewardVideoAd()
    
    \`\`\`
    /// 展示激励视频⼴告
    /// [posIdRewardVideo] ⼴告配置 posIdRewardVideo
    FlutterPluginAd.showRewardVideoAd(posIdRewardVideo);
    \`\`\`
</code></pre><h3 id="banner-广告" tabindex="-1"><a class="header-anchor" href="#banner-广告" aria-hidden="true">#</a> Banner ⼴告</h3><pre><code>*   详情参考 /lib/page/banner\\_page.dart 或者 lib/main.dart
    
    \`\`\`
    /// 这⾥ Banner 是⼀个 Widget ，你可以放到任何 Flutter 组件上
    /// [adId] ⼴告配置 adIdBanner
    BannerAdWidget(adId: adIdBanner)
    \`\`\`
</code></pre><h3 id="学习天地" tabindex="-1"><a class="header-anchor" href="#学习天地" aria-hidden="true">#</a> 学习天地</h3><p><strong>接入学习天地需要适配AppCompat主题.</strong></p><pre><code>安卓项目的AndroidManifest.xml中，application 标签加入 android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot;
</code></pre>`,24);function f(_,x){const n=r("ExternalLinkIcon");return t(),l("div",null,[c,u,p,h,m,e("p",null,[e("a",g,[d("下载地址"),i(n)])]),e("p",null,[e("a",v,[d("demo安装包apk下载地址"),i(n)])]),b])}const I=a(s,[["render",f],["__file","Flutter.html.vue"]]);export{I as default};
