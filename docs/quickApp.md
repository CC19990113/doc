----------
#  快应用对接文档
----------

## 快速接入

#### 安装广告模块

在快应用项目根目录下安装广告模块，每次发布快应用前可更新包版本，新版本中广告体验更好、功能更丰富。

```
npm install union-quick-app-ad -S 
```

#### 下载快应用广告demo，拷贝广告页面

[点击下载广告demo](https://fpvideo.shenshiads.com/demo_zip/UnionAd.zip)

下载快应用广告demo，解压后将demo内的src/UnionAd文件夹拷贝到您的快应用项目src/路径下。

并在manifest.json文件中配置page信息。

```json
// 路径和页面配置
    "router": {
        "entry": "UnionAd/AdPage", // 开屏广告页面
        "pages": {
            "UnionAd/AdPage": {    // 开屏广告页面
                "component": "index"
            },
            "UnionAd/AdLanding": {   // 广告落地页
                "component": "index"
            },
            "UnionAd/AdReward": {    // 激励视频广告
                "component": "index"
            }
        }
    },
    "display": {
        "pages": {
            "UnionAd/AdPage": {
                "fullScreen": true,
                "titleBar": false,
                "statusBarImmersive": true,
                "menu": false,
                "menuBarData": {
                    "menuBar": false
                }
            },
            "UnionAd/AdReward": {
                "fullScreen": true,
                "titleBar": false,
                "statusBarImmersive": true,
                "menu": false,
                "menuBarData": {
                    "menuBar": false
                }
            },
            "UnionAd/AdLanding": {
                "fullScreen": true,
                "titleBar": false,
                "statusBarImmersive": true,
                "menu": false,
                "menuBarData": {
                    "menuBar": false
                }
            }
        }
    } 
```

#### 添加接口权限

manifest.json文件中features属性中添加权限声明代码。

```json
// 权限配置
    "features": [
        {"name": "system.prompt"},
        {"name": "system.network"},
        {"name": "system.router"},
        {"name": "system.fetch"},
        {"name": "system.webview"},
        {"name": "system.request"},
        {"name": "system.device"},
        {"name": "system.package"},
        {"name": "system.storage"},
        {"name": "service.account"},
        {"name": "system.file"},
        {"name": "system.animate"},
        {"name": "system.sensor"},
        {"name": "system.image"}
    ], 
```

#### 初始化广告模块

在项目的app.ux文件中引入广告代码，初始化广告模块。

```js
import UNION_AD_SDK from 'union-quick-app-ad/app.js'

    export default {
        onCreate() {
            try {
                new UNION_AD_SDK(this)
            } catch (error) {
            }
        }
    } 
```

  
  

## 创建广告位

[神蓍用户后台注册申请媒体、广告位](http://ad-platform.kuaichuanad.com)  
  

## 信息流广告

#### 在需要显示广告的页面中引用广告组件。

```js
<import name="mobads-ad" src="union-quick-app-ad/components/mobadsAd"></import>

    // apid 神蓍平台的应用id
    // appid 神蓍平台的广告位id
    <mobads-ad apid="7439505" appid="d5aa0cd7" type="feed" adstyle="{{style}}"></mobads-ad> 
```

#### 广告组件属性说明：

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| appid | string | none | 神蓍平台的应用id |
| apid | string | none | 神蓍平台的广告位id |
| type | string | none | 广告类型：信息流=feed 开屏=rsplash 插屏=int 激励视频=rvideo |
| downloadpanel | boolean | false | 下载类广告点击是否显示弹层 |
| videoautoplay | boolean | true | 信息流视频广告是否自动播放 |
| videomuted | boolean | true | 信息流视频广告是否静音 |
| showvolumn | boolean | true | 信息流竖版视频广告是否显示音量图标 |
| adstyle | object | none | 广告样式自定义 |
| refresh | 不限 | "" | 广告刷新，前后传入不同的值触发广告刷新。（广告组件外层容器请避免用if定时控制，华为机型上会触发bug） |
| @ad-load | string | none | 广告加载触发事件 |
| @ad-show | string | none | 广告展现触发事件 |
| @ad-closed | string | none | 广告关闭触发事件 |
| @ad-error | string | none | 广告异常触发事件 |
| @download-click | string | none | 下载弹窗下载按钮点击触发事件 |
| @download-close | string | none | 下载弹窗关闭按钮点击触发事件 |
| @download-show | string | none | 下载弹窗展现触发事件 |
| @downloaded | string | none | 下载完成触发事件 |

#### 样式自定义

支持广告容器、标题、图片、描述、按钮、品牌图标元素的样式自定义, 可通过adstyle字段覆盖广告默认样式。

```js
<mobads-ad apid="7439505" appid="d5aa0cd7" type="feed" adstyle="{{style}}"></mobads-ad>

    style: {
        containerStyle: {             // 容器样式
            fontSize: '20dp',
            color: 'yellow'
        },
        titleStyle: { color:'red' },  // 标题样式
        imgStyle: {                   // 图片样式
            marginRight: '10dp'
        },
        buttonStyle: {                // 按钮样式
            fontSize: '25dp',
            backgroundColor: 'blue'
        },
        iconStyle: {                  // icon样式
        },
        descStyle: {                  // 描述样式
            display: 'none'
        }
    }, 
```

#### 信息流广告样式

| 描述 | 样式 |
| --- | --- |
| 信息流上图下文 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_big_image.2c92103c.png" width = "300" /> |
| 信息流左图右文 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_left_image.1a478df8.png" width = "300" />|
| 信息流右图左文 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_right_image.49369207.png" width = "300" /> |
| 信息流上文下图 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_top_text.fed5f884.png" width = "300" /> |
| 信息流三图 |  <img src="https://fpvideo.shenshiads.com/doc_html/quick_multi_image.35050cff.png" width = "300" /> |
| 信息流三图+logo | <img src="https://fpvideo.shenshiads.com/doc_html/quick_multi_logo_image.596a46fd.png" width = "300" /> |
| 信息流横版视频 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_video.03c94ee7.png" width = "300" /> |
| 竖版视频 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_vertical_video.6668ea19.png" width = "300" /> |
| 信息流小说定制大图模板3002 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3002.5eca63fc.png" width = "300" /> |
| 信息流小说定制大图模板3003 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3003.648211ba.png" width = "300" /> |
| 信息流小说定制大图（带icon）模板3004 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3004.2c5aa583.png" width = "300" /> |
| 信息流小说定制大图（带icon）模板3005 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3005.6784a97f.png" width = "300" /> |
| 信息流小说定制左图右文模板3302 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3302.0a144272.png" width = "300" /> |
| 信息流小说定制左图右文模板3303 | <img src="https://fpvideo.shenshiads.com/doc_html/quick_3303.3a65e321.png" width = "300" /> |

  
  

## 开屏广告

#### 广告组件使用

在UnionAd/AdPage页面中引入了广告组件，将广告组件中的参数进行替换。

```html
<import name="mobads-ad" src="union-quick-app-ad/components/mobadsAd"></import>

    // 开屏
    // 修改字段apid、appid、entry、openimg
    <union-ad
        class="union-ad"
        type="rsplash"
        apid="7439506"    // 神蓍平台的广告位id
        appid="d5aa0cd7"  // 神蓍平台的应用id
        entry="/Home"     // 开屏广告结束后需要跳转的页面
        openimg=""        // 开屏广告结束后需要跳转的页面
        splashrestrict="2"
        customclose=false
        @ad-show="onadShow"
        @ad-click="onadClick"
        @ad-closed="onadClosed"
    >
    </union-ad> 
```

解释：广告组件用于在页面中展现广告。

#### 属性说明：

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| appid | string | none | 神蓍平台的应用id |
| apid | string | none | 神蓍平台的广告位id |
| type | string | none | 广告类型：信息流=feed 开屏=rsplash 插屏=int 激励视频=rvideo |
| entry | string | none | 开屏广告结束后需要跳转的页面 |
| openimg | string | none | 开屏广告背景图片 |
| downloadpanel | boolean | false | 下载类广告点击是否显示弹层 |
| splashrestrict | string | "0" | 开屏限定点击区域按钮  "0": 全屏可点击，无按钮 "1": 全屏可点击，有按钮  "2": 全屏不可点，有按钮（仅按钮可点） |
| customclose | boolean | false | 广告无填充时是否自定义处理逻辑（默认逻辑是跳转配置的entry页面） |
| skiptime | number | 5 | 开屏跳转时间倒数配置，可配置范围为2～5秒（默认为5s） |
| @ad-load | string | none | 广告加载事件 |
| @ad-show | string | none | 广告展现触发事件 |
| @ad-click | string | none | 广告点击触发事件 |
| @ad-closed | string | none | 广告关闭触发事件 |
| @ad-error | string | none | 广告异常触发事件 |

#### 样式自定义

支持广告关闭按钮的位置调整、开屏限定按钮的样式自定义。

``` html
<union-ad
    class="union-ad"
    type="rsplash"
    apid="7439506"
    appid="d5aa0cd7"
    entry="/Home"
    openimg=""
    splashrestrict="2"
    customclose=false
    adstyle="{{style}}"
    @ad-show="onadShow"
    @ad-click="onadClick"
    @ad-closed="onadClosed"
>
</union-ad>

style: {
    closeBtnStyle: {             // 广告关闭按钮
        paddingTop: '100px',
        paddingRight: '50px',
    },
    openAdBtnStyle: {            // 开屏广告点击按钮
        borderRadius: '50px',
        backgroundColor: '#C0C0C0',
    },
}, 
```

  
  

## 插屏广告

#### 广告组件使用

在页面中引用广告组件。

```js
<import name="mobads-ad" src="union-quick-app-ad/components/mobadsAd"></import>

    // 修改字段apid、appid
    <mobads-ad apid="8229078" appid="d5aa0cd7" type="int" visible="{{intVisible}}"></mobads-ad> 
```

#### 属性说明：

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| appid | string | none | 神蓍平台的应用id |
| apid | string | none | 神蓍平台的广告位id |
| type | string | none | 广告类型 信息流=feed 开屏=rsplash 插屏=int 激励视频=rvideo |
| downloadpanel | boolean | false | 下载类广告点击是否显示弹层 |
| visible | string | false | 触发广告的展示 |
| @ad-load | string | none | 广告加载事件 |
| @ad-error | string | none | 广告无填充事件 |
| @ad-show | string | none | 广告展现触发事件 |
| @ad-click | string | none | 广告点击触发事件 |
| @ad-closed | string | none | 广告关闭触发事件 |

#### 广告展现&刷新：

当检测到visible字段值发生变化，就会展示广告或者刷新已有的广告。代码如下：

```js
<mobads-ad apid="8229078" appid="d5aa0cd7" type="int" visible="{{intVisible}}"></mobads-ad>

    export default {
        data: {
            title: '示例页面',
            intVisible: false
        },
        onInit() {
        },
        intAdShow() {
            // 可触发广告的展现和刷新
            this.intVisible = new Date().getTime();
        }
    } 
```

  
  

## 激励视频广告

#### 接入步骤

1.  按照接入文档更新sdk包，接入文档中所有步骤不能遗漏哦！
   
2.  页面中初始化激励视频实例对象，传入参数apid(广告位id)和appid(媒体id)。
3.  激励视频对象挂载load方法用于广告加载，show方法用于触发广告展现。（实例初始化以及广告关闭后均会自动加载广告物料，无需手动缓存广告）。
4.  激励视频对象挂载onLoad(广告加载完成)、onClose(广告关闭)、onError(广告失败)三种回调事件。
5.  激励视频onClose回调会暴露视频时长(duration)和视频观看时长(currenttime)参数, 若在组件中传入show-countdown为**true**时，同时暴露是否可领取奖励(reward)参数,奖励策略可自行设定。
6.  详细代码可查看demo [点击下载广告demo](https://fpvideo.shenshiads.com/demo_zip/UnionAd.zip)

```js
// 修改字段apid、appid值
    loadRewardedAd() {
        let ad = this;
        this.rewardAd = this.$app.$def.union_quick_app_sdk.createRewardedVideoAd({
            apid: '7602249',
            appid: 'd5aa0cd7'
        });
        this.rewardAd.onLoad(function () {
            // 广告加载回调
        })
        this.rewardAd.onClose(function (data) {
            // 广告关闭回调
        })
        this.rewardAd.onError(function (data) {
            // data中可获取duration和currenttime字段
            // 广告失败回调
        })
        this.rewardAd.load();
    },
    showRewardedAd() {
        this.rewardAd && this.rewardAd.show();
    }, 
```

#### 属性说明：

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| appid | string | none | 神蓍平台的应用id |
| apid | string | none | 神蓍平台的广告位id |
| type | string | none | 广告类型 信息流=feed 开屏=rsplash 插屏=int 激励视频=rvideo |
| show-countdown | boolean | false | 是否显示奖励倒计时，奖励时长默认30s。若物料长度小于30s，则为物料时长。如果show-countdown为true，广告关闭回调中返回reward参数，若为true，表示可领取奖励，若为false，则不可领取奖励 |

  
  

## 广告预加载

sdk提供preloadAd方法，可预加载一条广告物料和图片缓存，展示广告时优先取缓存中的广告物料，若取缓存不成功则请求线上广告。 preloadAd方法返回类型是promise，可用于判断是否加载成功。

```js
this.$app.$def.union_quick_app_sdk.preloadAd({
      apid: "7439506",   // 广告位id
      appid: "d5aa0cd7", // 应用id
      type: "rsplash"    // 广告类型 信息流=feed 开屏=rsplash 插屏=int 激励视频=rvideo
  }).then(); 
```

  
  

## 下载四要素

下载类广告因合规要求，需要展现下载四要素。下载四要素的展现有两种形式：  
前卡展现：在广告内容下方显示四要素信息。默认是前卡展现。  
弹窗展现：广告点击后，弹窗显示广告四要素信息。

#### 前卡展现

前卡展现效果图：  
 <img src="https://fpvideo.shenshiads.com/doc_html/download.92706ba7.png" width = "400" alt="图片名称" />

下载面板样式自定义：支持容器、品牌名称、图标、按钮、文字元素的样式自定义.

```js
<mobads-ad apid="7439505" appid="d5aa0cd7" type="feed" adstyle="{{style}}"></mobads-ad>

    style: {
        downloadStyle: {
            // 下载面板样式
        },
        downloadBrandStyle: {
            // 下载面板品牌名称样式
        },
        downloadIconStyle: {
            // 下载面板图标样式
        },
        downloadButtonStyle: {
            // 下载面板按钮样式
        },
        downloadTextStyle: {
            // 下载面板文字样式
        },
    }, 
```

#### 弹窗展现

需要配置属性downloadpanel生效（如若广告组件嵌入list组件中，不支持弹窗交互）。

```html
<import name="mobads-ad" src="union-quick-app-ad/components/mobadsAd"></import>

    // downloadpanel
    <mobads-ad apid="7439505" appid="d5aa0cd7" type="feed" downloadpanel="{{true}}"></mobads-ad> 
```

弹窗展现效果图：

![](https://fpvideo.shenshiads.com/doc_html/quick_download_panel.0dfd6c82.png)  
  
  
  

## 常见问题排查指引

#### 1\. 请求不到广告怎么办？

建议排查方向：  

1.  查看控制台打印的排查信息，如下图。  
    
2.  控制台信息是否出现union: mobads ad init，如果没有，广告npm包未初始化成功。  
    
3.  控制台信息是否出现union: ad request，如果没有，广告请求发送失败。  
    
4.  控制台信息是否出现union: ad request error code，根据错误码编号定位问题。  
    

<img src="https://fpvideo.shenshiads.com/doc_html/debug.fc14535b.png" width = "500" alt="图片名称" />

**常见errorCode：**  
0、200000：无广告返回，该情况请联系商务同学协助解决。  
103011、103060、107003：appid或者代码位、包名配置错误，appid和代码位以及包名三者是绑定关系，请检查项目配置是否和文档一致。

#### 2\. 广告支持哪些回调方法？

广告加载回调 @ad-load  
广告无填充 @ad-error  
广告展现回调 @ad-show  
广告点击回调 @ad-click  
开屏、插屏广告支持关闭回调 @ad-closed  

#### 3\. 广告落地页无法跳转？

参考广告接入文档中的step2，需要将demo中的UnionAd文件夹拷贝到您的快应用项目src/路径下。

#### 4\. 如何刷新广告？

信息流广告组件支持refresh参数，监听到refresh值变化即可刷新广告。

#### 5\. 如何预加载广告？

sdk提供preloadAd方法，可预加载一条广告物料和图片缓存，展示广告时优先取缓存中的广告物料，若取缓存不成功则请求线上广告。

```
this.$app.$def.union_quick_app_sdk.preloadAd({apid:"7439506",appid:"d5aa0cd7",type:"rsplash"}); 
```

#### 6\. 下载类广告前卡隐藏下载四要素？

可通过配置属性downloadpanel设置切换下载弹窗交互。


#### 7\. 是否支持样式微调整？

信息流广告的adstyle参数可支持样式自定义，详情可参考信息流接入文档。

#### 8\. 开屏广告自定义跳转交互？

开屏广告倒计时结束后会自动跳转entry参数所配置的页面，如果需要自定义广告结束交互，entry传空，在@ad-closed事件中自定义交互。

#### 9\. 华为IDE编译失败？

删除package-lock和node\_modules 执行npm i hap-toolkit@1.9.8 -D 执行npm i