# Pencil Skill - 韩系糖果感直播复盘 App UI

## 目标

让 Pencil 在生成直播复盘类 App 界面时，稳定输出接近你提供截图的韩系甜感、奶油感、轻盈感移动端 UI，而不是普通工具类后台风。

## 一、先理解这张图到底好看在哪

这不是单纯的“粉色 UI”，而是由以下几层共同构成：

### 1. 视觉气质

- 韩系元气感
- 小红书友好型消费产品界面
- 轻 AI 工具 / 美化工具 / 情绪工具常见的“甜、软、亮、轻”风格
- 不是强功能后台，而是“看上去就愿意点进去”的内容型产品

### 2. 配色逻辑

- 主色不是一个粉色，而是多组糖果渐变并存
- 大底色接近奶白色、粉白色
- 主强调色：糖果粉、淡紫、蜜桃粉
- 辅助色：婴儿蓝、薄荷绿、奶油黄
- 高亮区通常使用渐变而不是纯色块
- 文本主色依然偏深灰，但避免整块黑色压视觉

### 3. 版式逻辑

- 顶部必须有一个很强的 Hero 区
- Hero 下方不是普通列表，而是 Bento 式功能卡片
- 功能入口短、轻、圆、可爱
- 屏幕下半部分保留内容流或案例流，增强“可浏览感”
- Bottom Tab 不重，不硬，中心按钮可以更突出

### 4. 组件气质

- 卡片圆角大，通常 20 到 32
- 阴影轻且糯，不是商务卡片阴影
- 图标偏圆润、胶囊感、贴纸感
- 按钮与标签短小、颜色轻盈、带糖果色
- 搜索框、胶囊按钮、信息卡都偏“软”

## 二、适配到你的产品时，应该怎么翻译

你的产品是“直播复盘 + 选品推荐”，本质上是偏数据产品，但界面不能做成后台。

正确做法：

- 保留甜感视觉，降低数据产品的压迫感
- 用“卡片摘要”替代“大表格”
- 用“问题 / 亮点 / 建议”三段式卡片替代复杂分析面板
- 用“趋势商品卡”替代榜单表格
- 用“复盘报告封面卡”替代冷冰冰的详情入口

一句话：

不是做企业数据看板，而是做“主播愿意天天打开的成长助手”。

## 三、Pencil 生成时必须遵守的设计规则

### 1. 画布规则

- 设备尺寸优先使用 iPhone 7 / 14 Pro 风格比例
- 推荐画布：393 x 852
- 页面外轮廓圆角明显
- 页面安全区留白充足

### 2. 页面背景

- 使用奶白、粉白、极浅粉紫背景
- 禁止纯白大平面从上铺到下
- 顶部可加非常轻的粉紫渐变光晕

建议背景：

- `#FFF9FC`
- `#FFF7FB`
- `#FDF8FF`

### 3. 主色板

- 主粉：`#FF8FC7`
- 蜜桃粉：`#FFB3C7`
- 柔紫：`#C9A7FF`
- 糖果蓝：`#9ED8FF`
- 薄荷绿：`#B8F0D2`
- 奶油黄：`#FFE7A8`
- 深文本：`#3B3341`
- 次文本：`#8C8292`

### 4. 渐变规则

常用渐变方向：左上到右下，或左到右。

推荐渐变：

- Hero 主卡：`#FFB7D5 -> #D6B8FF`
- 功能卡 A：`#FFB8C9 -> #FFC7E8`
- 功能卡 B：`#B9D7FF -> #D8C7FF`
- 功能卡 C：`#FFD7A8 -> #FFC1D6`
- 小标签：`#E8D8FF -> #FFD8EC`

### 5. 圆角与阴影

- 主 Hero 卡圆角：28 到 32
- 二级功能卡圆角：22 到 28
- 小胶囊按钮圆角：999
- 阴影要大模糊、低透明度
- 避免锐利边框

阴影建议：

- `0 12 30 rgba(255, 153, 210, 0.12)`
- `0 10 24 rgba(160, 134, 255, 0.10)`

### 6. 排版规则

- 标题必须短，2 到 8 个字最佳
- 中文标题建议粗、紧、可爱，不拉太长
- 一屏模块不超过 5 个主块
- 多用 2 列或 3 列卡片，不要堆纯列表
- 模块之间保持 12 到 18 间距

## 四、直播复盘 App 的页面翻译模板

### 1. 首页

顶部 Hero：

- 左侧放标题：“今天这场，哪里该改？”
- 副标题：“上传截图，3 分钟生成复盘建议”
- 右侧放主播角色插画占位，不要直接塞真人图

中部 Bento 功能区：

- 新建复盘
- AI 诊断报告
- 潜力选品
- 历史表现

快捷入口区：

- 问题诊断
- 流量解读
- 停留分析
- 明日动作

下方内容流：

- 最新复盘案例
- 今日推荐商品

底部导航：

- 首页
- 复盘
- 中央悬浮“上传”
- 选品
- 我的

### 2. 复盘报告页

页面不要长成后台报表，要像“可读的结论卡册”：

- 顶部总评卡：本场状态、分数、结论
- 三张核心卡：亮点、问题、建议
- 趋势图卡：实时在线曲线
- 流量来源卡：推荐 / 粉丝 / 搜索占比
- 明日行动卡：按优先级给 3 条动作

### 3. 选品推荐页

不要做排行榜网页感，要像“精选灵感池”：

- 顶部搜索 + 类目筛选胶囊
- 潜力商品横滑卡片
- 推荐理由卡
- 趋势说明卡
- “适合你测试”的原因说明

## 五、Pencil 提示词模板

把下面这段当作你后续做页面时的统一提示词骨架。

### 通用首页 Prompt

Design a mobile app home screen for a live-commerce solo creator assistant.

Visual style:
- Korean candy-style consumer app
- creamy white background
- pink, blush, lavender, baby blue gradients
- oversized rounded cards
- soft blurry shadows
- polished Xiaohongshu-style interface
- sweet, light, glossy, feminine but not childish

Layout:
- iPhone style mobile frame
- strong hero banner at the top
- bento feature cards below hero
- quick capsule actions
- content preview section
- floating bottom navigation with highlighted center action

Product context:
- this app helps solo livestream sellers review live sessions and choose products
- key modules: live review, AI diagnosis, traffic insights, product recommendations

Constraints:
- do not make it look like a dashboard
- do not use dense tables
- do not use dark mode
- use illustration placeholders instead of random characters
- keep the screen highly polished and easy to scan

### 复盘报告页 Prompt

Design a mobile live-session review report screen in a Korean candy-style AI tool aesthetic.

Must include:
- summary hero card
- highlight card
- issue diagnosis card
- tomorrow action plan card
- traffic chart card
- traffic source card

Style constraints:
- creamy white base
- pink-lavender gradients
- large rounded cards
- soft shadow
- elegant cute icons
- premium consumer app feeling

Avoid:
- enterprise BI dashboard style
- sharp borders
- table-heavy layout
- dense monochrome charts

## 六、如果你想让 Pencil 更像“会设计”，要加上这些硬约束

你给 Pencil 的提示词不能只写“做韩系粉色风”，要加上结构性要求，否则它很容易生成廉价粉色界面。

必须同时描述：

- 产品类型：直播复盘 / 选品推荐 / AI 助手
- 画面情绪：甜、轻、软、亮、消费感
- 布局骨架：Hero + Bento + Quick Actions + Content Feed + Floating Nav
- 组件风格：大圆角、渐变、胶囊按钮、软阴影
- 禁止项：后台感、表格感、深色、硬边框、过密模块

## 七、最容易翻车的地方

### 1. 只学颜色，不学结构

如果只抄粉紫色，不抄 Hero + Bento + 胶囊按钮 + 内容流，最后会很像普通模板。

### 2. 数据产品做得太重

你的产品虽然有数据，但首页不要先摆图表，要先摆“结论卡”和“动作卡”。

### 3. 插画区太随意

原图右上角视觉很强，是因为有人物焦点。你如果不能用人物图，就一定要留一个高质量插画占位区，而不是空着。

### 4. 文案过长

这种风格的 UI 要靠“短标题 + 强卡片 + 明显分组”，不能塞很多说明文字。

## 八、给你的一套可直接执行的落地方法

如果你要让 Pencil 稳定产出这类稿子，推荐这样做：

1. 先固定风格词
   `Korean candy-style`, `creamy`, `pink lavender gradients`, `oversized rounded cards`, `floating nav`, `bento mobile UI`

2. 再固定产品骨架
   `hero banner + feature cards + quick actions + report previews + floating tab bar`

3. 再固定业务模块
   `live review`, `AI diagnosis`, `traffic analysis`, `product picks`

4. 最后加禁止项
   `avoid dashboard`, `avoid tables`, `avoid corporate style`, `avoid dark mode`

## 九、建议你下一步直接做的 3 个页面

最值得先画：

1. 首页
2. 复盘报告页
3. 选品推荐页

因为这 3 页最能定产品气质，也最容易统一风格。

## 十、一句最终风格定义

这类设计不是“韩系粉色工具 App”，而是：

“带有小红书消费品气质的韩系糖果感 AI 主播成长助手界面，柔和、精致、轻盈、可浏览，重点用卡片和结论而不是表格来承载数据。”
