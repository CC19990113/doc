<template><div><hr>
<h1 id="sdk激励服务器端回调接口" tabindex="-1"><a class="header-anchor" href="#sdk激励服务器端回调接口" aria-hidden="true">#</a> SDK激励服务器端回调接口</h1>
<hr>
<h2 id="api说明" tabindex="-1"><a class="header-anchor" href="#api说明" aria-hidden="true">#</a> API说明</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 请求方式</span>
<span class="token constant">POST</span>
<span class="token comment">// 数据格式</span>
<span class="token constant">JSON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="签名验证方式" tabindex="-1"><a class="header-anchor" href="#签名验证方式" aria-hidden="true">#</a> 签名验证方式</h2>
<p>接口签名中<code v-pre>sign</code>按以下方式进行生成：</p>
<ol>
<li>按参数名称（即参数Key）字母顺序进行拼接参数</li>
<li>拼接后的参数加上appSecret组成最终的参数字符串，正式appSecret请向运营获取</li>
<li>对拼接字符串进行<code v-pre>md5</code>加密
Python示例</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> hashlib
user_id <span class="token operator">=</span> <span class="token string">'1'</span>
timestamp <span class="token operator">=</span> <span class="token number">1646318375</span>
secret <span class="token operator">=</span> <span class="token string">'test-secret'</span>
join_str <span class="token operator">=</span> <span class="token function">str</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span> <span class="token operator">+</span> user_id <span class="token operator">+</span> secret
m <span class="token operator">=</span> hashlib<span class="token punctuation">.</span><span class="token function">md5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> m<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>join_str<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> m<span class="token punctuation">.</span><span class="token function">hexdigest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果:<code v-pre>323e99cf18abc1750617251fd3af9249</code></p>
<p><strong>注意：</strong> 为防⽌被接⼝被恶意访问，请对<code v-pre>sign</code>和时间戳做校验，例如时间戳应当和服务器时 间相差不过超60秒，同时确保<code v-pre>sign</code>的唯⼀性。</p>
<h2 id="接口请求参数" tabindex="-1"><a class="header-anchor" href="#接口请求参数" aria-hidden="true">#</a> 接口请求参数</h2>
<p>| 字段 | 类型 | 是否必须 | 说明 |
| userId | string | 是 | 媒体方传⼊的⽤户ID |
| timestamp | int | 是 | 	时间戳，10位，精确到秒 |
| sign | string | 是 | 签名，<code v-pre>见加密方式</code> |
| key | string | 是 | 	广告唯一key(不参与签名) |</p>
<p>请求示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"userId"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1646318375</span><span class="token punctuation">,</span>
 <span class="token string-property property">"sign"</span><span class="token operator">:</span> <span class="token string">"314fc2e59da2e6d9be256647976748e9"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"key"</span><span class="token operator">:</span><span class="token string">"96187eb01479eff6c0f473647bffcf3c"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数" aria-hidden="true">#</a> 响应参数</h2>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>是否必须</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>int</td>
<td>是</td>
<td><code v-pre>0</code>表示正常</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>是</td>
<td>响应消息</td>
</tr>
</tbody>
</table>
<p>响应示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"参考回传Code"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


