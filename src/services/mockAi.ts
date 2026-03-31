import { reviewHistory } from "../data/mock";
import { ReviewMetrics, ReviewRecord } from "../types";

type ReviewInput = {
  assetUri: string | null;
  notes?: string;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function recognizeMetrics(_: ReviewInput): Promise<ReviewMetrics> {
  await wait(450);
  return reviewHistory[0].metrics;
}

export async function generateReviewReport(input: ReviewInput): Promise<ReviewRecord> {
  await wait(700);
  const base = reviewHistory[0];
  const now = new Date();
  const title = `${now.getMonth() + 1} 月 ${now.getDate()} 日新复盘`;
  return {
    ...base,
    id: `review-${now.getTime()}`,
    title,
    summary: input.assetUri
      ? base.summary
      : "已根据默认样例数据生成报告，可继续接入 OCR 与 AI 接口。",
    actions: input.notes
      ? [...base.actions.slice(0, 2), `根据补充说明优化：${input.notes}`]
      : base.actions,
  };
}
