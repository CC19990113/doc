----------
 # uni-app对接文档 
----------

## 对接注意事项

1.  请勿使用 模拟器 进行运行调试广告，应用也应限制用户的一机多号或者模拟器登录行为  
   
2.  测试id只能用标准基座直接运行到手机上，不能用自定义基座打包或者打正式包
   
3.  正式id 制作自定义基座/打正式包 运行
       制作自定义基座：HBuilder X （以下简称HB）-> 运行 -> 运行到手机或模拟器 -> 制作自定义基座->勾选广告SDK（需找运营确认）
       运行自定义基座：HB-> 运行 -> 运行到手机或模拟器 -> 运行基座选择 -> 自定义调试基座
      
4.   测试期间建议<font color="#3eaf7c">每个</font>设备<font color="#3eaf7c">每天</font>调用广告次数不超过<font color="#3eaf7c">15</font> ，中间要有<font color="#3eaf7c">3-5s</font>间隔时间，否则可能触发系统的反作弊策略导致流量收益下降。上线应按以上规则做出相应限制
   
5.  对接广告测试过程中如遇到广告无法正常打开时，请提供`@error`事件中的<font color="#3eaf7c">错误信息（错误码）</font>截图或录屏 与神蓍技术联系。
   
6.  使用测试id时，如出现广告错误码`code:5005`属于正常情况，请晚会再试
   
7.  详细错误信息见下方<font color="#3eaf7c">广告错误码</font>

## Demo下载

下载demo项目代码，里面默认的都是测试id ，只能用标准基座直接运行到手机上才能测试 测试id不能用自定义基座打包或者打正式包

[下载地址](https://fpvideo.shenshiads.com/demo_zip/adsetdemo.zip)

下载后用HB工具打开，重新获取下AppID，才能运行(目录manifest.json)

## 开屏广告

启动app时的开屏广告,不需要写代码，打自定义基座或者打正式包的时候勾选上，基础广告 —— 基础开屏广告

![](http://fpvideo.shenshiads.com/user_plat_images/s1.png)

## Banner

Banner或信息流广告展现场景非常灵活，常见的展现场景为：文章顶部，详情页面顶部，第一屏中部等。建议信息流广告不要放置在底部

**代码参考/pages/ads/banner/banner**

*   语法
    
    ```html
    <ad adpid=""></ad>
    ```
    
*   属性说明
    
    | 属性名 | 类型                | 默认值   | 说明     |
    | ------ | ------------------- | -------- | -------- |
    | adpid  | String/Number/Array |          | 广告位id |
    | @load  | EventHandle         | 加载事件 |          |
    | @close | EventHandle         | 关闭事件 |          |
    | @error | EventHandle         | 错误事件 |          |
    

## 全屏视频广告

全屏视频广告是一个原生组件，层级比普通组件高

**代码参考/pages/ads/fullscreen/fullscreen**

*   语法
    
    ```html
    <ad-fullscreen-video adpid=""></ad-fullscreen-video>
    ```
    
*   属性说明
    
    | 属性名                            | 类型                | 默认值   | 说明                                                                                  |
    | --------------------------------- | ------------------- | -------- | ------------------------------------------------------------------------------------- |
    | adpid                             | String/Number/Array |          | 广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑 |
    | preload                           | Boolean             | true     | 页面就绪后加载广告数据                                                                |
    | loadnext                          | Boolean             | false    | 自动加载下一条广告数据                                                                |
    | url-callback                      | Object              |          | 服务器回调透传数据                                                                    |
    | v-slot:default="{loading, error}" |                     |          | 作用域插槽可以获取组件内部广告加载状态和加载错误信息                                  |
    | @load                             | EventHandle         | 加载事件 |                                                                                       |
    | @close                            | EventHandle         | 关闭事件 |                                                                                       |
    | @error                            | EventHandle         | 错误事件 |                                                                                       |
    
*   方法说明
    
    | 方法名 | 说明         |
    | ------ | ------------ |
    | load   | 加载广告数据 |
    | show   | 显示广告     |
    

## 激励视频
### 简介

激励视频广告，是cpm收益最高的广告形式。

手机用户观看几十秒视频广告，在广告播放完毕后可获得应用开发商提供的奖励，而应用开发商则可以从广告平台获取不菲的广告收入。

激励视频广告组件是原生组件，层级最高，会覆盖在普通前端组件上。

**代码参考/pages/ads/rewarded/rewarded**

*   语法
    
    ```html
    <ad-rewarded-video></ad-rewarded-video>
    ```
    
*   属性说明
    
    | 属性名                            | 类型                | 默认值   | 说明                                                                                  |
    | --------------------------------- | ------------------- | -------- | ------------------------------------------------------------------------------------- |
    | adpid                             | String/Number/Array |          | 广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑 |
    | preload                           | Boolean             | true     | 页面就绪后加载广告数据                                                                |
    | loadnext                          | Boolean             | false    | 自动加载下一条广告数据                                                                |
    | disabled                          | Boolean             | false    | 禁用默认点击行为                                                                      |
    | url-callback                      | Object              | false    | 服务器回调透传数据                                                                    |
    | v-slot:default="{loading, error}" |                     |          | 作用域插槽可以获取组件内部广告加载状态和加载错误信息                                  |
    | @load                             | EventHandle         | 加载事件 |                                                                                       |
    | @close                            | EventHandle         | 关闭事件 |                                                                                       |
    | @error                            | EventHandle         | 错误事件 |                                                                                       |

*   url-callback说明

    | 字段定义 | 类型   | 字段名称   | 备注                                                          |
    | -------- | ------ | ---------- | ------------------------------------------------------------- |
    | userId   | String | 用户id     | 调用SDK透传，应用对用户的唯一标识                             |
    | extra    | String | 自定义数据 | 调用SDK传入并透传，如无需要则为空(不宜传入过多或过于复杂数据) |

*   方法说明
    
    | 方法名 | 说明         |
    | ------ | ------------ |
    | load   | 加载广告数据 |
    | show   | 显示广告     |
    
::: tip 注意
    
  `load` 和 `show` 不能同时调用，在 `load` 过程中调用 `show` 会被忽略，因为数据还没加载完毕，可以在`@load`完成事件中调用 `show`
    
  支持重复调用 `show`，调用 `show` 时会判断是否加载过数据，如果没有会自动加载一次，如果组件正在预载数据，调用 `show` 也会被忽略
    
  推荐直接使用组件的自动加载逻辑，完全不需要手动调用 `load` 和 `show`
:::
**API调用示例**
```vue
<template>
  <view>
    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :preload="false" :loadnext="false" :disabled="true"
      v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <view class="ad-error" v-if="error">{{error}}</view>
    </ad-rewarded-video>
    <button type="primary" :disabled="isLoading" :loading="isLoading" @click="showAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    onReady() {
      this.isLoading = true;
      this.$refs.adRewardedVideo.load();
    },
    methods: {
      showAd() {
        if (this.isLoading) {
          return
        }
        this.$refs.adRewardedVideo.show();
      },
      onadload(e) {
        this.isLoading = false;
        console.log('广告数据加载成功');
      },
      onadclose(e) {
        const detail = e.detail
        // 用户点击了【关闭广告】按钮
        if (detail && detail.isEnded) {
          // 正常播放结束
          console.log("onClose " + detail.isEnded);
        } else {
          // 播放中途退出
          console.log("onClose " + detail.isEnded);
        }
        //this.isLoading = true;
        //this.$refs.adRewardedVideo.load();
      },
      onaderror(e) {
        // 广告加载失败
        console.log(e.detail);
        this.isLoading = false;
      }
    }
  }
</script>

<style>
  .ad-error {
    color: orangered;
    margin-top: 5px;
  }
</style>
```
### 激励视频瀑布流
**激励视频,瀑布流优化收益(可选)**

**HB版本高于`3.6.6` 已内置，无需操作**

HB版本低于或等于`3.6.6`配置介绍与实施方法如下：

*   **介绍:** 广告位从0到5依次排序，并依次请求层数：建议大于5层，最后一层是打底广告位（建议用原有广告位）
*   **广告位名称：** 需要开发者将广告位命名为，CPM0，CPM1，CPM2，CPM3，CPM4，CPM5
*   **适用范围：** 广告位当前填充充足，开启4家广告渠道以上
*   **配置时间：** 2个工作日
*   **开发者工作：** 针对某个广告位，如激励视频之前的一个广告位置要重新创建多个广告位置，由0到5，最后广告位打底
    *   激励视频广告位CPM0（新建）
    *   激励视频广告位CPM1（新建）
    *   激励视频广告位CPM2（新建）
    *   激励视频广告位CPM3（新建）
    *   激励视频广告位CPM4（新建）
    *   激励视频广告位CPM5（新建）
    *   激励视频广告位打底（原有广告位）

开发者先自行创建广告位，创建完毕后通知运营

以上步骤完成后，开发者需按照广告组件开发文档进行代码部署，由上到下（数组是从左到右）依次请求。

### 服务器回调

激励视频广告可以支持广告服务器到业务服务器的回调，用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，广告服务器会访问配置的云函数，通知用户完成观看激励视频。

相对来讲服务器回调将更加安全，可以依赖广告平台的反作弊机制来避免用户模拟观看广告完成的事件。

![](http://fpvideo.shenshiads.com/user_plat_images/i2.png)

如何使用

1.  申请激励视频广告位时开启服务器回调
    
2.  创建激励视频广告时传入回调参数
    

urlCallback示例:

```vue
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :url-callback="urlCallback" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script> export default {
  data() {
    return {
      urlCallback: {
        userId: 'testuser',
        extra: 'testdata'
      }
    }
  },
  methods: {
  }
} </script> 
```

### 服务器回调说明

**服务器回调基于[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)**
1.  由于多家广告商的回调和签名验证逻辑不同，开发者需要写很多逻辑，``uniCloud`` 中的云函数 ``uniAdCallback`` 已抹平了差异，开发者按照统一的参数处理即可
2.  开发者的服务器有可能响应慢或失去响应造成回调数据丢失, 使用 ``uniCloud`` 可以帮助开发者保存一份来自广告商服务器的回调数据到开发者的云数据中，以便开发者主动查询
3.  ``uniCloud`` 可以承载大并发、防DDoS攻击，无需运营人员维护

**详细流程如下:**

1.  登陆 [uniCloud](https://unicloud.dcloud.net.cn/) web控制台，新建服务空间(以应用名命名)
    
2.  在云服务空间内将 邮箱账号：<font color="#3eaf7c">**Yousshkj@163.com**</font> 添加为协作者
    
3.  向运营提供云服务空间名称、云函数名称(或回调URL)，运营配置回调 **（对接群内联系运营做）**
    
4.  开通后将在选择的服务空间下自动部署一个加密云函数 `uniAdCallback`
    
5.  `uniAdCallback` 接收广告商服务器回调验证签名并抹平穿山甲/优量汇/快手参数差异，然后以以下方式回调    
      *  业务在uniCloud：  通过[callFunction](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=callbyfunction) 方式调用用户云函数
      *  业务在传统服务器：以HTTP方式请求开发者配置的回调URL

    
6.  用户在自己的云函数中处理业务
    

注意:

1.  新建的云函数名称不能使用 `uniAdCallback`
    
2.  服务器回调绑定成功后可以云服务空间查看
    
3.  服务器通信和前端事件是并行的，前端需要轮询向服务器请求并验证结果
    
    (关于前端轮询:)
    
    *   用户看完后服务器先收到结果，这里已经可以向用户发放奖励了，不需要等客户端，都以服务器为准
        
    *   用户在客户端点击了关闭广告，触发前端关闭事件包含结果 `isEnded`
        
    *   如果 `isEnded=true` ，向服务器查询 奖励结果，如果当时查不到，就轮询几次 一般3秒内没有问题
        
4.  不建议在 `uniAD` web控制修改回调的服务空间和云函数名称，因为修改后生效需要一段时间
    

### 服务器回调参数

| 字段定义  | 类型   | 字段名称       | 备注                              |
| --------- | ------ | -------------- | --------------------------------- |
| adpid     | String | DCloud广告位id |                                   |
| provider  | String | 广告服务商     | csj、ks、gdt、sigmob              |
| platform  | String | 平台           | iOS、Android                      |
| sign      | String | 签名           |                                   |
| trans\_id | String | 交易id         | 完成观看的唯一交易ID              |
| user\_id  | String | 用户id         | 调用SDK透传，应用对用户的唯一标识 |
| extra     | String | 自定义数据     | 调用SDK传入并透传，如无需要则为空 |

#### 签名生成方式
```js
    sign = sha256(secret:transid)
```

#### 开发者返回数据约定

返回json数据，字段如下：

| 字段名称 | 说明     | 字段类型 | 备注                                                         |
| -------- | -------- | -------- | ------------------------------------------------------------ |
| isValid  | 校验结果 | Blean    | 判定结果，是否发放奖励，具体发放奖励由用户自己的业务系统决定 |

### 用户云函数详细说明

如果业务使用了uniCloud，可以直接在云函数内部处理

也可以将结果发送给已有业务服务器

示例代码:

```js
'use strict';

const crypto = require('crypto');

const db = uniCloud.database();

const collectionName = "ad-callback-log"; // 如果选择了腾讯云，需要手动预创建表

class DB {

  static save(data) {
    return new DB().add(data);
  }

  add(data) {
    const collection = db.collection(collectionName);
    const data2 = Object.assign(data, {
      ad_type: 0,
      create_date: new Date()
    })
    return collection.add(data2);
  }
}

exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ', event);

  const {
    path,
    queryStringParameters
  } = event;

  const data = {
    adpid: event.adpid,
    platform: event.platform,
    provider: event.provider,
    trans_id: event.trans_id,
    sign: event.sign,
    user_id: event.user_id,
    extra: event.extra
  }

  // 注意::必须验签请求来源
  const secret = ""; // 验签使用的Security key
  const trans_id = event.trans_id;
  const sign2 = crypto.createHash('sha256').update(`${secret}:${trans_id}`).digest('hex');
  if (event.sign !== sign2) {
    return null;
  }

  // 可选将回调记录保存到uniCloud，避免用户服务器没有响应时有日志可查，如果选择了保存记录需要做定时清理日志，避免日志过多影响性能
  // try {
  //   await DB.save(data);
  // } catch (e) {
  //   console.log(e);
  // }

  // 开发者在此处处理自己的回调业务，需要返回值

  return {
    isValid: true
  }
};
```

### 注意事项

*   iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
  
*   测试期间请使用测试 `adpid`，参考测试代码，如果无法显示换个时间再试
*   多次调用 `RewardedVideoAd.onLoad()`、`RewardedVideoAd.onError()`、`RewardedVideoAd.onClose()` 等方法监听广告事件会产生多次事件回调，建议在创建广告后监听一次即可。
*   **为避免滥用广告资源，目前每个用户每天可观看激励式视频广告的次数有限，建议展示广告按钮前先判断广告是否拉取成功。**
*   **App平台，建议每个广告商每个设备每天调用次数不超过`15`，中间要有间隔时间，否则可能触发系统的反作弊策略导致流量收益下降。**

### 安全注意
由于激励视频对应着用户奖励，可能会遇到恶意刷激励奖励但实际上并不看广告的情况。此时广告平台不给结算，但开发者却可能把激励送出去。  

为了提升安全性，建议所有使用激励视频的开发者都要做如下工作来加强保护：

  1.  前端代码加密。涉及激励相关的，在manifest中配置好要加密的代码文件，打包后会自动加密相应文件。[详见](https://ask.dcloud.net.cn/article/36437)
   
  2.  apk加固。即便前端代码加密，原生层引擎的java代码仍然可能被反编译，需要对apk加固。市面上很多加固服务，比如360加固、爱加密加固均可以自行选择。
  3.  使用如下安全类API，防止客户端被篡改
   
*   plus.navigator.getSignature 获取应用签名标识。结合在服务器端存放证书信息，可比对判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
*   plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
*   plus.navigator.isRoot 判断设备是否被root或越狱 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
*   plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)

  4.  避免使用短信验证码来识别身份，推荐使用可信度更高的 [手机号一键登录](https://uniapp.dcloud.net.cn/univerify) 或 [微信登录](https://uniapp.dcloud.net.cn/api/plugins/login#login)
  5.  必要时可使用[生物认证（指纹和faceid）](https://uniapp.dcloud.net.cn/api/system/authentication)、[活体检测的sdk](https://ext.dcloud.net.cn/search?q=%E6%B4%BB%E4%BD%93%E6%A3%80%E6%B5%8B&orderBy=Relevance&cat1=5&cat2=51)

## 插屏广告

插屏广告组件是由客户端原生的图片、文本、视频控件组成的； 插屏广告与信息流或横幅广告相比展现尺寸更大，同样能够满足您对大量曝光和用户转化的需求。

#### 代码参考/pages/ads/interstitial/interstitial

*   语法
    
    ```html
    <ad-interstitial></ad-interstitial>
    ```
    
*   属性说明
    
    | 属性名                            | 类型                | 默认值   | 说明                                                                                  |
    | --------------------------------- | ------------------- | -------- | ------------------------------------------------------------------------------------- |
    | adpid                             | String/Number/Array |          | 广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑 |
    | preload                           | Boolean             | true     | 页面就绪后加载广告数据                                                                |
    | loadnext                          | Boolean             | false    | 自动加载下一条广告数据                                                                |
    | options                           | Object              | false    | 透传到作用域插槽                                                                      |
    | v-slot:default="{loading, error}" |                     |          | 作用域插槽可以获取组件内部广告加载状态和加载错误信息                                  |
    | @load                             | EventHandle         | 加载事件 | 微信小程序暂不支持                                                                    |
    | @close                            | EventHandle         | 关闭事件 | 微信小程序暂不支持                                                                    |
    | @error                            | EventHandle         | 错误事件 | 微信小程序暂不支持                                                                    |
    
*   方法说明
    
    | 方法名 | 说明         |
    | ------ | ------------ |
    | load   | 加载广告数据 |
    | show   | 显示广告     |
    

## 短视频内容

视频内容频道，支持上下滑动切换视频内容

::: tip 注意
  仅nvue页面支持  (iOS-hx3.4.2支持、Android-hx3.1.17支持)

  打包时必须选择快手内容联盟。
:::

#### 代码参考/pages/ads/content/content

*   语法
    
    ```html
    <ad-content-page></ad-content-page>
    ```
    
*   属性说明
    
    | 属性名    | 类型        | 默认值             | 说明               |
    | --------- | ----------- | ------------------ | ------------------ |
    | adpid     | String      | uni-AD App广告位id | 仅nvue支持         |
    | @load     | EventHandle |                    | 广告加载成功的回调 |
    | @error    | EventHandle |                    | 广告加载失败的回调 |
    | @start    | EventHandle | 开始播放时触发     | hbuidlerX3.4.3+    |
    | @pause    | EventHandle | 暂停时触发         | hbuidlerX3.4.3+    |
    | @resume   | EventHandle | 恢复播放时触发     | hbuidlerX3.4.3+    |
    | @complete | EventHandle | 播放完成时触发     | hbuidlerX3.4.3+    |
    
*   @start @pause @resume @complete回调参数`e.detail`的说明
    
    | 字段名   | 说明                                                    |
    | -------- | ------------------------------------------------------- |
    | id       | 唯一标识                                                |
    | type     | 0未知类型 1 普通信息流 2 sdk内部广告 3第三方广告 4 直播 |
    | duration | 视频总时长                                              |
    
::: tip 注意
*   需要在页面隐藏时调用组件的 hide 方法以停止广告内容的声音
*   3.4.17+ iOS平台 因广告商限制，调用 show 或 hide 方法需要申请通过后有效
:::

## 广告错误码
  
  ### app平台错误码
  **正式广告位ID请制作自定义基座真机运行**

| code   | message                                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| \-5001 | 广告位标识adpid为空，请传入有效的adpid                                                                     |
| \-5002 | 无效的广告位标识adpid，请检查当前appid和adpid是否与运营提供的一致，使用正确的adpid                         |
| \-5003 | 未开通广告，请检查当前包名和appid是否与申请广告的一致，adpid是否与运营提供的一致                           |
| \-5004 | 无广告模块，打包时请配置勾选要使用的广告模块                                                               |
| \-5005 | 广告填充不足，请换个网络环境，过段时间重新加载，个别出现属于正常情况，下游尽可能上架应用以扩充渠道增加填充 |
| \-5006 | 广告未加载完成无法播放，请加载完成后再调show播放                                                           |
| \-5007 | 无法获取广告配置数据，请检查当前包名和appid是否与申请广告的一致，尝试重试                                  |
| \-5008 | 广告已过期，请重新加载数据                                                                                 |
| \-5100 | 其他错误，聚合广告商内部错误                                                                               |

### -5005详细说明  
 -5005即广告没有填充，尤其是激励视频较为常见。

#### 可能的原因
  1. 请求过于频繁，广告主不愿意给同一设备投放太多次广告。可过段时间再试
  2. 当天请求次数已达广告商最大上限，明天再试
  3. 设备太旧，广告主不投放
  4. 终端用户在刷广告，比如使用了云手机或手机墙，广告主不投放
  5. 如果配置了 bidding 分层，无法满足条件的也会抛出此错误

#### 正确解决方案
  1. 尽可能开通多个广告渠道以增加填充率。激励视频有穿山甲、优量汇、快手、百度、华为、Sigmob等多家渠道，只开通一两家很容易造成填充不足
  2. 如果一直无法填充，提示用户当前环境不适合展示广告，尝试更换设备
  3. 激励视频因为有奖励，很容易招惹灰黑产，为防止被刷，推荐使用：
     1. 开通激励视频的服务器回调
     2. 不使用短信验证码等不安全登录手段，改为App一键登陆、uni金融级实人认证（含活体检测）等更安全的身份校验
     3. 使用uni云端一体安全网络，防止伪造客户端

#### 不治本的绕过型方案
  1. 增加其他渠道的测试id当作打底广告
  2. 使用视频模拟广告以满足业务流程
   
  **使用视频模拟广告示例**    
  [视频模拟广告Demo](https://fpvideo.shenshiads.com/demo_zip/video-demo.zip)
```html
  <!-- pages/index/index.nvue -->
<template>
	<view class="content">
		<ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @error="onaderror">
			<button :disabled="loading" :loading="loading">显示广告</button>
			<view v-if="error">{{error}}</view>
		</ad-rewarded-video>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
				if (e.detail.errCode == -5005) {
					uni.navigateTo({
						url: '/pages/adVideo/adVideo',
						events: {
							// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
							onVideoClosed: function(data) {
								console.log(data);
							}
						}
					})
				}
			}
		}
	}
</script>
```


```html
<!-- pages/adVideo/adVideo.nvue -->
<template>
	<view class="container">
		<video id="myVideo" :src="src" :autoplay="true" :controls="false" @ended="onfinish" @click="toLandVideo"
			@timeupdate="onTimeUpdate" class="video"></video>
		<view class="close-box">
			<text v-if="countdown>0" class="close">{{countdown}}s</text>
			<text v-if="showClose" class="close" @click="closeVideo">X</text>
		</view>
		<text class="ad-tip">广告</text>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				src: "", //视频地址
				showClose: false,
				countdown: '',
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		onLoad() {
			this.isFinish = false
			this.isPalying = false
		},
		onShow() {
			if (!this.isFinish && this.videoContext) this.videoContext.play()
		},
		onBackPress() {
			return !this.isFinish
		},
		methods: {
			onfinish(e) {
				// console.log("onfinish:" + JSON.stringify(e));
				this.showClose = true
				this.isFinish = true
			},
			closeVideo() {
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('onVideoClosed', {
					data: ''
				});
				uni.navigateBack()
			},
			toLandVideo() {
				this.videoContext.pause()
				uni.navigateTo({
					url: "/pages/landVideo/landVideo"
				})
			},
			onTimeUpdate(e) {
				this.countdown = parseInt(e.detail.duration - e.detail.currentTime)
			}
		}
	}
</script>
<style>
	.container {
		flex: 1;
		position: relative;
	}
	.video {
		flex: 1;
	}
	.close-box {
		top: 10rpx;
		right: 50rpx;
		position: absolute;
		flex-direction: row;
    border-radius: 50%;
		background-color: #666;
	}
	.close {
		color: #808080;
		font-size: 50rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.ad-tip {
		bottom: 20rpx;
		right: 50rpx;
		position: absolute;
		color: #666;
		font-size: 28rpx;
	}
</style>
```

```html
  <!-- pages/landVideo/landVideo.vue -->
<template>
	<view>
		<web-view src="广告落地页url"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>
```


