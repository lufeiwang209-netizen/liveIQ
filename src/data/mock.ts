import { ProductRecommendation, ReviewMetrics, ReviewRecord } from "../types";

export const reviewHistory: ReviewRecord[] = [
  {
    id: "review-0330",
    title: "3 月 30 日晚场",
    dateLabel: "本场状态：良好",
    summary: "前 10 分钟进场不错，但福利点偏晚，停留没能继续抬高。",
    status: "良好",
    score: 82,
    metrics: {
      audience: "12,860",
      onlinePeak: "1,320",
      avgStay: "42 秒",
      recommendTraffic: "54%",
    },
    wins: [
      "标题关键词带来稳定推荐流量",
      "开场前 8 分钟峰值拉升明显",
      "主推款画面表达够直接，用户能快速看懂",
    ],
    risks: [
      "福利点出现偏晚，在线人数回落后才发力",
      "中段讲解偏长，平均停留没有继续往上走",
      "搜索流量占比还低，封面词还可以再收紧",
    ],
    actions: [
      "开场前 8 分钟先上钩子福利",
      "主推款讲解切得更早",
      "标题加入高点击关键词",
    ],
    trafficMix: {
      recommend: 54,
      followers: 26,
      search: 20,
    },
  },
  {
    id: "review-0328",
    title: "3 月 28 日午场",
    dateLabel: "本场状态：一般",
    summary: "进场还算稳定，但主推款承接一般，福利转化没打透。",
    status: "一般",
    score: 74,
    metrics: {
      audience: "10,240",
      onlinePeak: "980",
      avgStay: "36 秒",
      recommendTraffic: "49%",
    },
    wins: [
      "自然推荐仍在持续给量",
      "评论区互动不差，问题主要卡在承接",
      "切片素材适合后续二次利用",
    ],
    risks: [
      "主推款铺垫太久，用户进入后没立刻看到卖点",
      "福利话术不够集中，缺少强提醒",
      "转场时段空窗偏长，峰值下滑快",
    ],
    actions: [
      "主推款前置，减少闲聊时长",
      "第一波福利更明确",
      "讲解时增加对比演示",
    ],
    trafficMix: {
      recommend: 49,
      followers: 31,
      search: 20,
    },
  },
  {
    id: "review-0326",
    title: "3 月 26 日晚场",
    dateLabel: "本场状态：预警",
    summary: "推荐流量冲得很快，但内容节奏断档，成交承接没跟上。",
    status: "预警",
    score: 68,
    metrics: {
      audience: "9,640",
      onlinePeak: "888",
      avgStay: "31 秒",
      recommendTraffic: "61%",
    },
    wins: [
      "推荐流量充足，说明封面和标题方向是对的",
      "用户对开场主题有兴趣，前几分钟评论活跃",
      "产品本身不差，问题主要在节奏组织",
    ],
    risks: [
      "福利节点太散，用户没有等下去的理由",
      "卖点重复但不够集中，信息密度不稳定",
      "成交口播出现太晚，错过了最强一波推荐流量",
    ],
    actions: [
      "每 12 分钟安排一次福利节点",
      "强化封面和标题关键词",
      "减少过长铺垫，直接进卖点",
    ],
    trafficMix: {
      recommend: 61,
      followers: 22,
      search: 17,
    },
  },
];

export const productRecommendations: ProductRecommendation[] = [
  {
    id: "prod-sunscreen",
    title: "高增长防晒喷雾",
    subtitle: "增长信号强，适合快节奏讲解和前段冲峰值",
    reason: "最近 7 天搜索热度持续抬升，而且你过往直播里清凉感、美妆对比类内容停留更高。",
    category: "美妆",
    testingCount: "943 人在测",
    trendTag: "趋势强",
    competitionTag: "竞争中低",
    fitTag: "适合你",
    entryIdeas: ["首 5 分钟先做喷雾前后对比", "把清凉感和补妆速度作为第一卖点", "搭配夏季通勤场景讲解"],
  },
  {
    id: "prod-wipes",
    title: "厨房去污湿巾",
    subtitle: "变化结果非常直接，适合留人和拉转化",
    reason: "场景表达足够直接，演示结果清楚，适合你目前偏快的讲解节奏。",
    category: "家清",
    testingCount: "753 人在测",
    trendTag: "起量中",
    competitionTag: "竞争中低",
    fitTag: "好承接",
    entryIdeas: ["开场直接做油污对比", "把价格锚点放在第二句", "适合和厨房收纳一起做组合福利"],
  },
  {
    id: "prod-snacks",
    title: "低糖零食礼包",
    subtitle: "组合空间大，适合做福利型成交节奏",
    reason: "组合装更容易承接多 SKU 讲解，也适合你现在的福利型转化节奏。",
    category: "零食",
    testingCount: "692 人在测",
    trendTag: "内容强",
    competitionTag: "可测试",
    fitTag: "适合你",
    entryIdeas: ["按通勤、办公室、熬夜三个场景拆包", "用组合福利做第二波成交", "适合用连麦口播拉互动"],
  },
];

export const dashboardSignals = [
  { label: "本周复盘", value: "6 场", tint: "#FFF1F7", text: "#C7538D" },
  { label: "高频问题", value: "停留偏短", tint: "#EFF4FF", text: "#6B8EEB" },
  { label: "待测商品", value: "4 个", tint: "#EEFBF3", text: "#51B37F" },
];

export const todayFocusList = [
  {
    title: "先修开场承接",
    body: "今晚第一波福利提前到第 6 分钟，别等推荐流量回落后再发力。",
  },
  {
    title: "主推款讲得更短更狠",
    body: "用户停留一般，说明铺垫偏多。首轮讲解控制在 90 秒内更合适。",
  },
  {
    title: "优先测试清凉感、美妆对比类货",
    body: "你的历史内容里，这类素材的停留和评论反应都更好，适合继续放大。",
  },
];

export const profileIssueTags = [
  "福利点偏晚",
  "主推款承接一般",
  "标题关键词不够狠",
  "中段节奏断档",
];

export const pickCategories = [
  { label: "美妆趋势", count: "943 人在测", colors: ["#FFCADF", "#FFC7F3"] as const },
  { label: "家清起量", count: "753 人在测", colors: ["#FFD7B5", "#FFBDD8"] as const },
  { label: "零食组合", count: "692 人在测", colors: ["#CBE9FF", "#DDD1FF"] as const },
];

export const fakeRecognitionMetrics: ReviewMetrics = {
  audience: "12,860",
  onlinePeak: "1,320",
  avgStay: "42 秒",
  recommendTraffic: "54%",
};
