----------
# OpenSet Android SDK接入文档(AndroidStudio)
----------


## 导入项目
### 导入
 导入 aar 到项目中，主程序中build.gradle(因请求用到okhttp，glide所以要加入依赖)，需要集成support包
 ```java
	android{
	    repositories {
	      flatDir {
	           dirs 'libs'
	      }
	    }
		//app目录下加入这个代码（为了kssdk-all-3.3.5-publishRelease.aar这个sdk）
	    compileOptions {
	        sourceCompatibility JavaVersion.VERSION_1_8
	        targetCompatibility JavaVersion.VERSION_1_8
	    }
	}
	dependencies {
		implementation fileTree(include: ['*.jar'], dir: 'libs')
        //sigmob
	   implementation(name: 'wind-common-+', ext: 'aar')
	   implementation(name: 'wind-sdk-+', ext: 'aar')
    	implementation(name: 'oaid_sdk_1.0.25', ext: 'aar')

	    //广点通（+号代表版本号对应的是demo里面的）
	   implementation(name: 'GDTSDK.unionNormal.+', ext: 'aar')
	    //穿山甲（+号代表版本号对应的是demo里面的）
	   implementation(name: 'open_ad_sdk+', ext: 'aar')
	   	//openset（+号代表版本号对应的是demo里面的）
	   implementation(name: 'openset_sdk+', ext: 'aar')
	   implementation 'com.squareup.okhttp3:okhttp:3.12.0'
		implementation 'com.github.bumptech.glide:glide:4.9.0'
	   implementation 'com.scwang.smartrefresh:SmartRefreshLayout:1.1.0-alpha-21'
	   implementation 'com.scwang.smartrefresh:SmartRefreshHeader:1.1.0-alpha-21'
		//快手（+号代表版本号对应的是demo里面的）
	   implementation(name: 'kssdk-all-+-publishRelease', ext: 'aar')
	   implementation 'com.android.support:recyclerview-v7:28.0.0'
	   implementation 'com.android.support:design:28.0.0'
	   implementation 'com.google.code.gson:gson:2.8.6'
	   //百度
      implementation(name: 'Baidu_MobAds_SDK-release_+', ext: 'aar')
      //gromore  
      implementation(name: 'pangle_adapter_4.7.1.2.1', ext: 'aar')
      implementation(name: 'mediation_ad_sdk_3.7.0.0', ext: 'aar')
	}
```
### http适配
 因sdk中请求为http，所以Android9.0要进行http适配

    请百度自行查找

### 声明FIleProvider
#### 1.往res中加入xml文件夹并加入filepaths文件
```java
	<paths xmlns:android="http://schemas.android.com/apk/res/android">
	    <external-path
	        name="external"
	        path="." />
	    <external-path
	        name="external_files"
	        path="." />
	    <external-path
	        name="tt_external_download"
	        path="Download" />
	    <external-files-path
	        name="tt_external_files_download"
	        path="Download" />
	    <external-files-path
	        name="external_files_path"
	        path="Download" />
	    <files-path
	        name="tt_internal_file_download"
	        path="Download" />
	    <cache-path
	        name="tt_internal_cache_download"
	        path="Download" />
	    <external-cache-path
	        name="gdt_sdk_download_path1"
	        path="com_qq_e_download" />
	    <cache-path
	        name="gdt_sdk_download_path2"
	        path="com_qq_e_download" />
	    <external-cache-path
	        name="SigMob_root"
	        path="SigDownload" />
	    <external-path
	        name="SigMob_root_external"
	        path="." />
	    <root-path
	        name="SigMob_root"
	        path="." />
	</paths>
```
#### 2.AndroidManifest.xml中的配置
	请参考demo中的AndroidManifest.xml
	
### 权限申请
#### 权限申请AndroidManifest.xml配置

```java	
	<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.GET_TASKS" />
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
	<application>
        
        <!--穿山甲start-->
        <provider
            android:name="com.bytedance.sdk.openadsdk.multipro.TTMultiProvider"
            android:authorities="${applicationId}.TTMultiProvider"
            android:exported="false" />
		<provider
            android:name="com.bytedance.sdk.openadsdk.TTFileProvider"
            android:authorities="${applicationId}.TTFileProvider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/filepaths" />
        </provider>
        <uses-library
            android:name="org.apache.http.legacy"
            android:required="false" />
        <!--穿山甲 end-->
        <!--广点通 start-->
        <!--配置provider-->
        <provider
            android:name="com.qq.e.comm.GDTFileProvider"
            android:authorities="${applicationId}.gdt.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/filepaths" />
        </provider>
		<!--广点通 end-->
		<!--opendsp start-->
        <activity
            android:name="com.od.reward.ODRewardVideoActivity"
            android:configChanges="orientation|screenSize|keyboardHidden"
            android:launchMode="singleTask" />
        <provider
            android:name="com.od.util.ODFileProvider"
            android:authorities="${applicationId}.odfileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/filepaths" />
        </provider>
		<!--opendsp end-->
		<!--sigmob start-->
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="ca-app-pub-3940256099942544~3347511713" />

        <provider
            android:name="com.sigmob.sdk.SigmobFileProvider"
            android:authorities="${applicationId}.sigprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/filepaths" />
        </provider>
		<!--sigmob end-->
	</application>
```

## 混淆配置
```java
	#open_ad_sdk
	-keep class com.bytedance.sdk.openadsdk.** { *; }
	-keep public interface com.bytedance.sdk.openadsdk.downloadnew.** {*;}
	-keep class com.ss.**{*;}
	-dontwarn com.ss.**
	# miitmdid
	-keep class com.bun.miitmdid.core.** {*;}
	-dontwarn com.bun.miitmdid.core.**
	
	#广点通 start
	-keep class com.qq.e.** {*;}
	-dontwarn com.qq.e.**
	#广点通 end

	#快手
	-keep class org.chromium.** {*;}
	-keep class org.chromium.** { *; }
	-keep class aegon.chrome.** { *; }
	-keep class com.kwai.**{ *; }
	-dontwarn com.kwai.**
	-dontwarn com.kwad.**
	-dontwarn com.ksad.**
	-dontwarn aegon.chrome.**
	#快手

	# WindAd
	-keep class com.sigmob.**{*;}
	-dontwarn com.sigmob.**
	# WindAd	
	
	
#baidu start
-ignorewarnings
-dontwarn com.baidu.mobads.sdk.api.**
-keepclassmembers class * extends android.app.Activity {
   public void *(android.view.View);
}

-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keep class com.baidu.mobads.** { *; }
-keep class com.style.widget.** {*;}
-keep class com.component.** {*;}
-keep class com.baidu.ad.magic.flute.** {*;}
-keep class com.baidu.mobstat.forbes.** {*;}
#baidu end

	#oaid start
	-keep class com.asus.msa.**{*;}
	-keep class com.bun.**{*;}
	-keep class com.huawei.hms.ads.identifier.**{*;}
	-keep class com.netease.nis.sdkwrapper.**{*;}
	-keep class com.samsung.android.deviceidservice.**{*;}
	-keep class com.zui.**{*;}
	-keep class XI.**{*;}
	#oaid end

    #openset start
    -keep class com.kc.openset.**{*;}
    -dontwarn com.kc.openset.**
    #openset end

	#-------------- okhttp3 start-------------
	# OkHttp3
	# https://github.com/square/okhttp
	# okhttp
	-keepattributes Signature
	-keepattributes *Annotation*
	-keep class com.squareup.okhttp.* { *; }
	-keep interface com.squareup.okhttp.** { *; }
	-dontwarn com.squareup.okhttp.**
	
	# okhttp 3
	-keepattributes Signature
	-keepattributes *Annotation*
	-keep class okhttp3.** { *; }
	-keep interface okhttp3.** { *; }
	-dontwarn okhttp3.**
	
	# Okio
	-dontwarn com.squareup.**
	-dontwarn okio.**
	-keep public class org.codehaus.* { *; }
	-keep public class java.nio.* { *; }
	#----------okhttp end--------------
	
	# log start
-keep class com.aliyun.sls.android.producer.* { *; }
-keep interface com.aliyun.sls.android.producer.* { *; }
# log end

# 倍孜混淆
-dontwarn com.beizi.fusion.**
-dontwarn com.beizi.ad.**
-keep class com.beizi.fusion.** {*; }
-keep class com.beizi.ad.** {*; }

-keep class com.qq.e.** {
    public protected *;
}

-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod

-dontwarn  org.apache.**

```	

## 测试id

	appkey：E6097975B89E83D6
	开屏广告位id：7D5239D8D88EBF9B6D317912EDAC6439
	插屏广告位id：1D273967F51868AF2C4E080D496D06D0
	banner广告位id：107EB50EDFE65EA3306C8318FD57D0B3
	激励视频广告位id：09A177D681D6FB81241C3DCE963DCB46
	全屏视频广告位id：D879C3DED01D5CE319CD2751474BA8E4
	信息流（原生）广告位id：89FEEA66F9228ED3F6420294B89A902B
	draw视频流广告位id：6328AB893D5DBA6B9D2791B54E1D2C16
	视频内容模块id：2A96205DFDDB8D27C784FF31F0625BA4
	信息流内容模块id：4EC4251D616C69030A161A930A938596
	信息流内容模块2 id：EBE266AAE65F52C37A28BF2D586132EB
	30s小说阅读激励任务：C4BC47AE2DEE0D663BB14903F1400731
	悬浮窗模块id：C20D0FDCA88E06E6718A33279AAD2B4D

	
## 初始化SDK
```java
	public class MyApplication extends Application {
	  	@Override
	    protected void attachBaseContext(Context base) {
	        super.attachBaseContext(base);
	        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
	            Log.e("aaaaaa", "进程名：" + getProcessName());
				// 安卓9.0后不允许多进程使用同一个数据目录
	            try {
	                WebView.setDataDirectorySuffix(getProcessName());
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	        }
	    }

	    @Override
	    public void onCreate() {
	        super.onCreate();
            OSETSDK.getInstance().setUserId("aaaa");
	       	OSETSDK.getInstance().init(this, APPKEY, OSETInitListener);
	    }
	}
```

## 广告模块

### 开屏广告
#### xml文件添加
```java
	<!--不可设置visibility=gone-->
	 <FrameLayout
	    android:id="@+id/fl"
	    android:layout_width="match_parent"
	    android:layout_height="match_parent"></FrameLayout>
```
#### java代码
```java
	layout = findViewById(R.id.fl);
	OSETSplash.getInstance().show(Activity, fl, 广告位id,OSETFullScreenListener)
```
### banner广告
#### xml文件添加（高度设置成wrap_content，避免广告展示不完全影响计费）
```java
	<!--不可设置visibility-->
	<FrameLayout
		android:id="@+id/fl_banner"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"></FrameLayout>
```
#### java代码
```java
	flBanner = findViewById(R.id.fl_banner);
	new OSETBanner().show(FragmentActivity,广告位id, fl, OSETFullScreenListener) 
```
### 插屏广告
**缓存广告**
```java
	//在首页中OnCreate调用以下代码可以开始加载广告并缓存
	 OSETInsertCache.getInstance()
                .setContext(this)
                .setPosId(Common.POS_ID_Insert)
                .startLoad();
                
//在OnDestroy中调用destroy
OSETInsertCache.getInstance().destroy();
                
```         
**在需要使用广告的地方**
```java
OSETInsertCache.getInstance()
.setOSETListener(OSETListener)
.showAd(this);
```
**注意：
1、startLoad和destroy方法需要在同一个Activity调用，尽量在长生命周期的Activiy调用，因为频繁的destroy会影响广告的ecpm**

### 全屏视频广告
```java
	OSETFullVideo fullVideo = new OSETFullVideo();
	fullVideo.load(activity, 广告位id, OSETVideoListener)
	//在OSETVideoListener的onLoad回调里面执行下面方法可显示广告
	fullVideo.showAd(activity);
```
### 激励视频广告(带缓存)	
**缓存广告**
```java
	//在首页中OnCreate调用以下代码可以开始加载广告并缓存
	 OSETRewardVideoCache.getInstance()
                .setContext(this)
                .setVerify(true)
                .setServiceReward(true)
                .setUserId("1111")
                .setPosId(Common.POS_ID_RewardVideo)
                .startLoad();
                
//在OnDestroy中调用destroy
OSETRewardVideoCache.getInstance().destroy();
                
```         
**在需要使用广告的地方**
```java
OSETRewardVideoCache.getInstance()
.setOSETVideoListener(OSETVideoListener)
.showAd(this);
```
**注意：
1、startLoad和destroy方法需要在同一个Activity调用，尽量在长生命周期的Activiy调用，因为频繁的destroy会影响广告的ecpm
2、如果如果每次观看广告的UserId都不一样，那么可以在showAd之前setUserId**

### 原生广告

#### java代码
```java
	//with:宽，广告位的宽高(取像素值px)
	//height:高，height=0时，自适应高度(取像素值px)
	//num:
	OSETInformation.getInstance().show(activity, with, height,广告位id, num,OSETInformationListener);
```
### Draw信息流广告
#### java代码
```java
    OSETDrawInformation.getInstance().show(activity, 广告位id, 广告数量,OSETDrawInformationListener);
```
### 视频内容插件

   1. 显示返回一个fragment调用方式
```java
	OSETVideoContent.getInstance().showVideoContentForFragment(activity,视频内容id, OSETVideoContentFragmentListener);
```
   2. 显示到activity的调用方式
```java
	//rewardCount:奖励次数（如果不传默认10次）
	//time:单次奖励倒计时时间（单位秒，传入值要求大于10s，如果不传，则不进行奖励）
	//desc:倒计时结束后的toast（默认是“奖励条件达成！”）
	OSETVideoContent.getInstance().setRewardCount(rewardCount).setDownTime(time).setDesc(desc);
	OSETVideoContent.getInstance().showVideoContentForActivity(activity,视频内容id, OSETVideoContentListener);
```
   3. 显示到View的调用方式
```java
	OSETVideoContent.getInstance().showVideoContentForView(activity, 视频内容id, OSETVideoContentListener);
```
### 信息流模块
   **1. activity模式加载**
```java
    //传入插屏广告位id
	OSETNews.getInstance().setInsertId(Common.POS_ID_Insert);
    //传入Banner广告位id
	OSETNews.getInstance().setBannerId(Common.POS_ID_Banner);
	//num表示每隔多少条信息出一个广告（5<num<10）
    //time表示倒计时的时间（传0则不需要倒计时功能，也就没有验证的功能）
	OSETNews.getInstance().showNews(activity, 信息流模块id, time,num,OSETNewsListener);
```
   **2. fragment模式加载**
```java
	OSETNews.getInstance().setInsertId(Common.POS_ID_Insert);
    OSETNews.getInstance().setBannerId(Common.POS_ID_Banner);
	//num表示每隔多少条信息出一个广告（5<num<10）
    getSupportFragmentManager().beginTransaction()
            .replace(R.id.fl, OSETNews.getInstance()
            .getNewsFragment(activity, 信息流模块id,视频内容id（可传""）, num))
            .commit();
```
### 悬浮窗广告
```java
	OSETSuspend osetSuspend = new OSETSuspend();
	//flSuspend:父布局（最好宽高比为1：1）
    osetSuspend.loadSuspend(activity, flSuspend, 广告位id, new OSETSuspendListener() {
        @Override
        public void loadSuccess() {

        }

        @Override
        public void onError(String s, String s1) {

        }

        @Override
        public void onClick() {

        }
    });
```
## 幸运大抽奖
```java
	OSETDial.getInstance().show(activity, "大奖的描述", int(大奖的概率：0到100), "小奖的描述", 
                        banner广告位id, 插屏广告位id, 激励视频广告位id, int(免费摇奖次数), 
                        int(每天最多摇奖次数),OSETDialListener );
```
## 星座运势
```java
	 OSETConstellatory.getInstance().show(activity,  banner广告位id,
                        插屏广告位id, 激励视频广告位id,OSETConstellatoryListener);
```
## 老黄历
```java
	OSETAlmanac.getInstance().showAlmanac(activity,激励视频广告位id,
                        banner广告位id, OSETVideoListener);
```
## 周公解梦
```java
	OSETOneiromancy.getInstance().showOneiromancy(activity,激励视频广告位id,
                        banner广告位id, OSETVideoListener);
```
## 天气预报
```java
	OSETWeather.getInstance().showWeather(activity, banner广告位id, 插屏广告位id, 
                        激励视频广告位id, OSETVideoListener);
```
## 学习天地
```java
	new OSETStudy().showStudy(activity,  激励视频广告位id, 插屏广告位id, banner广告位id, 
                        答题数量(int), OSETVideoListener);
```
## 电费充值
```java
	OSETElectric.getInstance().showRecharge(activity,用户id);
```
## 话费充值
```java
	 OSETRecharge.getInstance().showRecharge(activity,用户id);
```
## 防作弊
```java
	//OSETVoiceVerificationListener  onError（code,message）：失败的回调。根据信息进行处理
	new OSETVoiceVerification().setAppKey("找运营获取")
                               .setUserId("appUserId")
                               .showVerification(activity,OSETVoiceVerificationListener);
```
## 监听方法说明
### 初始化监听
```java
	new OSETInitListener() {
        @Override
        public void onError(String s) {
            //初始化失败：会调用不到广告，清选择合适的时机重新进行初始化
        }

        @Override
        public void onSuccess() {
		 	//初始化成功：可以开始调用广告
        }
    }
```

### 信息流模块监听
```java
	 new OSETNewsListener() {
        @Override
        public void onTimeOver(String key) {
            //倒计时结束回调
        }

        @Override
        public void onClose() {
            //界面关闭回调
        }
    }
```
### 视频内容插件监听
**Activity形式和View形式**
```java
	//Activity形式和View形式
	new OSETVideoContentListener(){

		@Override
        public void onError(String code, String e) {

        }

        @Override
        public void loadSuccess(View view) {
			//调用showVideoContentForActivity时不给此回调
            flVideoContent.removeAllViews();
            flVideoContent.addView(view);
        }
		@Override
        public void onTimeOver(String key) {
            super.onTimeOver(key);
			// 验证地址 http://open-set-api.shenshiads.com/reward/check/<key>（返回数据: {"code": 0}，code为0表示验证成
			//调用showVideoContentForView时不给此回调

        }

        @Override
        public void onClose() {
            super.onClose();
			//调用showVideoContentForView时不给此回调
            //关闭回调
        }
		@Override
            public void endVideo(int index, boolean isAd) {
            super.endVideo(index, isAd);
            //视频结束播放
        }

        @Override
        public void pauseVideo(int index, boolean isAd) {
            super.pauseVideo(index, isAd);
            //视频暂停播放
        }

        @Override
        public void resumeVideo(int index, boolean isAd) {
            super.resumeVideo(index, isAd);
            //视频重新播放
        }

        @Override
        public void startVideo(int index, boolean isAd) {
            super.startVideo(index, isAd);
            //视频开始播放
        }
	}
```
**Fragment形式**
```java
	//Fragment形式
	new OSETVideoContentFragmentListener() {
            @Override
            public void onError(String s, String s1) {

            }

            @Override
            public void loadSuccess(Fragment fragment) {
                //返回的fragment
            }

            @Override
            public void startVideo(int index, boolean isAd) {
               //开始播放视频第  index为下标
            }

            @Override
            public void pauseVideo(int index, boolean isAd) {
				//暂停播放视频第  index为下标                
            }

            @Override
            public void resumeVideo(int index, boolean isAd) {
				//继续播放视频第  index为下标    
            }

            @Override
            public void endVideo(int index, boolean isAd) {
				//完成播放视频第  index为下标    
            }
        }
```
### 插屏广告、开屏广告、banner广告监听
```java
	new OSETListener() {
       	@Override
        public void onShow() {
			//广告显示回调
        }


        @Override
        public void onError(String s, String s1) {
			//广告加载失败回调
        }

        @Override
        public void onClick() {
			//广告点击回调
        }

        @Override
        public void onClose() {
			//广告关闭回调
        }
    }
```

### 全屏视频、激励视频监听
```java
	new OSETVideoListener() {
		@Override
        public void onShow() {
			//广告显示回调
        }

		@Override
        public void onLoad() {
			//广告加载成功（只有使用预加载模式才有此方法的回调）
        }
        @Override
        public void onError(String s, String s1) {
			//广告加载失败回调
        }

        @Override
        public void onClick() {
			//广告点击回调
        }
		@Override
        public void onReward(String s) {
            //奖励回调
			 // 验证地址 http://open-set-api.shenshiads.com/reward/check/<key>（返回数据: {"code": 0}，code为0表示验证成
        }
		@Override
		public void onClose(String key) {
            //广告关闭回调
        }

		@Override
        public void onVideoStart() {
			//视频开始播放回调
        }

        @Override
        public void onVideoEnd(String key) {
            //视频观看完成
        }
    }
```
### 信息流
```java
	new OSETInformationListener() {
        @Override
        public void onShow(View view) {
			//广告显示回调，view为当前显示的view
        }

        @Override
        public void onError(String code, String e) {
			//获取信息流失败
        }

        @Override
        public void onClick(View view) {
			//单一view点击回调
        }

        @Override
        public void onClose(View view) {
			//单一view关闭回调
        }

        @Override
        public void loadSuccess(List<View> views) {
			//信息流广告获取成功回调
        }

        @Override
        public void onRenderSuess(View view) {
			//单一view渲染成功回调
        }

        @Override
        public void onRenderFail(View view) {
			//单一view渲染失败回调
        }

        @Override
        public void onVideoPlayError(View view, String code, String message) {
			//视频播放失败回调
        }
    }
```

### Draw信息流广告监听
```java
	new OSETDrawInformationListener() {
		@Override
        public void onError(String code, String e) {
            //获取广告流失败回调
        }

		@Override
        public void onVideoAdStartPlay() {
			//视频开始播放回调
        }

        @Override
        public void onVideoAdPaused() {
			//视频暂停回调
        }

        @Override
        public void onVideoAdContinuePlay() {
			//视频继续播放回调
        }

        @Override
        public void onVideoAdComplete() {
			//视频播放完成回调
        }

        @Override
        public void onAdClicked(View view) {
            //广告点击下载回调
        }

        @Override
        public void onAdShow(View view) {
            //广告显示回调，view为当前显示的view
        }

        @Override
        public void loadSuccess(List<View> views) {
            //信息流视频广告获取成功回调
        }
    }
```
### 摇奖监听
```java
	new OSETDialListener() {
        @Override
        public void onTopPrize() {
            //摇到大奖的回调
        }

        @Override
        public void onSmallAward() {
            //摇到小奖的回调
        }
    }
```
### 星座运势监听
```java
	new OSETConstellatoryListener() {
        @Override
        public void onReward(String key) {
            //每次观看完整视频会回调此方法
			 // 验证地址 http://open-set-api.shenshiads.com/reward/check/<key>（返回数据: {"code": 0}，code为0表示验证成

        }
    }
```
