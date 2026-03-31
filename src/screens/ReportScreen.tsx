import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomNav,
  CardTitle,
  SavedChip,
  ScreenFrame,
  ScreenScroll,
  SectionHeader,
  TagPill,
  WhiteCard,
} from "../components/ui";
import { palette } from "../theme";
import { ReviewRecord, TabKey } from "../types";

function BreakdownCard({
  title,
  items,
  tint,
  color,
}: {
  title: string;
  items: string[];
  tint: string;
  color: string;
}) {
  return (
    <View style={[styles.breakdownCard, { backgroundColor: tint }]}>
      <Text style={[styles.breakdownTitle, { color }]}>{title}</Text>
      {items.map((item) => (
        <Text key={item} style={styles.breakdownText}>
          {item}
        </Text>
      ))}
    </View>
  );
}

function CurveChart() {
  return (
    <View style={styles.chartWrap}>
      <View style={styles.chartBaseLine} />
      <View style={styles.chartLineOne} />
      <View style={styles.chartLineTwo} />
      <View style={[styles.chartDot, styles.chartDotLeft]} />
      <View style={[styles.chartDot, styles.chartDotCenter]} />
      <View style={[styles.chartDot, styles.chartDotRight]} />
    </View>
  );
}

export function ReportScreen({
  review,
  activeTab,
  onTabChange,
  onCreateReview,
}: {
  review: ReviewRecord;
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onCreateReview: () => void;
}) {
  const wins = review.wins ?? [];
  const risks = review.risks ?? [];
  const trafficMix = review.trafficMix ?? { recommend: 54, followers: 26, search: 20 };

  return (
    <ScreenFrame>
      <ScreenScroll>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.pageTitle}>复盘报告</Text>
            <Text style={styles.pageSubtitle}>{review.title}</Text>
          </View>
          <SavedChip label="已归档" />
        </View>

        <LinearGradient colors={["#FFBDD9", "#D3C8FF"]} style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <TagPill text={review.dateLabel} tint="#FFFFFF33" color="#FFFFFF" />
            <Text style={styles.heroStatus}>{review.status}</Text>
          </View>
          <Text style={styles.heroScore}>{review.score}</Text>
          <Text style={styles.heroSummary}>{review.summary}</Text>
          <View style={styles.metricRow}>
            <View style={styles.metricBubble}>
              <Text style={styles.metricBubbleLabel}>场观</Text>
              <Text style={styles.metricBubbleValue}>{review.metrics.audience}</Text>
            </View>
            <View style={styles.metricBubble}>
              <Text style={styles.metricBubbleLabel}>在线峰值</Text>
              <Text style={styles.metricBubbleValue}>{review.metrics.onlinePeak}</Text>
            </View>
            <View style={styles.metricBubble}>
              <Text style={styles.metricBubbleLabel}>平均停留</Text>
              <Text style={styles.metricBubbleValue}>{review.metrics.avgStay}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.breakdownRow}>
          <BreakdownCard title="亮点" items={wins.slice(0, 2)} tint="#FFF1F7" color={palette.pinkDeep} />
          <BreakdownCard title="问题" items={risks.slice(0, 2)} tint="#EEF4FF" color="#6B8EEB" />
        </View>

        <WhiteCard>
          <CardTitle>在线走势判断</CardTitle>
          <Text style={styles.cardBody}>开场冲得不错，但中段没有第二次拉升，说明福利节奏和主推承接还可以更紧一点。</Text>
          <CurveChart />
        </WhiteCard>

        <WhiteCard>
          <SectionHeader title="流量来源结构" link={review.metrics.recommendTraffic} />
          <View style={styles.mixBar}>
            <View style={[styles.mixSegment, { flex: trafficMix.recommend, backgroundColor: "#FF9FC9" }]} />
            <View style={[styles.mixSegment, { flex: trafficMix.followers, backgroundColor: "#A9C8FF" }]} />
            <View style={[styles.mixSegment, { flex: trafficMix.search, backgroundColor: "#92DAB6" }]} />
          </View>
          <View style={styles.mixLegendRow}>
            <Text style={[styles.mixLegend, { color: palette.pinkDeep }]}>推荐 {trafficMix.recommend}%</Text>
            <Text style={[styles.mixLegend, { color: "#6B8EEB" }]}>粉丝 {trafficMix.followers}%</Text>
            <Text style={[styles.mixLegend, { color: "#51B37F" }]}>搜索 {trafficMix.search}%</Text>
          </View>
        </WhiteCard>

        <LinearGradient colors={["#FFF3F8", "#F6F1FF"]} style={styles.actionCard}>
          <CardTitle>明日动作</CardTitle>
          {review.actions.map((action, index) => (
            <View key={action} style={styles.actionRow}>
              <View style={styles.actionIndex}>
                <Text style={styles.actionIndexText}>{index + 1}</Text>
              </View>
              <Text style={styles.actionText}>{action}</Text>
            </View>
          ))}
        </LinearGradient>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} onPrimaryAction={onCreateReview} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    color: palette.text,
    fontSize: 29,
    fontWeight: "800",
  },
  pageSubtitle: {
    marginTop: 4,
    color: palette.textSoft,
    fontSize: 13,
    fontWeight: "500",
  },
  heroCard: {
    borderRadius: 34,
    padding: 18,
  },
  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroStatus: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  heroScore: {
    marginTop: 12,
    color: "#FFFFFF",
    fontSize: 54,
    lineHeight: 58,
    fontWeight: "800",
  },
  heroSummary: {
    marginTop: 6,
    color: "#FFF9FD",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  metricRow: {
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
  },
  metricBubble: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#FFFFFF2D",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  metricBubbleLabel: {
    color: "#FFF7FB",
    fontSize: 11,
    fontWeight: "700",
  },
  metricBubbleValue: {
    marginTop: 6,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  breakdownRow: {
    flexDirection: "row",
    gap: 12,
  },
  breakdownCard: {
    flex: 1,
    borderRadius: 26,
    padding: 16,
    gap: 8,
  },
  breakdownTitle: {
    fontSize: 15,
    fontWeight: "800",
  },
  breakdownText: {
    color: palette.text,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
  cardBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  chartWrap: {
    height: 116,
    marginTop: 18,
    borderRadius: 24,
    backgroundColor: "#FFF8FC",
    overflow: "hidden",
  },
  chartBaseLine: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 22,
    height: 2,
    backgroundColor: "#F0E3ED",
  },
  chartLineOne: {
    position: "absolute",
    left: 28,
    width: 152,
    bottom: 52,
    height: 4,
    borderRadius: 999,
    backgroundColor: "#F79BC8",
    transform: [{ rotate: "-18deg" }],
  },
  chartLineTwo: {
    position: "absolute",
    right: 26,
    width: 138,
    bottom: 48,
    height: 4,
    borderRadius: 999,
    backgroundColor: "#B5A5F6",
    transform: [{ rotate: "14deg" }],
  },
  chartDot: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
  },
  chartDotLeft: {
    left: 74,
    bottom: 52,
    borderColor: "#F79BC8",
  },
  chartDotCenter: {
    left: 166,
    bottom: 86,
    borderColor: "#F79BC8",
  },
  chartDotRight: {
    right: 86,
    bottom: 66,
    borderColor: "#B5A5F6",
  },
  mixBar: {
    marginTop: 14,
    height: 16,
    borderRadius: 999,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#F6EEF4",
  },
  mixSegment: {
    height: "100%",
  },
  mixLegendRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mixLegend: {
    fontSize: 12,
    fontWeight: "700",
  },
  actionCard: {
    borderRadius: 32,
    padding: 16,
    gap: 12,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  actionIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIndexText: {
    color: palette.pinkDeep,
    fontSize: 13,
    fontWeight: "800",
  },
  actionText: {
    flex: 1,
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
});
