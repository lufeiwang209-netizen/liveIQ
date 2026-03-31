import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  BottomNav,
  PageTitle,
  ScreenFrame,
  ScreenScroll,
} from "../components/ui";
import { palette } from "../theme";
import { ReviewRecord, TabKey } from "../types";

export function HistoryScreen({
  reviews,
  activeTab,
  onTabChange,
  onSelect,
}: {
  reviews: ReviewRecord[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onSelect: (review: ReviewRecord) => void;
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <PageTitle title="历史复盘" />
        <View style={styles.filterRow}>
          <View style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>全部</Text>
          </View>
          <View style={styles.filterChip}>
            <Text style={styles.filterChipText}>近 7 天</Text>
          </View>
        </View>

        {reviews.map((review, index) => (
          <Pressable key={review.id} onPress={() => onSelect(review)} style={styles.historyCardWrap}>
            <View style={[styles.historyCard, index === 2 && styles.historyCardGradient]}>
              <Text style={styles.historyCardTitle}>{review.title}</Text>
              <Text style={styles.historyCardSummary}>结论：{review.summary}</Text>
            </View>
          </Pressable>
        ))}
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: "row",
    gap: 10,
  },
  filterChip: {
    flex: 1,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  filterChipActive: {
    backgroundColor: "#FFD5E8",
  },
  filterChipText: {
    color: palette.textSoft,
    fontSize: 13,
    fontWeight: "600",
  },
  filterChipTextActive: {
    color: palette.pinkDeep,
    fontWeight: "700",
  },
  historyCardWrap: {
    marginBottom: 12,
  },
  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 14,
    minHeight: 126,
    justifyContent: "center",
  },
  historyCardGradient: {
    backgroundColor: "#FFF4FA",
  },
  historyCardTitle: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "700",
  },
  historyCardSummary: {
    marginTop: 10,
    color: "#6E6476",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
});
