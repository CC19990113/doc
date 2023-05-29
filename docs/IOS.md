----------
# OpenSet IOS SDK接入文档
----------

::: tip 注意		
  1.  SDK最低支持iOS 9.0		
  2.  SDK最低编译环境 Xcode 12.0 +		
:::

## 导入 
  **OSET.framework和第三方依赖SDK 到工程下.**

将下列SDK拖入到工程中,同时对应.bundle资源文件也添加到工程(SDK demo中提供)


Frameworks:

*   OSETSDK.framework
*   OSETSDK.bundle
    
*   BUAdSDK.framework  
    BURelyFoundation.framework  
    CSJAdSDK.framework  
    CSJAdSDK.bundle  
    (可 pod 'Ads-CN', '~>  5.0.0.5')
    
*   ABUAdSDK.framework  
    ABUAdCsjAdapter.framework
    
*   BeiZiSDK.framework  
    BeiZiFoundation.framework  
    (可 pod 'BeiZiSDK/BeiZiSDK')
    
*   GDTMobSDK  
    (可 pod 'GDTMobSDK','~>  4.14.12')
    
*   WindSDK.framework  
    WindFoundation.framework  
    Sigmob.bundle  
    (可 pod 'SigmobAd-iOS', '~>  4.7.1')
    
*   KSAdSDK.framework (Embed设置为'Embed & Sign')  
    KSAdSDK.bundle  
    (可pod配置,手动导入KSAdSDK.framework后 path指向 KSAdSDK.podspec文件路径  pod 'KSAdSDK', :path => './xxxx/Frameworks')
    
*   BaiduMobAdSDK.framework  
    baidumobadsdk.bundle  
    (可pod  pod 'BaiduMobAdSDK' , '~>  5.101')
    
*   PUADSDK.framework  
    (可pod  pod 'PUADSDK' , '~> 3.3.1')
    
    
*   IBXSDK.framework(可选-OSETIntegralWall（任务墙类型需要，不需要可以不引入）)  
    IBXSDK.bundle(可选-OSETIntegralWall（任务墙类型需要）)

## 添加依赖
  **添加必要系统依赖库以及工程配置**
    **如可用pod的全部使用pod引入成功 则无需额外依赖配置（info）**

### Link Binary With Libraries
 **在工程 Target Setting -> Build Phases -> Link Binary With Libraries 中进行添加**


*   SafariServices.framework
*   CFNetwork.framework  
    
*   AVFoundation.framework
*   WebKit.framework
*   StoreKit.framework
*   Security.framework
*   CoreTelephony.framework
*   SystemConfiguration.framework
*   QuartzCore.framework
*   CoreLocation.framework
*   AdSupport.framework
*   Accelerate.framework
*   ImageIO.framework
*   CoreMotion.framework
*   CoreMedia.framework
*   MediaPlayer.framework
*   MobileCoreServices.framework
*   MessageUI.framework
*   libxml2.tbd
*   libz.tbd
*   libsqlite3.tbd
*   libc++.tbd
*   libresolv.9.tbd
*   libxml2.2.tbd
*   libiconv.tbd
*   libbz2.1.0.tbd
*   libz.1.2.5.tbd
*   libc++abi.tbd
*   AudioToolbox.framework
*   CoreGraphics.framework
*   DeviceCheck.framework

### 修改配置及Info.plist
#### 1. Build Settings中Other Linker Flags 增加参数-ObjC、-l"c++"、 -l"c++abi" 、-l"sqlite3"、-l"z"。

 *  如需SDK在Swift开发语言中使用,导入OSETSDK-Bridge-Header.h文件。并且设置桥接路径,Build Settings -> object-c Bridging header,把Header路径拖进去即可.
如需支持bitcode，请联系开发人员。



#### 2. 设置允许Http连接,在工程的 Info.plist 文件中，设置 App Transport Security Settings 
选项下 Allow Arbitrary Loads 值为 YES，对应 plist 内容为:


```html
<key>NSAppTransportSecurity</key> 
<dict> 
    <key>NSAllowsArbitraryLoads</key> 
    <true/> 
</dict>

```


####  3. 在您的应用的Info.plist文件中，添加一个字符串SKAdNetworkItems键，如


```html
 <key>SKAdNetworkItems</key>
    <array>
        <dict>
            <key>SKAdNetworkIdentifier</key>
            <string>58922NB4GD.skadnetwork</string>
	</dict>
	<dict>
	    <key>SKAdNetworkIdentifier</key>
	    <string>238da6jt44.skadnetwork</string>
	</dict>
	<dict>
		<key>SKAdNetworkIdentifier</key>
		<string>r3y5dwb26t.skadnetwork</string>
	</dict>
	<dict>
		<key>SKAdNetworkIdentifier</key>
		<string>f7s53z58qe.skadnetwork</string>
	</dict>
	<dict>
		<key>SKAdNetworkIdentifier</key>
		<string>x2jnk7ly8j.skadnetwork</string>
	</dict>
	<dict>
		<key>SKAdNetworkIdentifier</key>
		<string>cstr6suwn9.skadnetwork</string>
	</dict>
	<dict>
            <key>SKAdNetworkIdentifier</key>
            <string>22mmun2rn5.skadnetwork</string>
	</dict>
	<dict>
	        <key>SKAdNetworkIdentifier</key>
	        <string>27a282f54n.skadnetwork</string>
	</dict>
</array> 
```

#### 4.  支持苹果 ATT：从 iOS 14 开始，若开发者设置 App Tracking Transparency 向用户申请跟踪授权，在用户授权之前IDFA 将不可用。
 如果用户拒绝此请求，应用获取到的 IDFA 将自动清零，可能会导致您的广告收入的降低
 要获取 App Tracking Transparency 权限，请更新您的 Info.plist，添加 NSUserTrackingUsageDescription 字段和自定义文案描述。  


 代码示例： 

```html
 <key>NSUserTrackingUsageDescription</key>
<string>该标识符将用于向您投放个性化广告</string>

} 
```


#### 5.  展示授权弹窗需要调用requestTrackingAuthorizationWithCompletionHandler:方法。
我们建议流量等待方法回调完成后处理广告相关逻辑，这样如果用户授权使用IDFA信息， SDK可以使用IDFA进行广告请求。

代码如下 


```html
 注 ：**********  获取广告追踪，展示授权弹窗，否则审核可能被拒   ********

 //   适配ios15  
 //  ios15获取广告追踪权限要写在 AppDelegate 里的 applicationDidBecomeActive 否则ios15 不弹框可能会被拒
 
 
Objective-C 代码示例
#import <AppTrackingTransparency/AppTrackingTransparency.h>
#import <AdSupport/AdSupport.h>
- (void)requestIDFA {
  [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
    // Tracking authorization completed. Start loading ads here.
  }];
}
Swift 代码示例
import AppTrackingTransparency
import AdSupport
func requestIDFA() {
  ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
    // Tracking authorization completed. Start loading ads here.
  })
} 
```


#### 6. 移除模拟器架构

打包上传报错 类似 ITMS-90087  包含 i386 x86_64
打包上架需要移除模拟器架构 i386 x86_64 
具体移除方法请参考 https://stackoverflow.com/questions/30547283/submit-to-app-store-issues-unsupported-architecture-x86


例：  
查看SDK架构   
先CD到目录下     lipo -info xxxxx                    例  lipo -info OSETSDK

移除模拟器架构 	lipo -remove x86_64 KsAdSDK -o KsAdSDK  
				lipo -remove i386 KsAdSDK -o KsAdSDK

然后再次查看SDK架构

Xcode12报错提示 Building for iOS Simulator, but the linked and embedded framework 'KSAdSDK.framework' 
was built for iOS + iOS Simulator.  
在Build Settings中将validate workspace改YES 


#### 7. SDK测试id

| ios测试_appkey                |  31DC084BB6B04838 |
|-----------------------|------------------------|
| ios测试_广告类型         | ios测试_广告位ID          |
| ios测试_短剧内容         | A0736045CDDF718C13DFF187254EA1D0 |
| ios测试_视频内容         | E06C7BB2C34605B4CD777EFD590DD4BE |
| ios测试_互动悬浮         | 4224443B309508BE30C3B8AC7CDE87C1 |
| ios测试_draw          | C773D52F59FF5AA418CD9E2181327197 |
| ios测试_信息流          | 3DC16BFC019545395507ED826899B16E |
| ios测试_原生           | 921DE1BF1B3F06838AE04233A42B01F1 |
| ios测试_全屏           | 8FCB39267CE40245B87EF8835A853708 |
| ios测试_激励           | E80DABEF5FD288492D4A9D05BF84E417 |
| ios测试_插屏           | 351C1A89F8AE79DF62C1B1165A5EAFCC |
| ios测试_banner       | 7B2BD37383E008B422C93486EACEA11D |
| ios测试_开屏           | 18666EAA65EC1969E90E982DCA2CB2DD |

  测试id不验证Bundle identifier(OSETXMAd除外)

``` 

其他广告类型详细请参考Demo 
```

## SDK初始化

```
+ (instancetype)shareInstance;

/**
SDK初始化
 
 @param publicId 媒体Id(appkey)
 */
+ (void)configure:(NSString *)publicId;

/// 获取聚合SDK版本号
+ (NSString *)version;

/// 打开本地日志模式
+ (void)openDebugLog;
/**
 SDK配置日志 用户唯一标识符 推荐设置
 
 @param uid  用户唯一标识符 。userid,手机号,加密字符串等。 此ID仅用于log日志追踪 
 */
+ (void)configureLogsWithUid:(NSString *)uid; 
```

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    [OSETManager configure:@"媒体ID"];
    
    [OSETManager openDebugLog]; //打开日志模式(默认关闭)
    
    return YES;
}
```

##  接入广告

### Banner广告

```
@interface BannerViewController ()<OSETBannerAdDelegate>

@property (nonatomic,strong) OSETBannerAd *bannerAd;

@end

@implementation BannerViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.bannerAd = [[OSETBannerAd alloc] initWithSlotId:self.slotId rootViewController:self containView:self.view rect:CGRectMake(0, 88, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.width*90/600)];
    self.bannerAd.delegate = self;
    [self.bannerAd loadAdData];
}
```

### 插屏广告

```
 @interface InsertViewController ()<OSETInterstitialAdDelegate>

@property (nonatomic,strong) OSETInterstitialAd *interstitialAd;

@end

@implementation InsertViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.interstitialAd = [[OSETInterstitialAd alloc] initWithSlotId:self.slotId];
    self.interstitialAd.delegate = self;
    [self.interstitialAd loadAdData];
} 
```

### 开屏广告

```
@interface SplashViewController ()<OSETSplashAdDelegate>

@property (nonatomic,strong) OSETSplashAd *splashAd;

@end

@implementation SplashViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    self.splashAd = [[OSETSplashAd alloc] initWithSlotId:self.slotId window:window bottomView:[UIView new]];
    self.splashAd.delegate = self;
    [self.splashAd loadAdDataAndShow];
} 
```

### 激励视频广告

```
 @interface RewardVideoViewController ()<OSETRewardVideoAdDelegate>

@property (nonatomic,strong)  OSETRewardVideoAd *rewardVideoAd;

@end

@implementation RewardVideoViewController


- (void)viewDidLoad {
    [super viewDidLoad]
	//激励视频初始化 
   self.rewardVideoAd = [[OSETRewardVideoAd alloc] initWithSlotId:self.slotId];
    self.rewardVideoAd.delegate = self;
    //[self.rewardVideoAd loadAdData];
	
	
	//    showFromRootViewController 可直接调用 直接调用show 方法 会自动load广告 并播放
	//    loadAdData 只是请求广告 但是并不播放   showFromRootViewController是播放视频
	[self.rewardVideoAd showFromRootViewController:self];

	// 具体回调参考demo
} 
```

### 全屏视频广告

```
@interface FullScreebViewController ()<OSETFullscreenVideoAdDelegate>

@property (nonatomic,strong) OSETFullscreenVideoAd *fullscreenVideoAd;

@end

@implementation FullScreebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.fullscreenVideoAd = [[OSETFullscreenVideoAd alloc] initWithSlotId:self.slotId];
    self.fullscreenVideoAd.delegate = self;
    [self.fullscreenVideoAd loadAdData];
}
```

### 原生广告

```
@interface NativeViewController ()<OSETNativeAdDelegate>

@property (nonatomic,strong) OSETNativeAd *nativeAd;

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //size高度传入0会自适应高度,并在回调中返回广告View,直接添加到需要展示的位置即可(详细使用参考Demo)
    self.nativeAd = [[OSETNativeAd alloc] initWithSlotId:@"广告位ID" size:CGSizeMake([UIScreen mainScreen].bounds.size.width, 0) isDrawNative:NO];
    self.nativeAd.delegate = self;
    [self.nativeAd loadAdData:3];
}
```

### 原生Draw Video广告

```
@interface NativeViewController ()<OSETNativeAdDelegate>

@property (nonatomic,strong) OSETNativeAd *draw_nativeAd;

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //size高度传入0会自适应高度,并在回调中返回广告View,直接添加到需要展示的位置即可(详细使用参考Demo)
    self.draw_nativeAd = [[OSETNativeAd alloc] initWithSlotId:@"广告位ID" size:CGSizeMake([UIScreen mainScreen].bounds.size.width, 0) isDrawNative:YES];
    self.draw_nativeAd.delegate = self;
    [self.draw_nativeAd loadAdData:3];

}
```

### 接入内容(快手视频内容)

```
@interface ContentSmallViewController ()

@property (nonatomic,strong) OSETFullContentAd *smallContentAd;

@end

@implementation ContentSmallViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.smallContentAd = [[OSETFullContentAd alloc] initWithSlotId:@"广告位ID" type:OSETContentTypeFeed];

    // Do any additional setup after loading the view.
}
```

### 接入咨询内容(快手视频、信息流)

```
- @interface NewsViewController ()

@property (nonatomic,strong) OSETConsult *consultAd;

@end

@implementation NewsViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
 self.consultAd = [[OSETConsult alloc] initWithSlotId:@"908FD9663CDD3817B3F0F22B2DCA0277"
                                            showAdsCount:6
                                              timeLength:30
                                  withInterstitialSlotId:@"A7A86C33868F691D315ADF349F227CCC"
                                        withBannerSlotId:@"EEFC4E97569AFD990BF82C5901AED363"];
    // Do any additional setup after loading the view.
}

- (void)showAd {
    [self.consultAd showFromRootViewController:self];
}
```

### 星座运势

```
-@interface ConstellatoryViewController ()<OSETConstellatoryAdDelegate>
@property(nonatomic,strong)OSETConstellatoryAd * constellatoryAd;
@end

@implementation ConstellatoryViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"星座运势";
    self.constellatoryAd = [[OSETConstellatoryAd alloc] initWithRewardVideoSlotId:@"DF5811FB3CB112C2D41C0E3EDD81C4C7"
                                                           withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                                                 withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"];
    
    self.constellatoryAd.delegate = self;
    // Do any additional setup after loading the view.
}
/// 星座激励视频关闭
- (void)OSETConstellatoryRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"ConstellatoryViewController --- rewardVideoDidClose ");
}
-(void)showAd{
    [self.constellatoryAd showFromRootViewController:self];
}
```

###  转盘抽奖

```
 @interface LuckyDrawViewController ()<OSETDialAdDelegate>
@property (nonatomic,strong) OSETDialAd *consultAd;


@end

@implementation LuckyDrawViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
       self.title = @"幸运抽奖";
       self.consultAd = [[OSETDialAd alloc] initWithRewardVideoSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372"
                                               withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                                     withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                                       withAwardsName:@"大大大奖"
                                                       withAwardsOdds:30//中大奖的概率
                                                      withDefaultName:@"小小小奖"
                                                       withLotteryNum:1
                                                    withLotteryMaxNum:3];
    self.consultAd.delegate = self;
    [self.consultAd showFromRootViewController:self];

    // Do any additional setup after loading the view.
}
-(void)showAd{
    [self.consultAd showFromRootViewController:self];
}

-(void)OSETDialAwardsCompleteWithIsAwards:(BOOL)isAwards{
    if (isAwards) {
        NSLog(@"LuckyDrawViewController -- 中了Awards奖项");
    }else{
        NSLog(@"LuckyDrawViewController -- 中了Default奖项");
    }
} 
```

### 接入夺宝

```
 @interface LootTreasureViewController ()<OSETLootRewardVideoAdDelegate>
@property (nonatomic,strong)  OSETLootTreasureAd* luckAd;


@end
@implementation LootTreasureViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    
  self.navigationItem.title = @"视频夺宝";
     self.luckAd = [[OSETLootTreasureAd alloc]initWithSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372"
                                   withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                         withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                            withAppUserId:@"123"];
     self.luckAd.delegate = self;
     [self.luckAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
}
- (void)OSETRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@"OSETRewardVideoDidReceiveSuccess");
}

/// 激励视频加载失败
- (void)OSETRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"激励视频加载失败 ==%@",error);
}

/// 激励视频点击
- (void)OSETRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@"激励视频点击");
}

/// 激励视频关闭
- (void)OSETRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"激励视频关闭");
}

//激励视频播放出错
- (void)OSETRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"激励视频播放出错");
}

//激励视频播放结束
- (void)OSETRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@"激励视频播放结束");
}
//激励视频开始播放
- (void)OSETRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@"激励视频开始播放");
}
//激励视频奖励
- (void)OSETRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"激励视频奖励");
} 
```

### 接入任务墙

```
 @interface IntegralWallViewController ()<OSETLootRewardVideoAdDelegate>
@property(nonatomic,strong)OSETIntegralWallAd * integralAd;
@end
@implementation IntegralWallViewController
- (void)viewDidLoad {
    [super viewDidLoad];
	self.title = @"任务墙";
    self.integralAd = [[OSETIntegralWallAd alloc]initWithAppUserId:@"123"
                                                        withAppKey:@"142792798"
                                                     withIBXAppKey:@"142793166"
                                                     withSecretKey:@"291d28a7be9de4ef"
                                                  withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                            withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                                  withNativeSlotId:@"0BA47216E326C31D9DD2D2923D62D9BC"];
    [self.integralAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
} 
```

### 接入Web转盘

```
 @interface WebDialViewController ()<OSETWebDialAdDelegate>
@property (nonatomic,strong)  OSETWebDialAd* luckAd;


@end

@implementation WebDialViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.luckAd = [[OSETWebDialAd alloc] initWithSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372"
                                 withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                       withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                          withAppUserId:@"123"];
    self.luckAd.delegate = self;
    [self.luckAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
} 
```

### 周公解梦

```
 @interface CrazyDreamViewController ()<OSETCrazyDreamAdRewardVideoDelegate>
@property (nonatomic,strong)  OSETCrazyDreamAd* crazyDream;

@end

@implementation CrazyDreamViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.crazyDream = [[OSETCrazyDreamAd alloc]initWithSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372"
                                             withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                                withAppUserId:@"123"];
    self.crazyDream.delegate = self;
    [self.crazyDream showFromRootViewController:self];
    
    // Do any additional setup after loading the view.
} 
```

### 老黄历

```
 @interface CalendarViewController ()<OSETCalendarAdRewardVideoDelegate>
@property(nonatomic,strong)OSETCalendarAd * calendarAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.calendarAd  = [[OSETCalendarAd alloc]initWithSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372" withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657" withAppUserId:@""];
    self.calendarAd.delegate = self;
    [self.calendarAd showFromRootViewController:self];
    
    // Do any additional setup after loading the view.
} 
```

### 悬浮广告位

```
 @interface CalendarViewController ()<OSETSuspendAdDelegate>
@property (nonatomic,strong) OSETSuspendAd *suspendAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
       self.suspendAd = [[OSETSuspendAd alloc]initWithSlotId:@"5172584995BB18D05EAB3876E0B70015" withViewController:self];
        self.suspendAd.delegate = self;
        [self.suspendAd loadData];
    // Do any additional setup after loading the view.
} 
```

### 答题

```
 @interface AnswerAdViewController ()<OSETAnswerAdRewardVideoDelegate>
@property (nonatomic,strong) OSETAnswerAd *answerAdAd;
@end

@implementation AnswerAdViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
	//SlotId 激励视频广告位id  必传参数
	//InterstitialSlotId 插屏广告位id  
	//BannerSlotId banner广告位id 
	//AnswerNum 答题次数
    
    self.answerAdAd = [[OSETAnswerAd alloc]initWithSlotId:@"971D11E82E1009B5CAA2D00EFBC4E372"
                                   withInterstitialSlotId:@"4FD8476AE54A3DBA39CCD635BBD48957"
                                   withBannerSlotId:@"58A0BB27A707FD48ECACF89B0E8A9657"
                                            withAnswerNum:@"3"];
    
    self.answerAdAd.delegate = self;
    [self.answerAdAd showFromRootViewController:self];


    // Do any additional setup after loading the view.
}
/// 激励视频关闭
- (void)OSETConstellatoryRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"ConstellatoryViewController --- rewardVideoDidClose ");
}
-(void)showAd{
    [self.answerAdAd showFromRootViewController:self];
}

/// 激励视频加载成功
/// @param rewardVideoAd 激励视频实例
/// @param slotId 广告位ID
- (void)OSETAnswerAdRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@"%s",__FUNCTION__);
}

/// 激励视频加载失败
- (void)OSETAnswerAdRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"%s",__FUNCTION__);
}

/// 激励视频点击
- (void)OSETAnswerAdRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@"%s",__FUNCTION__);
}

/// 激励视频关闭
- (void)OSETAnswerAdRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"%s",__FUNCTION__);
}

//激励视频播放出错
- (void)OSETAnswerAdRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"%s",__FUNCTION__);
}

//激励视频播放结束
- (void)OSETAnswerAdRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@"%s",__FUNCTION__);
}
//激励视频开始播放
- (void)OSETAnswerAdRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@"%s",__FUNCTION__);
}
//激励视频奖励
- (void)OSETAnswerAdRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"%s",__FUNCTION__);
} 
```

### 天气

```
 @interface CalendarViewController ()<OSETWeatherAdDelegate>
@property (nonatomic,strong) OSETWeatherAd *weatherAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
	//SlotId 激励视频广告位id  必传参数
	//InterstitialSlotId 插屏广告位id  
	//BannerSlotId banner广告位id 
  self.weatherAd = [[OSETWeatherAd alloc]initWithSlotId:@"激励视频广告位id"
                                    withInterstitialSlotId:@"插屏广告位id"
                                          withBannerSlotId:@"banner广告位id"];
     self.weatherAd.delegate = self;
     [self.weatherAd showFromRootViewController:self];



    // Do any additional setup after loading the view.
}
- (void)OSETWeatherRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@"OSETWeatherRewardVideoDidReceiveSuccess");
}

/// 激励视频加载失败
- (void)OSETWeatherRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"OSETWeatherRewardVideoLoadToFailed== %@",error);
}

/// 激励视频点击
- (void)OSETWeatherRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@"OSETWeatherRewardVideoDidClick");
}

/// 激励视频关闭
- (void)OSETWeatherRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"OSETWeatherRewardVideoDidClose");
}

//激励视频播放出错
- (void)OSETWeatherRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@"OSETWeatherRewardVideoPlayError == %@",error);
}

//激励视频播放结束
- (void)OSETWeatherRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@"OSETWeatherRewardVideoPlayEnd");
}
//激励视频开始播放
- (void)OSETWeatherRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@"OSETWeatherRewardVideoPlayStart");
}
//激励视频奖励
- (void)OSETWeatherRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@"OSETWeatherRewardVideoOnReward");
} 
```

## 代理方法说明

```
所有广告位至少有四个代理方法,广告加载成功、广告加载失败、广告点击、广告关闭,
视频类广告需要在加载成功后手动调起广告,详细使用参考demo
```

##  隐私政策

```
SDK用到的隐私信息 包括精确位置(位置)、设备 ID(标识符)、广告数据(使用数据)、其他数据 类型.
用于第三方广告，与用户身份关联，用于追踪目的。（App Store  5.1.2&&3.3.9 被拒）
```

## SDK 错误码

| code | 描述 |
| --- | --- |
| A3001 | 网络错误 |
| A4001 | 初始化错误, 包括广告位为空、AppKey为空、ViewController为空 |
| A4003 | 广告位错误 |
| A4006 | 广告未曝光 |
| A4007 | 设备不支持 |
| A4008 | 设备方向不支持 |
| A4009 | 开屏跳过按钮定义非法 |
| A4010 | 开屏bottomView设置非法 |
| A4011 | 请求广告超时 |
| A4013 | 系统不支持，原生视频模板广告只支持 iOS 9 及以上系统 |
| A4014 | 广告数据返回前尝试展示广告, 例如激励视频拉到广告后才可以调用展示接口 |
| A4015 | 广告已经曝光过，不允许二次展示，请重新拉取 |
| A4016 | 应用横竖方向与广告位支持方向不匹配 |
| A5001 | 后台数据错误 |
| A5002 | 视频素材下载错误 |
| A5003 | 视频素材播放错误 |
| A5004 | 没匹配的广告，禁止重试，否则影响流量变现效果 |
| A5005 | 广告请求量或者消耗等超过日限额，请第二天再请求广告 |
| A5006 | 包名校验非法 |
| A5009 | 广告请求量或者消耗等超过小时限额，请一小时后再请求广告 |
| A5010 | 广告样式校验失败，请检查广告位与接口使用是否一致 |
| A5012 | 广告过期，请重新拉取 |
| A5013 | 广告拉取过于频繁，请稍后再试 |
| A5014 | 视频广告视频和图片素材都下载错误 |
| A5015 | 当前版本不出广告 |
| A5016 | JSON数据解析失败 |
| A6000 | 未知错误，联系腾讯广告商务同事协助排查 |
| B20000 | 成功 |
| B20001 | 没有合适的广告返回而导致的请求没有填充，偶尔出现属于正常情况。如果出现情况较多或者必现的话，请先检查一下广告尺寸是否填写正确，是否有使用模拟器测试广告，单个设备是否一天请求了大量广告但没有展示或者展示数极低等。排查以上问题依然没有结论可以联系技术支持同学或者提交工单（包含代码位和出现概率以及请求时间）相关同学查明后会做出回复。 |
| B40000 | http content type错误 |
| B40001 | http request pb错误 |
| B40002 | source\_type=‘app’, 请求app不能为空 |
| B40003 | source\_type=‘wap’, 请求wap不能为空 |
| B40004 | 广告位不能为空 |
| B40005 | 广告位尺寸不能为空 |
| B40006 | 广告位ID不合法，例如，位数不对或者输入的广告位ID错误。 |
| B40007 | 广告数量错误 |
| B40008 | 图片尺寸错误 |
| B40009 | 媒体ID不合法 |
| B40010 | 媒体类型不合法 |
| B40011 | 广告类型不合法 |
| B40012 | 媒体接入类型不合法，已废弃 |
| B40013 | 代码位ID是开屏代码位，但是adType不是开屏 |
| B40014 | redirect参数不正确 |
| B40015 | 媒体请求里的字段上传的不正确或不完整，需要整改，请关注站内信的整改通知。 |
| B40016 | 代码位ID 与应用ID 不匹配或者应用ID 缺失。初始化时需要填写appid，且在activity中需要填写代码位ID。媒体要确保这两个ID填写正确且匹配。 |
| B40017 | 媒体接入类型不合法 API/SDK |
| B40018 | 媒体在平台上录入的包名与项目里的包名不一致。 |
| B40019 | 媒体在平台上申请的代码位广告类型和代码中使用的广告类型接口不一致。例如平台上是开屏的广告类型，但是代码中请求的接口是banner或者其他非开屏的广告类型，如果不太清楚不同代码位类型对应的接口，麻烦去查询SDK包里的对接文档。 |
| B40020 | 开发注册新上线广告位超出日请求量限制 |
| B40021 | apk签名SHA1值与媒体平台录入的SHA1不一致 |
| B40022 | 媒体在平台上申请的代码位“是否原生”属性与代码中使用的接口不匹配。例如：1. 媒体在平台上选择的是个性化模板banner广告的话，Android代码中请参考BannerExpressActivity进行调用；iOS代码中请参考BUDExpressBannerViewController进行调用。2. 媒体在平台上选择的是个性化模板插屏广告的话，代码中请参考InteractionExpressActivity进行调用；iOS代码位中请参考BUDExpressInterstitialViewController进行调用。PS：模板广告会带有express字样标识。 |
| B40023 | os字段填的不对 |
| B40024 | sdk 版本过低不返回广告 |
| B40025 | 渲染异常，分为两种情况：1、Android版本，媒体使用了非该应用所属账号下的SDK版本导致，请媒体到该代码位所属账号下工具-文档下载展示的SDK版本去进行接入。2、iOS版本，媒体使用2100之前的版本可能渲染异常，请媒体更新到最新版本接入即可解决该问题。 |
| B40026 | 使用海外ip请求国内服务器导致，请确认使用的是国内ip请求广告。 |
| B40028 | ios老设备（涉及设备 iPad 4G/iPad 3G/iPhone 5/iPhone 5C/iPad Mini 1G/iPad 2G/iPhone 4S）被屏蔽，会不返回广告。在2310版本后放开了限制，媒体可以更新到2310或者之后的版本。 |
| B40029 | 两种情况：1. SDK版本低；如果您使用了原生类型为模板渲染的广告，即个性化模板广告，Android版本不能低于2017，iOS版本不能低于2011。2. 接口使用错误；如果您的SDK版本（双端）大于等于2500，代码位的原生类型是模板渲染，麻烦确认使用的接口为个性化模板广告。 |
| B50001 | 服务器错误 |
| B60001 | show event处理错误 |
| B60002 | click event处理错误 |
| B60007 | 激励视频验证服务器异常或处理失败 |
| B-1 | 数据解析失败。客户端代码问题的合集，可先排查以下情况：1:媒体在子线程调用了show。2:注册点击事件 时viewgroup传空。3:媒体在onFeedLoaded回调里的业务逻辑发生了异常，导致SDK走到了onError回调 中。排查以上问题依然没有结论可以联系技术支持同学或者提交工单（包含代码位和出现概率以及请求时 间）。 |
| B-2 | 网络错误 |
| B-3 | 解析数据没有ad |
| B-4 | 返回数据缺少必要字段 |
| B-5 | bannerAd加载图片失败 |
| B-6 | 插屏广告图片加载失败 |
| B-7 | 开屏广告图片加载失败 |
| B-8 | 频繁请求 |
| B-9 | 请求实体为空 |
| B-10 | 缓存解析失败 |
| B-11 | 缓存过期 |
| B-12 | 缓存中没有开屏广告 |
| B101 | 渲染结果数据解析失败 |
| B102 | 未匹配到主模板：主模板没有下载到本地导致。偶发在首次请求广告时属于正常情况。 |
| B103 | 未匹配到子模板：偶发在接入初期，没有匹配到模板导致。待sdk将模板下载成功后不会出现。 |
| B104 | 物料数据异常 |
| B105 | 模版数据解析异常 |
| B106 | 渲染异常 |
| B107 | 模板渲染超时未回调，可能原因有1. 网络原因或者2. 硬件原因，因此导致渲染失败，可以更换手机或者网络环境测试。 |
| C0 | SDK没有进行初始化 |
| C1 | SDK初始化失败 |
| C2 | 无效的参数传入 |
| C3 | 播放视频时发生错误 |
| C4 | SDK初始化不完整,发生异常 |
| C5 | 广告被插件拦截, 发生错误 |
| C6 | SDK无法读取或写入文件 |
| C7 | 未知的设备标识符 |
| C8 | 尝试播放广告时发生异常 |
| C9 | SDK内部发生异常 |
| C10 | 如果这个代码被调用,意味暂时还没有广告可播放,SDK会定时向服务器进行查询,在获取到广告后,此错误代码会取消 |
| D-1 | 没有广告填充，可能导致的原因：1.您在测试期间所获取的广告均为Mintegral的正式广告，因此会受到算法智能优化的影响，若一段时间内大量加载和展示广告，可能导致一段时间后没有广告填充的现象。 |
| D-9 | 请求超时 |
| D-10 | appID和appKey不匹配，解决方案：检查APPkey和APPID是否填写正确，APPkey可以在应用设置（APP Setting）模块顶部获取 |
| D-1201 | 该unitID不存在/填写错误 |
| D-1202 | unitID没传 |
| D-1203 | 在该appID和unitID不匹配 |
| D-1205 | 传入的unitID广告类型不符 |
| D-130 | appID没有传入 |
| D-1302 | 该appID不存在/填写错误 |
| D-1904 | 请求时的网络状态不对，一般是SDK初始化还未完成就去请求导致的 |
| D-2102 | 无法取得osVersion，一般是GDPR开关导致的 |
| E500420 | 请求的app已经关闭广告服务 |
| E500422 | 请求参数缺少设备信息 |
| E500424 | 缺少设备id相关信息 |
| E500428 | 缺少广告为信息 |
| E500430 | 错误的广告位信息 |
| E500432 | 广告位不存在，或者appid与广告位不匹配 |
| E500433 | 广告位不存在或是已关闭 |
| E500435 | 设备的操作系统类型，与请求的app的系统类型不匹配 |
| E500436 | 广告单元id与请求的广告类型不匹配 |
| E500437 | 缺少idfa。仅（iOS） |
| E500473 | 请求的app不存在 |
| E500700 | app未设置聚合策略 |
| E500701 | app未开通任何广告渠道 |
| E200000 | 无广告填充 |
| E600100 | 网络出错 |
| E600101 | 请求出错 |
| E600102 | 未找到该渠道的适配器 |
| E600103 | 配置的策略为空 |
| E600104 | 文件下载错误 |
| E600105 | 下载广告超时 |
| E600106 | 聚合通知给开发者的统一错误码，由于多渠道无法区分具体原因。配置单一渠道时使用该渠道错误码。 |
| E600107 | 不能在后台调用load |
| E600108 | protoBuf协议解析出错 |
| E610002 | 激励视频播放出错 |
| E600103 | 激励视频广告未准备好 |
| E600104 | server下发的广告信息缺失关键信息 |
| E600105 | 下载的文件校验md5出错 |
| E620002 | 开屏广告不支持当前方向 |
| E620003 | 开屏广告不支持的资源类型 |
| S70001 | 网络请求失败 |
| S70002 | 未能匹配到合适的广告 |
| S3000 | 权限验证失败 |
| S99901 | 未捕获的异常 |
| S5001 | DSP没有出价 |
| S5002 | 广告位不投放 |
| S5003 | DSP log url 没有配置 |
| S5004 | 广告位被禁用 |
| S5005 | SDK被禁用 |
| S6001 | 请求数超过限流次数或者超时 |
