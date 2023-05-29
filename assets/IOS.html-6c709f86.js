import{_ as n,p as e,q as i,a1 as t}from"./framework-5866ffd3.js";const d={},a=t(`<hr><h1 id="openset-ios-sdk接入文档" tabindex="-1"><a class="header-anchor" href="#openset-ios-sdk接入文档" aria-hidden="true">#</a> OpenSet IOS SDK接入文档</h1><hr><div class="custom-container tip"><p class="custom-container-title">注意</p><ol><li>SDK最低支持iOS 9.0</li><li>SDK最低编译环境 Xcode 12.0 +</li></ol></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><p><strong>OSET.framework和第三方依赖SDK 到工程下.</strong></p><p>将下列SDK拖入到工程中,同时对应.bundle资源文件也添加到工程(SDK demo中提供)</p><p>Frameworks:</p><ul><li><p>OSETSDK.framework</p></li><li><p>OSETSDK.bundle</p></li><li><p>BUAdSDK.framework<br> BURelyFoundation.framework<br> CSJAdSDK.framework<br> CSJAdSDK.bundle<br> (可 pod &#39;Ads-CN&#39;, &#39;~&gt; 5.0.0.5&#39;)</p></li><li><p>ABUAdSDK.framework<br> ABUAdCsjAdapter.framework</p></li><li><p>BeiZiSDK.framework<br> BeiZiFoundation.framework<br> (可 pod &#39;BeiZiSDK/BeiZiSDK&#39;)</p></li><li><p>GDTMobSDK<br> (可 pod &#39;GDTMobSDK&#39;,&#39;~&gt; 4.14.12&#39;)</p></li><li><p>WindSDK.framework<br> WindFoundation.framework<br> Sigmob.bundle<br> (可 pod &#39;SigmobAd-iOS&#39;, &#39;~&gt; 4.7.1&#39;)</p></li><li><p>KSAdSDK.framework (Embed设置为&#39;Embed &amp; Sign&#39;)<br> KSAdSDK.bundle<br> (可pod配置,手动导入KSAdSDK.framework后 path指向 KSAdSDK.podspec文件路径 pod &#39;KSAdSDK&#39;, :path =&gt; &#39;./xxxx/Frameworks&#39;)</p></li><li><p>BaiduMobAdSDK.framework<br> baidumobadsdk.bundle<br> (可pod pod &#39;BaiduMobAdSDK&#39; , &#39;~&gt; 5.101&#39;)</p></li><li><p>PUADSDK.framework<br> (可pod pod &#39;PUADSDK&#39; , &#39;~&gt; 3.3.1&#39;)</p></li><li><p>IBXSDK.framework(可选-OSETIntegralWall（任务墙类型需要，不需要可以不引入）)<br> IBXSDK.bundle(可选-OSETIntegralWall（任务墙类型需要）)</p></li></ul><h2 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h2><p><strong>添加必要系统依赖库以及工程配置</strong><strong>如可用pod的全部使用pod引入成功 则无需额外依赖配置（info）</strong></p><h3 id="link-binary-with-libraries" tabindex="-1"><a class="header-anchor" href="#link-binary-with-libraries" aria-hidden="true">#</a> Link Binary With Libraries</h3><p><strong>在工程 Target Setting -&gt; Build Phases -&gt; Link Binary With Libraries 中进行添加</strong></p><ul><li><p>SafariServices.framework</p></li><li><p>CFNetwork.framework</p></li><li><p>AVFoundation.framework</p></li><li><p>WebKit.framework</p></li><li><p>StoreKit.framework</p></li><li><p>Security.framework</p></li><li><p>CoreTelephony.framework</p></li><li><p>SystemConfiguration.framework</p></li><li><p>QuartzCore.framework</p></li><li><p>CoreLocation.framework</p></li><li><p>AdSupport.framework</p></li><li><p>Accelerate.framework</p></li><li><p>ImageIO.framework</p></li><li><p>CoreMotion.framework</p></li><li><p>CoreMedia.framework</p></li><li><p>MediaPlayer.framework</p></li><li><p>MobileCoreServices.framework</p></li><li><p>MessageUI.framework</p></li><li><p>libxml2.tbd</p></li><li><p>libz.tbd</p></li><li><p>libsqlite3.tbd</p></li><li><p>libc++.tbd</p></li><li><p>libresolv.9.tbd</p></li><li><p>libxml2.2.tbd</p></li><li><p>libiconv.tbd</p></li><li><p>libbz2.1.0.tbd</p></li><li><p>libz.1.2.5.tbd</p></li><li><p>libc++abi.tbd</p></li><li><p>AudioToolbox.framework</p></li><li><p>CoreGraphics.framework</p></li><li><p>DeviceCheck.framework</p></li></ul><h3 id="修改配置及info-plist" tabindex="-1"><a class="header-anchor" href="#修改配置及info-plist" aria-hidden="true">#</a> 修改配置及Info.plist</h3><h4 id="_1-build-settings中other-linker-flags-增加参数-objc、-l-c-、-l-c-abi-、-l-sqlite3-、-l-z-。" tabindex="-1"><a class="header-anchor" href="#_1-build-settings中other-linker-flags-增加参数-objc、-l-c-、-l-c-abi-、-l-sqlite3-、-l-z-。" aria-hidden="true">#</a> 1. Build Settings中Other Linker Flags 增加参数-ObjC、-l&quot;c++&quot;、 -l&quot;c++abi&quot; 、-l&quot;sqlite3&quot;、-l&quot;z&quot;。</h4><ul><li>如需SDK在Swift开发语言中使用,导入OSETSDK-Bridge-Header.h文件。并且设置桥接路径,Build Settings -&gt; object-c Bridging header,把Header路径拖进去即可. 如需支持bitcode，请联系开发人员。</li></ul><h4 id="_2-设置允许http连接-在工程的-info-plist-文件中-设置-app-transport-security-settings" tabindex="-1"><a class="header-anchor" href="#_2-设置允许http连接-在工程的-info-plist-文件中-设置-app-transport-security-settings" aria-hidden="true">#</a> 2. 设置允许Http连接,在工程的 Info.plist 文件中，设置 App Transport Security Settings</h4><p>选项下 Allow Arbitrary Loads 值为 YES，对应 plist 内容为:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>NSAppTransportSecurity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>NSAllowsArbitraryLoads<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>true</span><span class="token punctuation">/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-在您的应用的info-plist文件中-添加一个字符串skadnetworkitems键-如" tabindex="-1"><a class="header-anchor" href="#_3-在您的应用的info-plist文件中-添加一个字符串skadnetworkitems键-如" aria-hidden="true">#</a> 3. 在您的应用的Info.plist文件中，添加一个字符串SKAdNetworkItems键，如</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkItems<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>58922NB4GD.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>238da6jt44.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>r3y5dwb26t.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>f7s53z58qe.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>x2jnk7ly8j.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>cstr6suwn9.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>22mmun2rn5.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
	        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>SKAdNetworkIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>27a282f54n.skadnetwork<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-支持苹果-att-从-ios-14-开始-若开发者设置-app-tracking-transparency-向用户申请跟踪授权-在用户授权之前idfa-将不可用。" tabindex="-1"><a class="header-anchor" href="#_4-支持苹果-att-从-ios-14-开始-若开发者设置-app-tracking-transparency-向用户申请跟踪授权-在用户授权之前idfa-将不可用。" aria-hidden="true">#</a> 4. 支持苹果 ATT：从 iOS 14 开始，若开发者设置 App Tracking Transparency 向用户申请跟踪授权，在用户授权之前IDFA 将不可用。</h4><p>如果用户拒绝此请求，应用获取到的 IDFA 将自动清零，可能会导致您的广告收入的降低 要获取 App Tracking Transparency 权限，请更新您的 Info.plist，添加 NSUserTrackingUsageDescription 字段和自定义文案描述。</p><p>代码示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>NSUserTrackingUsageDescription<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>该标识符将用于向您投放个性化广告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-展示授权弹窗需要调用requesttrackingauthorizationwithcompletionhandler-方法。" tabindex="-1"><a class="header-anchor" href="#_5-展示授权弹窗需要调用requesttrackingauthorizationwithcompletionhandler-方法。" aria-hidden="true">#</a> 5. 展示授权弹窗需要调用requestTrackingAuthorizationWithCompletionHandler:方法。</h4><p>我们建议流量等待方法回调完成后处理广告相关逻辑，这样如果用户授权使用IDFA信息， SDK可以使用IDFA进行广告请求。</p><p>代码如下</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> 注 ：**********  获取广告追踪，展示授权弹窗，否则审核可能被拒   ********

 //   适配ios15  
 //  ios15获取广告追踪权限要写在 AppDelegate 里的 applicationDidBecomeActive 否则ios15 不弹框可能会被拒
 
 
Objective-C 代码示例
#import &lt;AppTrackingTransparency/AppTrackingTransparency.h&gt;
#import &lt;AdSupport/AdSupport.h&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-移除模拟器架构" tabindex="-1"><a class="header-anchor" href="#_6-移除模拟器架构" aria-hidden="true">#</a> 6. 移除模拟器架构</h4><p>打包上传报错 类似 ITMS-90087 包含 i386 x86_64 打包上架需要移除模拟器架构 i386 x86_64 具体移除方法请参考 https://stackoverflow.com/questions/30547283/submit-to-app-store-issues-unsupported-architecture-x86</p><p>例：<br> 查看SDK架构<br> 先CD到目录下 lipo -info xxxxx 例 lipo -info OSETSDK</p><p>移除模拟器架构 lipo -remove x86_64 KsAdSDK -o KsAdSDK<br> lipo -remove i386 KsAdSDK -o KsAdSDK</p><p>然后再次查看SDK架构</p><p>Xcode12报错提示 Building for iOS Simulator, but the linked and embedded framework &#39;KSAdSDK.framework&#39; was built for iOS + iOS Simulator.<br> 在Build Settings中将validate workspace改YES</p><h4 id="_7-sdk测试id" tabindex="-1"><a class="header-anchor" href="#_7-sdk测试id" aria-hidden="true">#</a> 7. SDK测试id</h4><table><thead><tr><th>ios测试_appkey</th><th>31DC084BB6B04838</th></tr></thead><tbody><tr><td>ios测试_广告类型</td><td>ios测试_广告位ID</td></tr><tr><td>ios测试_短剧内容</td><td>A0736045CDDF718C13DFF187254EA1D0</td></tr><tr><td>ios测试_视频内容</td><td>E06C7BB2C34605B4CD777EFD590DD4BE</td></tr><tr><td>ios测试_互动悬浮</td><td>4224443B309508BE30C3B8AC7CDE87C1</td></tr><tr><td>ios测试_draw</td><td>C773D52F59FF5AA418CD9E2181327197</td></tr><tr><td>ios测试_信息流</td><td>3DC16BFC019545395507ED826899B16E</td></tr><tr><td>ios测试_原生</td><td>921DE1BF1B3F06838AE04233A42B01F1</td></tr><tr><td>ios测试_全屏</td><td>8FCB39267CE40245B87EF8835A853708</td></tr><tr><td>ios测试_激励</td><td>E80DABEF5FD288492D4A9D05BF84E417</td></tr><tr><td>ios测试_插屏</td><td>351C1A89F8AE79DF62C1B1165A5EAFCC</td></tr><tr><td>ios测试_banner</td><td>7B2BD37383E008B422C93486EACEA11D</td></tr><tr><td>ios测试_开屏</td><td>18666EAA65EC1969E90E982DCA2CB2DD</td></tr></tbody></table><p>测试id不验证Bundle identifier(OSETXMAd除外)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
其他广告类型详细请参考Demo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sdk初始化" tabindex="-1"><a class="header-anchor" href="#sdk初始化" aria-hidden="true">#</a> SDK初始化</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+ (instancetype)shareInstance;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    [OSETManager configure:@&quot;媒体ID&quot;];
    
    [OSETManager openDebugLog]; //打开日志模式(默认关闭)
    
    return YES;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接入广告" tabindex="-1"><a class="header-anchor" href="#接入广告" aria-hidden="true">#</a> 接入广告</h2><h3 id="banner广告" tabindex="-1"><a class="header-anchor" href="#banner广告" aria-hidden="true">#</a> Banner广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface BannerViewController ()&lt;OSETBannerAdDelegate&gt;

@property (nonatomic,strong) OSETBannerAd *bannerAd;

@end

@implementation BannerViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.bannerAd = [[OSETBannerAd alloc] initWithSlotId:self.slotId rootViewController:self containView:self.view rect:CGRectMake(0, 88, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.width*90/600)];
    self.bannerAd.delegate = self;
    [self.bannerAd loadAdData];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插屏广告" tabindex="-1"><a class="header-anchor" href="#插屏广告" aria-hidden="true">#</a> 插屏广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface InsertViewController ()&lt;OSETInterstitialAdDelegate&gt;

@property (nonatomic,strong) OSETInterstitialAd *interstitialAd;

@end

@implementation InsertViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.interstitialAd = [[OSETInterstitialAd alloc] initWithSlotId:self.slotId];
    self.interstitialAd.delegate = self;
    [self.interstitialAd loadAdData];
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开屏广告" tabindex="-1"><a class="header-anchor" href="#开屏广告" aria-hidden="true">#</a> 开屏广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface SplashViewController ()&lt;OSETSplashAdDelegate&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="激励视频广告" tabindex="-1"><a class="header-anchor" href="#激励视频广告" aria-hidden="true">#</a> 激励视频广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface RewardVideoViewController ()&lt;OSETRewardVideoAdDelegate&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全屏视频广告" tabindex="-1"><a class="header-anchor" href="#全屏视频广告" aria-hidden="true">#</a> 全屏视频广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface FullScreebViewController ()&lt;OSETFullscreenVideoAdDelegate&gt;

@property (nonatomic,strong) OSETFullscreenVideoAd *fullscreenVideoAd;

@end

@implementation FullScreebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.fullscreenVideoAd = [[OSETFullscreenVideoAd alloc] initWithSlotId:self.slotId];
    self.fullscreenVideoAd.delegate = self;
    [self.fullscreenVideoAd loadAdData];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生广告" tabindex="-1"><a class="header-anchor" href="#原生广告" aria-hidden="true">#</a> 原生广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface NativeViewController ()&lt;OSETNativeAdDelegate&gt;

@property (nonatomic,strong) OSETNativeAd *nativeAd;

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //size高度传入0会自适应高度,并在回调中返回广告View,直接添加到需要展示的位置即可(详细使用参考Demo)
    self.nativeAd = [[OSETNativeAd alloc] initWithSlotId:@&quot;广告位ID&quot; size:CGSizeMake([UIScreen mainScreen].bounds.size.width, 0) isDrawNative:NO];
    self.nativeAd.delegate = self;
    [self.nativeAd loadAdData:3];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生draw-video广告" tabindex="-1"><a class="header-anchor" href="#原生draw-video广告" aria-hidden="true">#</a> 原生Draw Video广告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface NativeViewController ()&lt;OSETNativeAdDelegate&gt;

@property (nonatomic,strong) OSETNativeAd *draw_nativeAd;

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //size高度传入0会自适应高度,并在回调中返回广告View,直接添加到需要展示的位置即可(详细使用参考Demo)
    self.draw_nativeAd = [[OSETNativeAd alloc] initWithSlotId:@&quot;广告位ID&quot; size:CGSizeMake([UIScreen mainScreen].bounds.size.width, 0) isDrawNative:YES];
    self.draw_nativeAd.delegate = self;
    [self.draw_nativeAd loadAdData:3];

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接入内容-快手视频内容" tabindex="-1"><a class="header-anchor" href="#接入内容-快手视频内容" aria-hidden="true">#</a> 接入内容(快手视频内容)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@interface ContentSmallViewController ()

@property (nonatomic,strong) OSETFullContentAd *smallContentAd;

@end

@implementation ContentSmallViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.smallContentAd = [[OSETFullContentAd alloc] initWithSlotId:@&quot;广告位ID&quot; type:OSETContentTypeFeed];

    // Do any additional setup after loading the view.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接入咨询内容-快手视频、信息流" tabindex="-1"><a class="header-anchor" href="#接入咨询内容-快手视频、信息流" aria-hidden="true">#</a> 接入咨询内容(快手视频、信息流)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- @interface NewsViewController ()

@property (nonatomic,strong) OSETConsult *consultAd;

@end

@implementation NewsViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
 self.consultAd = [[OSETConsult alloc] initWithSlotId:@&quot;908FD9663CDD3817B3F0F22B2DCA0277&quot;
                                            showAdsCount:6
                                              timeLength:30
                                  withInterstitialSlotId:@&quot;A7A86C33868F691D315ADF349F227CCC&quot;
                                        withBannerSlotId:@&quot;EEFC4E97569AFD990BF82C5901AED363&quot;];
    // Do any additional setup after loading the view.
}

- (void)showAd {
    [self.consultAd showFromRootViewController:self];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="星座运势" tabindex="-1"><a class="header-anchor" href="#星座运势" aria-hidden="true">#</a> 星座运势</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-@interface ConstellatoryViewController ()&lt;OSETConstellatoryAdDelegate&gt;
@property(nonatomic,strong)OSETConstellatoryAd * constellatoryAd;
@end

@implementation ConstellatoryViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @&quot;星座运势&quot;;
    self.constellatoryAd = [[OSETConstellatoryAd alloc] initWithRewardVideoSlotId:@&quot;DF5811FB3CB112C2D41C0E3EDD81C4C7&quot;
                                                           withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                                                 withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;];
    
    self.constellatoryAd.delegate = self;
    // Do any additional setup after loading the view.
}
/// 星座激励视频关闭
- (void)OSETConstellatoryRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;ConstellatoryViewController --- rewardVideoDidClose &quot;);
}
-(void)showAd{
    [self.constellatoryAd showFromRootViewController:self];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转盘抽奖" tabindex="-1"><a class="header-anchor" href="#转盘抽奖" aria-hidden="true">#</a> 转盘抽奖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface LuckyDrawViewController ()&lt;OSETDialAdDelegate&gt;
@property (nonatomic,strong) OSETDialAd *consultAd;


@end

@implementation LuckyDrawViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
       self.title = @&quot;幸运抽奖&quot;;
       self.consultAd = [[OSETDialAd alloc] initWithRewardVideoSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot;
                                               withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                                     withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                                       withAwardsName:@&quot;大大大奖&quot;
                                                       withAwardsOdds:30//中大奖的概率
                                                      withDefaultName:@&quot;小小小奖&quot;
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
        NSLog(@&quot;LuckyDrawViewController -- 中了Awards奖项&quot;);
    }else{
        NSLog(@&quot;LuckyDrawViewController -- 中了Default奖项&quot;);
    }
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接入夺宝" tabindex="-1"><a class="header-anchor" href="#接入夺宝" aria-hidden="true">#</a> 接入夺宝</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface LootTreasureViewController ()&lt;OSETLootRewardVideoAdDelegate&gt;
@property (nonatomic,strong)  OSETLootTreasureAd* luckAd;


@end
@implementation LootTreasureViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    
  self.navigationItem.title = @&quot;视频夺宝&quot;;
     self.luckAd = [[OSETLootTreasureAd alloc]initWithSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot;
                                   withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                         withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                            withAppUserId:@&quot;123&quot;];
     self.luckAd.delegate = self;
     [self.luckAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
}
- (void)OSETRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@&quot;OSETRewardVideoDidReceiveSuccess&quot;);
}

/// 激励视频加载失败
- (void)OSETRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;激励视频加载失败 ==%@&quot;,error);
}

/// 激励视频点击
- (void)OSETRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@&quot;激励视频点击&quot;);
}

/// 激励视频关闭
- (void)OSETRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;激励视频关闭&quot;);
}

//激励视频播放出错
- (void)OSETRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;激励视频播放出错&quot;);
}

//激励视频播放结束
- (void)OSETRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@&quot;激励视频播放结束&quot;);
}
//激励视频开始播放
- (void)OSETRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@&quot;激励视频开始播放&quot;);
}
//激励视频奖励
- (void)OSETRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;激励视频奖励&quot;);
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接入任务墙" tabindex="-1"><a class="header-anchor" href="#接入任务墙" aria-hidden="true">#</a> 接入任务墙</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface IntegralWallViewController ()&lt;OSETLootRewardVideoAdDelegate&gt;
@property(nonatomic,strong)OSETIntegralWallAd * integralAd;
@end
@implementation IntegralWallViewController
- (void)viewDidLoad {
    [super viewDidLoad];
	self.title = @&quot;任务墙&quot;;
    self.integralAd = [[OSETIntegralWallAd alloc]initWithAppUserId:@&quot;123&quot;
                                                        withAppKey:@&quot;142792798&quot;
                                                     withIBXAppKey:@&quot;142793166&quot;
                                                     withSecretKey:@&quot;291d28a7be9de4ef&quot;
                                                  withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                            withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                                  withNativeSlotId:@&quot;0BA47216E326C31D9DD2D2923D62D9BC&quot;];
    [self.integralAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接入web转盘" tabindex="-1"><a class="header-anchor" href="#接入web转盘" aria-hidden="true">#</a> 接入Web转盘</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface WebDialViewController ()&lt;OSETWebDialAdDelegate&gt;
@property (nonatomic,strong)  OSETWebDialAd* luckAd;


@end

@implementation WebDialViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.luckAd = [[OSETWebDialAd alloc] initWithSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot;
                                 withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                       withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                          withAppUserId:@&quot;123&quot;];
    self.luckAd.delegate = self;
    [self.luckAd showFromRootViewController:self];
    // Do any additional setup after loading the view.
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="周公解梦" tabindex="-1"><a class="header-anchor" href="#周公解梦" aria-hidden="true">#</a> 周公解梦</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface CrazyDreamViewController ()&lt;OSETCrazyDreamAdRewardVideoDelegate&gt;
@property (nonatomic,strong)  OSETCrazyDreamAd* crazyDream;

@end

@implementation CrazyDreamViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.crazyDream = [[OSETCrazyDreamAd alloc]initWithSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot;
                                             withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                                withAppUserId:@&quot;123&quot;];
    self.crazyDream.delegate = self;
    [self.crazyDream showFromRootViewController:self];
    
    // Do any additional setup after loading the view.
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="老黄历" tabindex="-1"><a class="header-anchor" href="#老黄历" aria-hidden="true">#</a> 老黄历</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface CalendarViewController ()&lt;OSETCalendarAdRewardVideoDelegate&gt;
@property(nonatomic,strong)OSETCalendarAd * calendarAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.calendarAd  = [[OSETCalendarAd alloc]initWithSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot; withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot; withAppUserId:@&quot;&quot;];
    self.calendarAd.delegate = self;
    [self.calendarAd showFromRootViewController:self];
    
    // Do any additional setup after loading the view.
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="悬浮广告位" tabindex="-1"><a class="header-anchor" href="#悬浮广告位" aria-hidden="true">#</a> 悬浮广告位</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface CalendarViewController ()&lt;OSETSuspendAdDelegate&gt;
@property (nonatomic,strong) OSETSuspendAd *suspendAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
       self.suspendAd = [[OSETSuspendAd alloc]initWithSlotId:@&quot;5172584995BB18D05EAB3876E0B70015&quot; withViewController:self];
        self.suspendAd.delegate = self;
        [self.suspendAd loadData];
    // Do any additional setup after loading the view.
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答题" tabindex="-1"><a class="header-anchor" href="#答题" aria-hidden="true">#</a> 答题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface AnswerAdViewController ()&lt;OSETAnswerAdRewardVideoDelegate&gt;
@property (nonatomic,strong) OSETAnswerAd *answerAdAd;
@end

@implementation AnswerAdViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
	//SlotId 激励视频广告位id  必传参数
	//InterstitialSlotId 插屏广告位id  
	//BannerSlotId banner广告位id 
	//AnswerNum 答题次数
    
    self.answerAdAd = [[OSETAnswerAd alloc]initWithSlotId:@&quot;971D11E82E1009B5CAA2D00EFBC4E372&quot;
                                   withInterstitialSlotId:@&quot;4FD8476AE54A3DBA39CCD635BBD48957&quot;
                                   withBannerSlotId:@&quot;58A0BB27A707FD48ECACF89B0E8A9657&quot;
                                            withAnswerNum:@&quot;3&quot;];
    
    self.answerAdAd.delegate = self;
    [self.answerAdAd showFromRootViewController:self];


    // Do any additional setup after loading the view.
}
/// 激励视频关闭
- (void)OSETConstellatoryRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;ConstellatoryViewController --- rewardVideoDidClose &quot;);
}
-(void)showAd{
    [self.answerAdAd showFromRootViewController:self];
}

/// 激励视频加载成功
/// @param rewardVideoAd 激励视频实例
/// @param slotId 广告位ID
- (void)OSETAnswerAdRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}

/// 激励视频加载失败
- (void)OSETAnswerAdRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}

/// 激励视频点击
- (void)OSETAnswerAdRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}

/// 激励视频关闭
- (void)OSETAnswerAdRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}

//激励视频播放出错
- (void)OSETAnswerAdRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}

//激励视频播放结束
- (void)OSETAnswerAdRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}
//激励视频开始播放
- (void)OSETAnswerAdRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
}
//激励视频奖励
- (void)OSETAnswerAdRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;%s&quot;,__FUNCTION__);
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="天气" tabindex="-1"><a class="header-anchor" href="#天气" aria-hidden="true">#</a> 天气</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @interface CalendarViewController ()&lt;OSETWeatherAdDelegate&gt;
@property (nonatomic,strong) OSETWeatherAd *weatherAd;
@end

@implementation CalendarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
	//SlotId 激励视频广告位id  必传参数
	//InterstitialSlotId 插屏广告位id  
	//BannerSlotId banner广告位id 
  self.weatherAd = [[OSETWeatherAd alloc]initWithSlotId:@&quot;激励视频广告位id&quot;
                                    withInterstitialSlotId:@&quot;插屏广告位id&quot;
                                          withBannerSlotId:@&quot;banner广告位id&quot;];
     self.weatherAd.delegate = self;
     [self.weatherAd showFromRootViewController:self];



    // Do any additional setup after loading the view.
}
- (void)OSETWeatherRewardVideoDidReceiveSuccess:(id)rewardVideoAd slotId:(NSString *)slotId{
    NSLog(@&quot;OSETWeatherRewardVideoDidReceiveSuccess&quot;);
}

/// 激励视频加载失败
- (void)OSETWeatherRewardVideoLoadToFailed:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;OSETWeatherRewardVideoLoadToFailed== %@&quot;,error);
}

/// 激励视频点击
- (void)OSETWeatherRewardVideoDidClick:(id)rewardVideoAd{
    NSLog(@&quot;OSETWeatherRewardVideoDidClick&quot;);
}

/// 激励视频关闭
- (void)OSETWeatherRewardVideoDidClose:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;OSETWeatherRewardVideoDidClose&quot;);
}

//激励视频播放出错
- (void)OSETWeatherRewardVideoPlayError:(id)rewardVideoAd error:(NSError *)error{
    NSLog(@&quot;OSETWeatherRewardVideoPlayError == %@&quot;,error);
}

//激励视频播放结束
- (void)OSETWeatherRewardVideoPlayEnd:(id)rewardVideoAd  checkString:(NSString *)checkString{
    NSLog(@&quot;OSETWeatherRewardVideoPlayEnd&quot;);
}
//激励视频开始播放
- (void)OSETWeatherRewardVideoPlayStart:(id)rewardVideoAd{
    NSLog(@&quot;OSETWeatherRewardVideoPlayStart&quot;);
}
//激励视频奖励
- (void)OSETWeatherRewardVideoOnReward:(id)rewardVideoAd checkString:(NSString *)checkString{
    NSLog(@&quot;OSETWeatherRewardVideoOnReward&quot;);
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理方法说明" tabindex="-1"><a class="header-anchor" href="#代理方法说明" aria-hidden="true">#</a> 代理方法说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所有广告位至少有四个代理方法,广告加载成功、广告加载失败、广告点击、广告关闭,
视频类广告需要在加载成功后手动调起广告,详细使用参考demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐私政策" tabindex="-1"><a class="header-anchor" href="#隐私政策" aria-hidden="true">#</a> 隐私政策</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SDK用到的隐私信息 包括精确位置(位置)、设备 ID(标识符)、广告数据(使用数据)、其他数据 类型.
用于第三方广告，与用户身份关联，用于追踪目的。（App Store  5.1.2&amp;&amp;3.3.9 被拒）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sdk-错误码" tabindex="-1"><a class="header-anchor" href="#sdk-错误码" aria-hidden="true">#</a> SDK 错误码</h2><table><thead><tr><th>code</th><th>描述</th></tr></thead><tbody><tr><td>A3001</td><td>网络错误</td></tr><tr><td>A4001</td><td>初始化错误, 包括广告位为空、AppKey为空、ViewController为空</td></tr><tr><td>A4003</td><td>广告位错误</td></tr><tr><td>A4006</td><td>广告未曝光</td></tr><tr><td>A4007</td><td>设备不支持</td></tr><tr><td>A4008</td><td>设备方向不支持</td></tr><tr><td>A4009</td><td>开屏跳过按钮定义非法</td></tr><tr><td>A4010</td><td>开屏bottomView设置非法</td></tr><tr><td>A4011</td><td>请求广告超时</td></tr><tr><td>A4013</td><td>系统不支持，原生视频模板广告只支持 iOS 9 及以上系统</td></tr><tr><td>A4014</td><td>广告数据返回前尝试展示广告, 例如激励视频拉到广告后才可以调用展示接口</td></tr><tr><td>A4015</td><td>广告已经曝光过，不允许二次展示，请重新拉取</td></tr><tr><td>A4016</td><td>应用横竖方向与广告位支持方向不匹配</td></tr><tr><td>A5001</td><td>后台数据错误</td></tr><tr><td>A5002</td><td>视频素材下载错误</td></tr><tr><td>A5003</td><td>视频素材播放错误</td></tr><tr><td>A5004</td><td>没匹配的广告，禁止重试，否则影响流量变现效果</td></tr><tr><td>A5005</td><td>广告请求量或者消耗等超过日限额，请第二天再请求广告</td></tr><tr><td>A5006</td><td>包名校验非法</td></tr><tr><td>A5009</td><td>广告请求量或者消耗等超过小时限额，请一小时后再请求广告</td></tr><tr><td>A5010</td><td>广告样式校验失败，请检查广告位与接口使用是否一致</td></tr><tr><td>A5012</td><td>广告过期，请重新拉取</td></tr><tr><td>A5013</td><td>广告拉取过于频繁，请稍后再试</td></tr><tr><td>A5014</td><td>视频广告视频和图片素材都下载错误</td></tr><tr><td>A5015</td><td>当前版本不出广告</td></tr><tr><td>A5016</td><td>JSON数据解析失败</td></tr><tr><td>A6000</td><td>未知错误，联系腾讯广告商务同事协助排查</td></tr><tr><td>B20000</td><td>成功</td></tr><tr><td>B20001</td><td>没有合适的广告返回而导致的请求没有填充，偶尔出现属于正常情况。如果出现情况较多或者必现的话，请先检查一下广告尺寸是否填写正确，是否有使用模拟器测试广告，单个设备是否一天请求了大量广告但没有展示或者展示数极低等。排查以上问题依然没有结论可以联系技术支持同学或者提交工单（包含代码位和出现概率以及请求时间）相关同学查明后会做出回复。</td></tr><tr><td>B40000</td><td>http content type错误</td></tr><tr><td>B40001</td><td>http request pb错误</td></tr><tr><td>B40002</td><td>source_type=‘app’, 请求app不能为空</td></tr><tr><td>B40003</td><td>source_type=‘wap’, 请求wap不能为空</td></tr><tr><td>B40004</td><td>广告位不能为空</td></tr><tr><td>B40005</td><td>广告位尺寸不能为空</td></tr><tr><td>B40006</td><td>广告位ID不合法，例如，位数不对或者输入的广告位ID错误。</td></tr><tr><td>B40007</td><td>广告数量错误</td></tr><tr><td>B40008</td><td>图片尺寸错误</td></tr><tr><td>B40009</td><td>媒体ID不合法</td></tr><tr><td>B40010</td><td>媒体类型不合法</td></tr><tr><td>B40011</td><td>广告类型不合法</td></tr><tr><td>B40012</td><td>媒体接入类型不合法，已废弃</td></tr><tr><td>B40013</td><td>代码位ID是开屏代码位，但是adType不是开屏</td></tr><tr><td>B40014</td><td>redirect参数不正确</td></tr><tr><td>B40015</td><td>媒体请求里的字段上传的不正确或不完整，需要整改，请关注站内信的整改通知。</td></tr><tr><td>B40016</td><td>代码位ID 与应用ID 不匹配或者应用ID 缺失。初始化时需要填写appid，且在activity中需要填写代码位ID。媒体要确保这两个ID填写正确且匹配。</td></tr><tr><td>B40017</td><td>媒体接入类型不合法 API/SDK</td></tr><tr><td>B40018</td><td>媒体在平台上录入的包名与项目里的包名不一致。</td></tr><tr><td>B40019</td><td>媒体在平台上申请的代码位广告类型和代码中使用的广告类型接口不一致。例如平台上是开屏的广告类型，但是代码中请求的接口是banner或者其他非开屏的广告类型，如果不太清楚不同代码位类型对应的接口，麻烦去查询SDK包里的对接文档。</td></tr><tr><td>B40020</td><td>开发注册新上线广告位超出日请求量限制</td></tr><tr><td>B40021</td><td>apk签名SHA1值与媒体平台录入的SHA1不一致</td></tr><tr><td>B40022</td><td>媒体在平台上申请的代码位“是否原生”属性与代码中使用的接口不匹配。例如：1. 媒体在平台上选择的是个性化模板banner广告的话，Android代码中请参考BannerExpressActivity进行调用；iOS代码中请参考BUDExpressBannerViewController进行调用。2. 媒体在平台上选择的是个性化模板插屏广告的话，代码中请参考InteractionExpressActivity进行调用；iOS代码位中请参考BUDExpressInterstitialViewController进行调用。PS：模板广告会带有express字样标识。</td></tr><tr><td>B40023</td><td>os字段填的不对</td></tr><tr><td>B40024</td><td>sdk 版本过低不返回广告</td></tr><tr><td>B40025</td><td>渲染异常，分为两种情况：1、Android版本，媒体使用了非该应用所属账号下的SDK版本导致，请媒体到该代码位所属账号下工具-文档下载展示的SDK版本去进行接入。2、iOS版本，媒体使用2100之前的版本可能渲染异常，请媒体更新到最新版本接入即可解决该问题。</td></tr><tr><td>B40026</td><td>使用海外ip请求国内服务器导致，请确认使用的是国内ip请求广告。</td></tr><tr><td>B40028</td><td>ios老设备（涉及设备 iPad 4G/iPad 3G/iPhone 5/iPhone 5C/iPad Mini 1G/iPad 2G/iPhone 4S）被屏蔽，会不返回广告。在2310版本后放开了限制，媒体可以更新到2310或者之后的版本。</td></tr><tr><td>B40029</td><td>两种情况：1. SDK版本低；如果您使用了原生类型为模板渲染的广告，即个性化模板广告，Android版本不能低于2017，iOS版本不能低于2011。2. 接口使用错误；如果您的SDK版本（双端）大于等于2500，代码位的原生类型是模板渲染，麻烦确认使用的接口为个性化模板广告。</td></tr><tr><td>B50001</td><td>服务器错误</td></tr><tr><td>B60001</td><td>show event处理错误</td></tr><tr><td>B60002</td><td>click event处理错误</td></tr><tr><td>B60007</td><td>激励视频验证服务器异常或处理失败</td></tr><tr><td>B-1</td><td>数据解析失败。客户端代码问题的合集，可先排查以下情况：1:媒体在子线程调用了show。2:注册点击事件 时viewgroup传空。3:媒体在onFeedLoaded回调里的业务逻辑发生了异常，导致SDK走到了onError回调 中。排查以上问题依然没有结论可以联系技术支持同学或者提交工单（包含代码位和出现概率以及请求时 间）。</td></tr><tr><td>B-2</td><td>网络错误</td></tr><tr><td>B-3</td><td>解析数据没有ad</td></tr><tr><td>B-4</td><td>返回数据缺少必要字段</td></tr><tr><td>B-5</td><td>bannerAd加载图片失败</td></tr><tr><td>B-6</td><td>插屏广告图片加载失败</td></tr><tr><td>B-7</td><td>开屏广告图片加载失败</td></tr><tr><td>B-8</td><td>频繁请求</td></tr><tr><td>B-9</td><td>请求实体为空</td></tr><tr><td>B-10</td><td>缓存解析失败</td></tr><tr><td>B-11</td><td>缓存过期</td></tr><tr><td>B-12</td><td>缓存中没有开屏广告</td></tr><tr><td>B101</td><td>渲染结果数据解析失败</td></tr><tr><td>B102</td><td>未匹配到主模板：主模板没有下载到本地导致。偶发在首次请求广告时属于正常情况。</td></tr><tr><td>B103</td><td>未匹配到子模板：偶发在接入初期，没有匹配到模板导致。待sdk将模板下载成功后不会出现。</td></tr><tr><td>B104</td><td>物料数据异常</td></tr><tr><td>B105</td><td>模版数据解析异常</td></tr><tr><td>B106</td><td>渲染异常</td></tr><tr><td>B107</td><td>模板渲染超时未回调，可能原因有1. 网络原因或者2. 硬件原因，因此导致渲染失败，可以更换手机或者网络环境测试。</td></tr><tr><td>C0</td><td>SDK没有进行初始化</td></tr><tr><td>C1</td><td>SDK初始化失败</td></tr><tr><td>C2</td><td>无效的参数传入</td></tr><tr><td>C3</td><td>播放视频时发生错误</td></tr><tr><td>C4</td><td>SDK初始化不完整,发生异常</td></tr><tr><td>C5</td><td>广告被插件拦截, 发生错误</td></tr><tr><td>C6</td><td>SDK无法读取或写入文件</td></tr><tr><td>C7</td><td>未知的设备标识符</td></tr><tr><td>C8</td><td>尝试播放广告时发生异常</td></tr><tr><td>C9</td><td>SDK内部发生异常</td></tr><tr><td>C10</td><td>如果这个代码被调用,意味暂时还没有广告可播放,SDK会定时向服务器进行查询,在获取到广告后,此错误代码会取消</td></tr><tr><td>D-1</td><td>没有广告填充，可能导致的原因：1.您在测试期间所获取的广告均为Mintegral的正式广告，因此会受到算法智能优化的影响，若一段时间内大量加载和展示广告，可能导致一段时间后没有广告填充的现象。</td></tr><tr><td>D-9</td><td>请求超时</td></tr><tr><td>D-10</td><td>appID和appKey不匹配，解决方案：检查APPkey和APPID是否填写正确，APPkey可以在应用设置（APP Setting）模块顶部获取</td></tr><tr><td>D-1201</td><td>该unitID不存在/填写错误</td></tr><tr><td>D-1202</td><td>unitID没传</td></tr><tr><td>D-1203</td><td>在该appID和unitID不匹配</td></tr><tr><td>D-1205</td><td>传入的unitID广告类型不符</td></tr><tr><td>D-130</td><td>appID没有传入</td></tr><tr><td>D-1302</td><td>该appID不存在/填写错误</td></tr><tr><td>D-1904</td><td>请求时的网络状态不对，一般是SDK初始化还未完成就去请求导致的</td></tr><tr><td>D-2102</td><td>无法取得osVersion，一般是GDPR开关导致的</td></tr><tr><td>E500420</td><td>请求的app已经关闭广告服务</td></tr><tr><td>E500422</td><td>请求参数缺少设备信息</td></tr><tr><td>E500424</td><td>缺少设备id相关信息</td></tr><tr><td>E500428</td><td>缺少广告为信息</td></tr><tr><td>E500430</td><td>错误的广告位信息</td></tr><tr><td>E500432</td><td>广告位不存在，或者appid与广告位不匹配</td></tr><tr><td>E500433</td><td>广告位不存在或是已关闭</td></tr><tr><td>E500435</td><td>设备的操作系统类型，与请求的app的系统类型不匹配</td></tr><tr><td>E500436</td><td>广告单元id与请求的广告类型不匹配</td></tr><tr><td>E500437</td><td>缺少idfa。仅（iOS）</td></tr><tr><td>E500473</td><td>请求的app不存在</td></tr><tr><td>E500700</td><td>app未设置聚合策略</td></tr><tr><td>E500701</td><td>app未开通任何广告渠道</td></tr><tr><td>E200000</td><td>无广告填充</td></tr><tr><td>E600100</td><td>网络出错</td></tr><tr><td>E600101</td><td>请求出错</td></tr><tr><td>E600102</td><td>未找到该渠道的适配器</td></tr><tr><td>E600103</td><td>配置的策略为空</td></tr><tr><td>E600104</td><td>文件下载错误</td></tr><tr><td>E600105</td><td>下载广告超时</td></tr><tr><td>E600106</td><td>聚合通知给开发者的统一错误码，由于多渠道无法区分具体原因。配置单一渠道时使用该渠道错误码。</td></tr><tr><td>E600107</td><td>不能在后台调用load</td></tr><tr><td>E600108</td><td>protoBuf协议解析出错</td></tr><tr><td>E610002</td><td>激励视频播放出错</td></tr><tr><td>E600103</td><td>激励视频广告未准备好</td></tr><tr><td>E600104</td><td>server下发的广告信息缺失关键信息</td></tr><tr><td>E600105</td><td>下载的文件校验md5出错</td></tr><tr><td>E620002</td><td>开屏广告不支持当前方向</td></tr><tr><td>E620003</td><td>开屏广告不支持的资源类型</td></tr><tr><td>S70001</td><td>网络请求失败</td></tr><tr><td>S70002</td><td>未能匹配到合适的广告</td></tr><tr><td>S3000</td><td>权限验证失败</td></tr><tr><td>S99901</td><td>未捕获的异常</td></tr><tr><td>S5001</td><td>DSP没有出价</td></tr><tr><td>S5002</td><td>广告位不投放</td></tr><tr><td>S5003</td><td>DSP log url 没有配置</td></tr><tr><td>S5004</td><td>广告位被禁用</td></tr><tr><td>S5005</td><td>SDK被禁用</td></tr><tr><td>S6001</td><td>请求数超过限流次数或者超时</td></tr></tbody></table>`,88),s=[a];function l(r,o){return e(),i("div",null,s)}const v=n(d,[["render",l],["__file","IOS.html.vue"]]);export{v as default};
