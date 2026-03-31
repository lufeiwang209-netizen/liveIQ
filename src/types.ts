export type TabKey = "home" | "report" | "picks" | "profile";

export type RouteKey =
  | "home"
  | "upload"
  | "confirm"
  | "loading"
  | "report"
  | "history"
  | "picks"
  | "product"
  | "profile";

export type ReviewMetrics = {
  audience: string;
  onlinePeak: string;
  avgStay: string;
  recommendTraffic: string;
};

export type TrafficMix = {
  recommend: number;
  followers: number;
  search: number;
};

export type ReviewRecord = {
  id: string;
  title: string;
  dateLabel: string;
  summary: string;
  status: string;
  score: number;
  metrics: ReviewMetrics;
  wins: string[];
  risks: string[];
  actions: string[];
  trafficMix: TrafficMix;
};

export type ProductRecommendation = {
  id: string;
  title: string;
  subtitle: string;
  reason: string;
  category: string;
  testingCount: string;
  trendTag: string;
  competitionTag: string;
  fitTag: string;
  entryIdeas: string[];
};

export type AppStorageSnapshot = {
  reviews: ReviewRecord[];
  savedProducts: ProductRecommendation[];
};
