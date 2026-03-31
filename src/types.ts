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

export type ReviewRecord = {
  id: string;
  title: string;
  dateLabel: string;
  summary: string;
  status: string;
  score: number;
  metrics: ReviewMetrics;
  actions: string[];
};

export type ProductRecommendation = {
  id: string;
  title: string;
  subtitle: string;
  reason: string;
  category: string;
  testingCount: string;
  trendTag: string;
};

export type AppStorageSnapshot = {
  reviews: ReviewRecord[];
  savedProducts: ProductRecommendation[];
};
