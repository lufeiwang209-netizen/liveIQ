import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  CardTitle,
  GradientButton,
  NoteText,
  PageTitle,
  ScreenFrame,
} from "../components/ui";
import { palette } from "../theme";
import { ReviewMetrics } from "../types";

function MetricGridCard({
  label,
  value,
  tint,
  color,
}: {
  label: string;
  value: string;
  tint: string;
  color: string;
}) {
  return (
    <View style={[styles.metricCell, { backgroundColor: tint }]}>
      <Text style={[styles.metricLabel, { color }]}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

export function ConfirmScreen({
  metrics,
  hasPicked,
  onBack,
  onGenerate,
}: {
  metrics: ReviewMetrics;
  hasPicked: boolean;
  onBack: () => void;
  onGenerate: () => void;
}) {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <PageTitle title="识别确认" subtitle="AI 已识别到这些关键数据" />

        <View style={styles.metricsCard}>
          <MetricGridCard label="场观人数" value={metrics.audience} tint={palette.chipPink} color={palette.pinkDeep} />
          <MetricGridCard label="在线峰值" value={metrics.onlinePeak} tint={palette.chipBlue} color="#6B8EEB" />
          <MetricGridCard label="平均停留" value={metrics.avgStay} tint={palette.chipGreen} color="#53B97A" />
          <MetricGridCard label="推荐流量" value={metrics.recommendTraffic} tint={palette.chipYellow} color="#E2A141" />
        </View>

        <LinearGradient colors={["#FFF0F7", "#F3EEFF"]} style={styles.noteCard}>
          <CardTitle>补充说明</CardTitle>
          <NoteText>
            {hasPicked ? "已选择截图，准备生成报告" : "主推商品：防晒喷雾"}{"\n"}
            本场福利：第二件半价
          </NoteText>
        </LinearGradient>

        <View style={styles.dualButtonRow}>
          <Pressable onPress={onBack} style={styles.ghostButton}>
            <Text style={styles.ghostButtonText}>返回修改</Text>
          </Pressable>
          <GradientButton label="生成报告" onPress={onGenerate} small />
        </View>
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  screenInner: {
    flex: 1,
    paddingTop: 6,
    paddingHorizontal: 18,
    paddingBottom: 18,
    gap: 16,
  },
  metricsCard: {
    backgroundColor: palette.surface,
    borderRadius: 28,
    padding: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  metricCell: {
    width: "48.5%",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  metricValue: {
    marginTop: 4,
    color: "#3B3341",
    fontSize: 20,
    fontWeight: "800",
  },
  noteCard: {
    borderRadius: 28,
    padding: 16,
  },
  dualButtonRow: {
    flexDirection: "row",
    gap: 10,
  },
  ghostButton: {
    flex: 1,
    height: 54,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  ghostButtonText: {
    color: palette.textSoft,
    fontSize: 15,
    fontWeight: "700",
  },
});
