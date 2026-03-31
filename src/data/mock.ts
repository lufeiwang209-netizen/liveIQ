import { ProductRecommendation, ReviewMetrics, ReviewRecord } from "../types";

export const reviewHistory: ReviewRecord[] = [
  {
    id: "review-0330",
    title: "3 月 30 日晚场",
    dateLabel: "本场状态：良好",
    summary: "流量承接稳定，但停留与成交转化还有提升空间",
    status: "良好",
    score: 82,
    metrics: {
      audience: "12,860",
      onlinePeak: "1,320",
      avgStay: "42 秒",
      recommendTraffic: "54%",
    },
    actions: [
      "开场前 8 分钟先上钩子福利",
      "主推款讲解切得更早",
      "标题加入高点击关键词",
    ],
  },
  {
    id: "review-0328",
    title: "3 月 28 日午场",
    dateLabel: "本场状态：一般",
    summary: "流量进得稳，但主推款承接一般",
    status: "一般",
    score: 74,
    metrics: {
      audience: "10,240",
      onlinePeak: "980",
      avgStay: "36 秒",
      recommendTraffic: "49%",
    },
    actions: [
      "主推款前置，减少闲聊时长",
      "第一波福利更明确",
      "讲解时增加对比演示",
    ],
  },
  {
    id: "review-0326",
    title: "3 月 26 日晚场",
    dateLabel: "本场状态：预警",
    summary: "推荐流量高，但转化节奏断档",
    status: "预警",
    score: 68,
    metrics: {
      audience: "9,640",
      onlinePeak: "888",
      avgStay: "31 秒",
      recommendTraffic: "61%",
    },
    actions: [
      "每 12 分钟安排一次福利节点",
      "强化封面和标题关键词",
      "减少过长铺垫，直接进卖点",
    ],
  },
];

export const productRecommendations: ProductRecommendation[] = [
  {
    id: "prod-sunscreen",
    title: "高增长防晒喷雾，适合快节奏直播讲解",
    subtitle: "增长信号强，竞争位仍有空档",
    reason: "最近 7 天搜索热度持续抬升，且你历史场次里美妆清凉类素材留存更高。",
    category: "美妆",
    testingCount: "943 人在测",
    trendTag: "趋势强",
  },
  {
    id: "prod-wipes",
    title: "厨房去污湿巾，适合做对比演示",
    subtitle: "易出效果，适合留人和转化",
    reason: "场景表达直接，适合短讲解节奏，用户更容易看懂变化结果。",
    category: "家清",
    testingCount: "753 人在测",
    trendTag: "竞争中低",
  },
  {
    id: "prod-snacks",
    title: "低糖零食礼包，适合做组合装上车",
    subtitle: "内容空间大，适合测新品人群",
    reason: "组合装更容易承接多 SKU 讲解，同时适合做福利型成交节奏。",
    category: "零食",
    testingCount: "692 人在测",
    trendTag: "适合你",
  },
];

export const quickActions = [
  { label: "问题诊断", tint: "#EEDFFF", text: "#7D57B2" },
  { label: "流量解读", tint: "#DFF0FF", text: "#538CCB" },
  { label: "停留分析", tint: "#DFF7EA", text: "#3E9D73" },
  { label: "明日动作", tint: "#FFE7F1", text: "#D46993" },
];

export const pickCategories = [
  { label: "美妆", count: "943 人在测", colors: ["#E6D7FF", "#C7D8FF"] as const },
  { label: "家清", count: "753 人在测", colors: ["#FFD9A8", "#FFC6D8"] as const },
  { label: "零食", count: "692 人在测", colors: ["#BEEEF5", "#D5D0FF"] as const },
];

export const fakeRecognitionMetrics: ReviewMetrics = {
  audience: "12,860",
  onlinePeak: "1,320",
  avgStay: "42 秒",
  recommendTraffic: "54%",
};
