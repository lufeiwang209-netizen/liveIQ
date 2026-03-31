import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BottomNav, PageTitle, ScreenFrame, ScreenScroll, TagPill, WhiteCard } from "../components/ui";
import { palette } from "../theme";
import { ReviewRecord, TabKey } from "../types";

export function HistoryScreen({
  reviews,
  activeTab,
  onTabChange,
  onSelect,
  onCreateReview,
}: {
  reviews: ReviewRecord[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onSelect: (review: ReviewRecord) => void;
  onCreateReview: () => void;
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <PageTitle title="历史复盘" subtitle="每一场都会沉淀成你的直播增长资产" />

        <WhiteCard style={styles.summaryCard}>
          <View style={styles.summaryBlock}>
            <Text style={styles.summaryLabel}>已归档场次</Text>
            <Text style={styles.summaryValue}>{reviews.length}</Text>
          </View>
          <View style={styles.summaryBlock}>
            <Text style={styles.summaryLabel}>最近状态</Text>
            <Text style={styles.summaryValueSmall}>{reviews[0]?.status ?? "良好"}</Text>
          </View>
        </WhiteCard>

        <View style={styles.filterRow}>
          <TagPill text="全部" tint="#FFEAF3" color={palette.pinkDeep} />
          <TagPill text="近 7 天" tint="#FFFFFF" color={palette.textSoft} />
          <TagPill text="需重点看" tint="#FFFFFF" color={palette.textSoft} />
        </View>

        {reviews.map((review) => (
          <Pressable key={review.id} onPress={() => onSelect(review)} style={styles.historyCard}>
            <View style={styles.historyTopRow}>
              <View>
                <Text style={styles.historyTitle}>{review.title}</Text>
                <Text style={styles.historyStatus}>{review.dateLabel}</Text>
              </View>
              <View style={styles.scoreWrap}>
                <Text style={styles.scoreText}>{review.score}</Text>
              </View>
            </View>
            <Text style={styles.historySummary}>{review.summary}</Text>
            <View style={styles.historyFooter}>
              <Text style={styles.historyMetric}>场观 {review.metrics.audience}</Text>
              <Text style={styles.historyMetric}>停留 {review.metrics.avgStay}</Text>
              <Text style={styles.historyMetric}>推荐 {review.metrics.recommendTraffic}</Text>
            </View>
          </Pressable>
        ))}
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} onPrimaryAction={onCreateReview} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    flexDirection: "row",
    gap: 12,
  },
  summaryBlock: {
    flex: 1,
  },
  summaryLabel: {
    color: palette.textSoft,
    fontSize: 12,
    fontWeight: "600",
  },
  summaryValue: {
    marginTop: 8,
    color: palette.text,
    fontSize: 34,
    fontWeight: "800",
  },
  summaryValueSmall: {
    marginTop: 12,
    color: palette.pinkDeep,
    fontSize: 20,
    fontWeight: "800",
  },
  filterRow: {
    flexDirection: "row",
    gap: 10,
  },
  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 16,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 3,
  },
  historyTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  historyTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: "800",
  },
  historyStatus: {
    marginTop: 6,
    color: palette.textSoft,
    fontSize: 12,
    fontWeight: "600",
  },
  scoreWrap: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: "#FFF1F7",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    color: palette.pinkDeep,
    fontSize: 24,
    fontWeight: "800",
  },
  historySummary: {
    marginTop: 14,
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  historyFooter: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  historyMetric: {
    color: palette.textSoft,
    fontSize: 12,
    fontWeight: "700",
  },
});
