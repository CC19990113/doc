<template><div><h1 id="广告业务规范" tabindex="-1"><a class="header-anchor" href="#广告业务规范" aria-hidden="true">#</a> 广告业务规范</h1>
<hr>
<ol>
<li>禁止通过技术手段伪造曝光量，禁止通过强制/诱导第三方或用户浏览、点击广告，伪造虚假曝光量；禁止通过隐藏广告或放置用户不可见的广告等相关行为获取广告流量；禁止使用程序访问、自动刷新、作弊器等手段制造无效广告展示、点击量。</li>
<li>制造无效的广告点击/转化：
<ul>
<li>自行点击/转化：开发者自行或委托第三方进行反复手动点击/转化；</li>
<li>鼓励诱导点击/转化：以任何形式诱导或奖励用户在广告上点击/转化；</li>
<li>通过程序软件点击/转化：通过作弊程序，自动点击/转化来增加无效数据；</li>
<li>静默安装激活应用/软件：未告知且未获取用户安装激活允许，自动安装或激活应用/软件；</li>
<li>伪造字段内容：对于平台接口文档要求的字段，在数据传输过程中错传或伪造字段取值，伪造无效数据。</li>
</ul>
</li>
<li>掺量或虚假流量：广告实际投放的媒体与在注册的媒体不一致或加入其它非在注册的媒体进行投放。</li>
<li>应用内没有原生内容或自有功能，以单一的广告推广为应用唯一目的。</li>
<li>已封禁应用或账号不能再重新在平台注册相关应用或账号。</li>
<li>其他任何以不正当方式制造虚假或无效流量的行为。</li>
<li>暗示点击/转化：对广告内容加以“精彩推荐”、“相关链接”、“欢迎点击”等言语描述，或在广告旁放置箭头图形、下载指示图形或其他指引性图形。</li>
<li>混淆点击/转化：遮挡、隐藏广告显示区域的任何部分，包括但不限于广告标识、logo、链接、描述等，造成广告内容与页面内容发生重叠。</li>
<li>广告展示违规：多个广告全部或部分重叠展示，或使用其它影响转化或影响用户体验的方式展示广告。</li>
<li>擅自修改广告内容：
<ul>
<li>将用户点击的落地页重定向到别处，与最终用户直接访问广告落地页所看到的页面不同；</li>
<li>对由广告内容任一部分、副本或衍生信息，以任何方式加以存储或长时间缓存；</li>
<li>广告内容显示后，改变广告内容属性，比如：编辑、修改、筛选或截取广告中所含的信息，或者更改广告元素的顺序及其他擅自修改广告内容的行为。</li>
</ul>
</li>
<li>广告与应用原生内容未做区分或区分不明显造成广告误点：
<ul>
<li>广告边框不清晰，导致广告内容与应用原生内容混淆；</li>
<li>广告周边未留出空白不可点击区域；</li>
<li>广告与应用内其他可点区域之间未保持足够距离；</li>
</ul>
</li>
<li>广告点击区域应设置为仅广告图片、标题、按钮等素材区域可点；禁止采用影响用户体验、造成用户误点的全屏可点或广告背景可点的广告形式。</li>
<li>禁止缩小广告关闭按钮或制造虚假跳过/关闭按钮。</li>
<li>漏传接口文档要求的必须回传的字段的。</li>
<li>广告渲染应包含广告标题或描述、广告创意素材、平台logo、广告标识等内容。</li>
<li>禁止遮挡、扭曲、模糊广告图片和内容。</li>
<li>广告内容展示不全或广告视频观看时长过短将记为无效展示。</li>
<li>每种广告样式（开屏、插屏等）只能用于特定场景展示，禁止混用或误用广告样式。
<ul>
<li>开屏广告<br>
a. 开屏广告场景在应用启动时进行展示，展示完毕后自动关闭并进入应用的主界面。开屏代码位只能用于应用开屏的位置。</li>
<li>信息流广告<br>
a. 信息流广告场景应在应用的内容流中与应用内容穿插展示，广告内容与应用其他内容区分开，防止意外点击。</li>
<li>插屏广告<br>
a. 展示插屏广告场景为应用功能自然体验中断时，例如，暂停视频播放，游戏关卡之间。<br>
b. 插屏广告不应突然出现，不应干扰用户使用应用的正常流程，例如应用加载，退出应用或者游戏过程中。<br>
c. 原生插屏广告内容与其他内容区分开，周围应留出空间防止意外点击，应包含广告标识和平台logo，请勿扭曲、遮挡广告图片。</li>
<li>banner横幅广告<br>
a. 横幅广告是在内容底部或顶部显示的小条形广告。不应将横幅广告放置于文本、图片和应用的其他可点击部分，避免误点。<br>
b. 原生横幅广告内容与其他内容区分开，周围应留出空间防止意外点击，应包含广告标识和平台logo，请勿扭曲、遮挡广告图片。<br>
c. 若有轮播场景请在创建代码位时，在场景中注明轮播场景。</li>
<li>沉浸式视频信息流广告<br>
a. 沉浸式视频信息流广告的展示场景应该在应用的视频流中进行展示，广告内容与应用其他内容区分开，防止意外点击。 沉浸式视频信息流广告不应有诸如“看视频给金币或奖励”之类的激励展示规则</li>
<li>全屏视频广告<br>
a. 全屏视频广告的展示场景是应用功能自然体验中断时，如游戏关卡之间;<br>
b. 全屏视频广告不应突然出现，不应干扰用户使用应用的正常流程，例如应用加载，退出应用或者游戏过程中;<br>
c.  全屏视频不应有诸如“看视频给金币或奖励”之类的激励展示规则;<br>
d. 允许用户在5秒后跳过该广告。开发者不应对用户何时可以跳过广告的设置进行更改，或添加任何其他跳过功能;</li>
<li>激励视频广告<br>
a. 激励视频广告的展示场景是用户在需要游戏复活、解锁游戏关卡、获得游戏道具等享受应用中的某些功能时由用户选择观看激励视频广告并获得相应激励;<br>
b. 每次广告展示时，须向用户说明激励广告的规则（如广告展示前须向用户说明看完广告才能获得相应激励并说明具体激励内容）并让用户选择是否播放激励视频，未经用户允许时(如未点击播放按钮)不能自动播放激励视频;<br>
c. 激励视频物料不能用于非激励视频广告位，非激励视频物料不能用于激励视频广告位;<br>
d. 不能提供金钱补偿或可变现，或可转让给他人的激励形式激励用户点击广告（点击广告指Endcard或是激励视频中的banner）</li>
</ul>
</li>
</ol>
</div></template>


