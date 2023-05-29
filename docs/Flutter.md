----------
# Flutter对接文档
----------
## 下载Demo和插件、安装包

这是一个flutter广告插件 + demo工程

[下载地址](https://fpvideo.shenshiads.com/demo_zip/flutter_adsetdemo.zip)

[demo安装包apk下载地址](https://fpvideo.shenshiads.com/demo_zip/app-release.apk)

## 集成插件

*   1、拷贝 `flutter_plugin_ad` 插件到 `lib/plugins` 目录下(其他位置也都可以)
    
*   2、配置 `pubspec.yaml` 集成插件
    

```
dependencies:
    flutter:
        sdk: flutter

    flutter_plugin_ad:
        path: lib/plugins/flutter_plugin_ad
```

## Android配置

*   1、拷贝aar 拷⻉ `flutter_plugin_ad/android/libs` ⽬录下的所有依赖包到您的项⽬的 `android/app/libs` ⽬录下
    
*   2、配置项⽬的依赖`android/app/build.gradle`
    
    ```
    dependencies {
      implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])
    }
    ```
    
    **_可以参考 flutter\_plugin\_ad/android/app/build.gradle 的配置⽂件_**
    
*   3、安卓sdk版本最低21
    
    根目录下`android/app/build.gradle`中修改 `minSdkVersion 21`
    
*   4、配置`networkSecurityConfig` 拷贝res/xml中的network\_security\_config.xml到你的项目的res/xml文件中
    
*   5、配置androidmanifest.xml清单文件
    
    `android:networkSecurityConfig` 和 `tools:replace`
    
    ```
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        package="com.adset.flutter_plugin_ad">
       <application
            android:label="flutter_plugin_ad"
            android:networkSecurityConfig="@xml/network_security_config"
            tools:replace="android:label,android:networkSecurityConfig">
    ```
    
    **_可以参考 flutter\_plugin\_ad/android/app/build.gradle 的配置⽂件_**
    
*   6、混淆配置
    
    ```
    拷⻉ `android/app` ⽬录下`proguard-rules.pro`混淆文件到你项目中对应的`android/app/` ⽬录下
    ```
    
    配置混淆文件`android/app/build.gradle`文件中
    
    ```
     buildTypes {
            release {
                proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
                signingConfig signingConfigs.debug
            }
            debug {
                proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
                signingConfig signingConfigs.debug
            }
    }
    ```
    

## 广告接口

可以直接参考 `lib/main.dart` 文件，默认的都是测试appkey和测试广告位id

###   初始化
    
    *   详情参考 /lib/main.dart- init()
    *   **建议一进来app的`initState` 生命周期就要初始化sdk(必须在调用广告之前)**```
        /// 初始化⼴告 SDK
        /// [appId] App申请的id
        /// [isDebug] 是否为测试模式
        FlutterPluginAd.initAd(appId, isDebug: true);
        ```
        
###   检查并请求权限（仅 Android）
    
    *   检查并请求权限（仅 Android）
    *   **建议app中必须调用权限，有助于提升广告收入**
    ```
    /// 检查并请求权限（仅 Android）
    FlutterPluginAd.checkAndReqPermission();
    ```
    
###   添加⼴告监听
    
    *   详情参考 /lib/main.dart- setAdEvent(),监听状态见 /flutter\_plugin\_ad/lib/entity/ad\_event.dart```
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
        
###   展示开屏⼴告
    
    *   详情参考 /lib/main.dart- showSplashAd()
        
        ```
        /// 展示开屏⼴告
        /// [posIdSplash] ⼴告配置 posIdSplash
        FlutterPluginAd.showSplashAd(posIdSplashsId);
        ```
        
###   展示插屏⼴告
    
    *   详情参考 /lib/main.dart- showInterstitialAd()
        
        ```
        /// 展示插屏⼴告
        /// [posIdInterstitial] ⼴告配置 posIdInterstitial
        FlutterPluginAd.showInterstitialAd(posIdInterstitial);
        ```
        
###   展示激励视频⼴告
    
    *   详情参考 /lib/main.dart- showRewardVideoAd()
        
        ```
        /// 展示激励视频⼴告
        /// [posIdRewardVideo] ⼴告配置 posIdRewardVideo
        FlutterPluginAd.showRewardVideoAd(posIdRewardVideo);
        ```
        
###   Banner ⼴告
    
    *   详情参考 /lib/page/banner\_page.dart 或者 lib/main.dart
        
        ```
        /// 这⾥ Banner 是⼀个 Widget ，你可以放到任何 Flutter 组件上
        /// [adId] ⼴告配置 adIdBanner
        BannerAdWidget(adId: adIdBanner)
        ```
        
###  学习天地
  **接入学习天地需要适配AppCompat主题.**
    
    安卓项目的AndroidManifest.xml中，application 标签加入 android:theme="@style/Theme.AppCompat.Light.NoActionBar"