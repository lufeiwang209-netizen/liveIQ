import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomNav,
  CardTitle,
  PageTitle,
  SavedChip,
  ScreenFrame,
  ScreenScroll,
  WhiteCard,
} from "../components/ui";
import { TabKey, ReviewRecord } from "../types";

function DiagnosisMiniCard({
  title,
  titleColor,
  text,
}: {
  title: string;
  titleColor: string;
  text: string;
}) {
  return (
    <View style={styles.miniCard}>
      <Text style={[styles.miniCardTitle, { color: titleColor }]}>{title}</Text>
      <Text style={styles.miniCardText}>{text}</Text>
    </View>
  );
}

function LineChart() {
  return (
    <View style={styles.chartArea}>
      <View style={styles.chartLinePurple} />
      <View style={styles.chartLinePink} />
    </View>
  );
}

export function ReportScreen({
  review,
  activeTab,
  onTabChange,
}: {
  review: ReviewRecord;
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <View style={styles.headerRow}>
          <PageTitle title="复盘报告" />
          <SavedChip label="已保存" />
        </View>

        <LinearGradient colors={["#FFB7D5", "#D8C3FF"]} style={styles.summaryCard}>
          <Text style={styles.summaryMeta}>{review.dateLabel}</Text>
          <Text style={styles.summaryScore}>{review.score}</Text>
          <Text style={styles.summaryText}>{review.summary}</Text>
        </LinearGradient>

        <View style={styles.diagnosisRow}>
          <DiagnosisMiniCard title="亮点" titleColor="#FF73A6" text="开场 10 分钟峰值冲高" />
          <DiagnosisMiniCard title="问题" titleColor="#7F89FF" text="平均停留略短" />
          <DiagnosisMiniCard title="建议" titleColor="#5ABF8A" text="福利节奏提前" />
        </View>

        <WhiteCard>
          <CardTitle>实时在线曲线</CardTitle>
          <LineChart />
        </WhiteCard>

        <WhiteCard compact>
          <CardTitle>流量来源结构</CardTitle>
          <View style={styles.progressBar}>
            <View style={[styles.progressSeg, { backgroundColor: "#FF9CC8", flex: 0.54 }]} />
            <View style={[styles.progressSeg, { backgroundColor: "#B8D2FF", flex: 0.26 }]} />
            <View style={[styles.progressSeg, { backgroundColor: "#C8F0D9", flex: 0.2 }]} />
          </View>
          <View style={styles.legendRow}>
            <Text style={[styles.legendText, { color: "#D46993" }]}>推荐 54%</Text>
            <Text style={[styles.legendText, { color: "#6B8EEB" }]}>粉丝 26%</Text>
            <Text style={[styles.legendText, { color: "#53B97A" }]}>搜索 20%</Text>
          </View>
        </WhiteCard>

        <LinearGradient colors={["#FFF0F7", "#F3EEFF"]} style={styles.actionCard}>
          <CardTitle>明日行动</CardTitle>
          {review.actions.map((action, index) => (
            <Text key={action} style={styles.actionText}>
              {index + 1}. {action}
            </Text>
          ))}
        </LinearGradient>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryCard: {
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  summaryMeta: {
    color: "#FFFFFFCC",
    fontSize: 14,
    fontWeight: "700",
  },
  summaryScore: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "800",
    marginTop: 6,
  },
  summaryText: {
    color: "#FFF8FF",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  diagnosisRow: {
    flexDirection: "row",
    gap: 10,
  },
  miniCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 14,
    shadowColor: "#EACEEA",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 2,
  },
  miniCardTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  miniCardText: {
    marginTop: 8,
    color: "#3B3341",
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "700",
  },
  chartArea: {
    height: 76,
    marginTop: 12,
    position: "relative",
  },
  chartLinePurple: {
    position: "absolute",
    left: 18,
    right: 110,
    bottom: 24,
    height: 3,
    borderRadius: 999,
    backgroundColor: "#B6A5F3",
    transform: [{ rotate: "-26deg" }],
  },
  chartLinePink: {
    position: "absolute",
    left: 150,
    right: 22,
    bottom: 24,
    height: 3,
    borderRadius: 999,
    backgroundColor: "#F59BC8",
    transform: [{ rotate: "18deg" }],
  },
  progressBar: {
    height: 14,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "#F6EEF6",
    flexDirection: "row",
    marginTop: 12,
  },
  progressSeg: {
    height: "100%",
  },
  legendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  legendText: {
    fontSize: 11,
    fontWeight: "700",
  },
  actionCard: {
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 6,
  },
  actionText: {
    color: "#4B4155",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "600",
  },
});
