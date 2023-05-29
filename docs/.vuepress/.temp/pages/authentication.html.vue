<template><div><hr>
<h1 id="实名认证" tabindex="-1"><a class="header-anchor" href="#实名认证" aria-hidden="true">#</a> 实名认证</h1>
<hr>
<h2 id="人脸识别" tabindex="-1"><a class="header-anchor" href="#人脸识别" aria-hidden="true">#</a> 人脸识别</h2>
<h3 id="接口描述" tabindex="-1"><a class="header-anchor" href="#接口描述" aria-hidden="true">#</a> 接口描述</h3>
<p>获取刷脸地址进行人脸识别</p>
<hr>
<h3 id="业务流程" tabindex="-1"><a class="header-anchor" href="#业务流程" aria-hidden="true">#</a> 业务流程</h3>
<p>接入需要用户输入自己的身份证和身份证号码后调用该接口，该接口会返回一个链接，该链接为认证链接，用户通过该链接进行刷脸认证</p>
<hr>
<h3 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>yun<span class="token punctuation">.</span>shenshiads<span class="token punctuation">.</span>com<span class="token operator">/</span>cloudauth<span class="token operator">/</span>fin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式" aria-hidden="true">#</a> 请求方式</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="请求头参数" tabindex="-1"><a class="header-anchor" href="#请求头参数" aria-hidden="true">#</a> 请求头参数</h3>
<table>
<thead>
<tr>
<th><strong>请求参数</strong></th>
<th><strong>是否必填</strong></th>
<th><strong>参数类型</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>appKey</td>
<td>是</td>
<td>head</td>
<td>所属应用的appKey</td>
</tr>
<tr>
<td>Authorization</td>
<td>是</td>
<td>head</td>
<td>示例：b9d3a8xxxxxxxxx72d</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3>
<table>
<thead>
<tr>
<th><strong>请求参数</strong></th>
<th><strong>类型</strong></th>
<th><strong>是否必填</strong></th>
<th><strong>参数类型</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>idNo</td>
<td>String</td>
<td>是</td>
<td>body</td>
<td>身份证号（大陆二代身份证）</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>是</td>
<td>body</td>
<td>姓名</td>
</tr>
<tr>
<td>callbackUrl</td>
<td>String</td>
<td>是</td>
<td>body</td>
<td>认证成功后重定向地址，网页端接入可以直接传入网页地址，app接入传入app schema地址</td>
</tr>
<tr>
<td>notifyUrl</td>
<td>String</td>
<td>是</td>
<td>body</td>
<td>认证结束后异步通知接口,具体见异步通知说明</td>
</tr>
<tr>
<td>faceauthMode</td>
<td>String</td>
<td>是</td>
<td>body</td>
<td><em><strong>ZHIMACREDIT</strong></em> 支付宝认证<br/><em><strong>TENCENT</strong></em> 腾讯云认证<br/><em><strong>WECHAT</strong></em> 微信认证（生成只有微信客户端可以打开的链接）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"idNo"</span><span class="token operator">:</span> <span class="token string">"510**************"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token property">"callbackUrl"</span><span class="token operator">:</span> <span class="token string">"https://www.***.com"</span><span class="token punctuation">,</span>
  <span class="token property">"notifyUrl"</span><span class="token operator">:</span> <span class="token string">"https://www.***.com"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="返回参数" tabindex="-1"><a class="header-anchor" href="#返回参数" aria-hidden="true">#</a> 返回参数</h3>
<table>
<thead>
<tr>
<th><strong>返回参数</strong></th>
<th><strong>参数类型</strong></th>
<th><strong>参数说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>String</td>
<td>状态码 “000000” 则为成功</td>
</tr>
<tr>
<td>msg</td>
<td>String</td>
<td>状态说明</td>
</tr>
<tr>
<td>traceId</td>
<td>String</td>
<td>业务ID</td>
</tr>
<tr>
<td>data</td>
<td>String</td>
<td>业务ID</td>
</tr>
<tr>
<td>resultId</td>
<td>String</td>
<td>请求记录ID</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td>初步认证状态</td>
</tr>
<tr>
<td>originalUrl</td>
<td>String</td>
<td>获取个人刷脸实名认证长链接。有效时长30分钟</td>
</tr>
<tr>
<td>expire</td>
<td>Long</td>
<td>链接失效时间,毫秒值 结果依据实际的刷脸方式为准：<br /><strong>支付宝30分钟</strong><br /><strong>腾讯云2分钟</strong> <br /><strong>微信2小时</strong></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="返回示例" tabindex="-1"><a class="header-anchor" href="#返回示例" aria-hidden="true">#</a> 返回示例</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span>
  <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"Success"</span><span class="token punctuation">,</span>
  <span class="token property">"traceId"</span><span class="token operator">:</span> <span class="token string">"ce9ce53f-b12d-4362-8f9c-498e9afc4b3c"</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"resultId"</span><span class="token operator">:</span> <span class="token string">"ER20220512191137117001"</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"originalUrl"</span><span class="token operator">:</span> <span class="token string">"https://openapi.alipay.com/gateway.do?alipay_sdk=alipay-sdk-java-3.7.105.ALL&amp;app_id=2021001155661340&amp;biz_content=%7B%22certify_id%22%3A%22acfa1fb66b4083af13f14b6699c397de%22%7D&amp;charset=UTF-8&amp;format=JSON&amp;method=alipay.user.certify.open.certify&amp;sign=CTN%2BTYvgBL7O%2F7BvxoBM60xP3aRSLDZ%2Bweer0hLcJFzPwJ3JSCnxg8rcqwqFnbqRnzvL7Oy2rIDkDGejmwnYmeeXDFJQwPNfc4kiLp7OVvs5FLeCkXPkI7G31SaeB%2B05onTE%2ByoRQPV3MAVNJVpva1BqF3DvHkDodwSZEvX3XbnJK09jokmHTcdkqBi9G76U50YnxlrI7JYNdkEAhM7mNsA2KHlOWMHCq4bJLb3LjKKRw1EKMQvZcmfiWjo4Lg7iIfYpj4KAuyWm0dK1aEB0WK73MknN7Da0v2Gag0rzmDSciP7D4pnAadn5z8Q2AgweQy2n5HmFpPd2v3a93345Ug%3D%3D&amp;sign_type=RSA2×tamp=2022-05-12+19%3A11%3A37&amp;version=1.0"</span><span class="token punctuation">,</span>
    <span class="token property">"expire"</span><span class="token operator">:</span> <span class="token string">"1652354018094"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="错误码" tabindex="-1"><a class="header-anchor" href="#错误码" aria-hidden="true">#</a> 错误码</h3>
<table>
<thead>
<tr>
<th>errorCode</th>
<th>未开通相关openApi业务</th>
</tr>
</thead>
<tbody>
<tr>
<td>100000</td>
<td>参数错误</td>
</tr>
<tr>
<td>100010</td>
<td>内部错误，请联系技术人员</td>
</tr>
<tr>
<td>100011</td>
<td>资金账户余额不足，无法进行认证</td>
</tr>
<tr>
<td>100012</td>
<td>价格获取失败或未获取到相关定价策略，请联系相关人员配置API定价策略</td>
</tr>
<tr>
<td>100013</td>
<td>认证服务异常，请稍后重试</td>
</tr>
<tr>
<td>100014</td>
<td>身份证校验码不正确</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="异步通知说明" tabindex="-1"><a class="header-anchor" href="#异步通知说明" aria-hidden="true">#</a> 异步通知说明</h3>
<p>认证业务在认证流程成功结束或失败时（实名认证成功触发异步通知），会通过流程发起时指定的notifyUrl参数，向调用方发送异步通知。</p>
<ul>
<li>目前通过HTTP协议，以POST方法进行通知调用；</li>
<li><strong>开发者对于异步回调通知只需通过POST方式进行接收即可，认证结果以实际POST方式接收的异步通知为准。</strong></li>
<li><strong>重试机制</strong></li>
<li>首次调用失败后，10s后重试，第二次重试间隔30s，第三次重试间隔60s，再次失败则不再通知；</li>
<li>对接方在接收到回调请求时，需返回HTTP 状态码 200；</li>
<li>为了保障异步通知的可靠性，建议业务方在回调请求处理中，尽可能减少业务操作，改用异步方式处理后续业务流程。</li>
</ul>
<hr>
<h4 id="通知参数如下" tabindex="-1"><a class="header-anchor" href="#通知参数如下" aria-hidden="true">#</a> 通知参数如下</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>application/json;charset=UTF<span class="token number">-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>requestId</td>
<td>String</td>
<td>请求业务ID</td>
</tr>
<tr>
<td>isSuccess</td>
<td>Boolean</td>
<td>认证结果：true、认证成功；false、认证失败</td>
</tr>
</tbody>
</table>
</div></template>


