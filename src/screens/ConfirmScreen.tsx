import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CardTitle, GradientButton, NoteText, PageTitle, ScreenFrame, TagPill, WhiteCard } from "../components/ui";
import { palette } from "../theme";
import { ReviewMetrics } from "../types";

function MetricCard({
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
    <View style={[styles.metricCard, { backgroundColor: tint }]}>
      <Text style={[styles.metricLabel, { color }]}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

export function ConfirmScreen({
  metrics,
  previewUri,
  onBack,
  onGenerate,
}: {
  metrics: ReviewMetrics;
  previewUri: string | null;
  onBack: () => void;
  onGenerate: () => void;
}) {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <PageTitle title="识别确认" subtitle="先确认系统读到的数据，再生成完整复盘" />

        <LinearGradient colors={["#FFF1F8", "#F0EDFF"]} style={styles.previewCard}>
          {previewUri ? (
            <Image source={{ uri: previewUri }} style={styles.previewImage} resizeMode="cover" />
          ) : (
            <View style={styles.previewPlaceholder}>
              <Text style={styles.previewPlaceholderTitle}>示例后台截图</Text>
              <Text style={styles.previewPlaceholderBody}>当前用的是演示数据，也可以返回重新选择真实截图。</Text>
            </View>
          )}
          <View style={styles.previewBadgeRow}>
            <TagPill text="已识别完成" tint="#FFFFFFD4" color={palette.pinkDeep} />
          </View>
        </LinearGradient>

        <View style={styles.metricGrid}>
          <MetricCard label="场观人数" value={metrics.audience} tint="#FFF3F8" color={palette.pinkDeep} />
          <MetricCard label="在线峰值" value={metrics.onlinePeak} tint="#EFF4FF" color="#6B8EEB" />
          <MetricCard label="平均停留" value={metrics.avgStay} tint="#EFFAF4" color="#4EAF7C" />
          <MetricCard label="推荐流量" value={metrics.recommendTraffic} tint="#FFF7E7" color="#D39A3A" />
        </View>

        <WhiteCard>
          <CardTitle>系统识别到的重点</CardTitle>
          <NoteText>
            1. 推荐流量占比还是主力{"\n"}
            2. 停留时长还有明显提升空间{"\n"}
            3. 这场更适合优先看开场承接和福利节奏
          </NoteText>
        </WhiteCard>

        <WhiteCard style={styles.noteCard}>
          <CardTitle>本场补充说明</CardTitle>
          <NoteText>主推商品：防晒喷雾{"\n"}本场福利：第二件半价{"\n"}目标：提高停留和首轮转化</NoteText>
        </WhiteCard>

        <View style={styles.actionRow}>
          <Pressable onPress={onBack} style={styles.ghostButton}>
            <Text style={styles.ghostButtonText}>返回修改</Text>
          </Pressable>
          <GradientButton label="生成复盘报告" onPress={onGenerate} small />
        </View>
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  screenInner: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18,
    gap: 16,
  },
  previewCard: {
    borderRadius: 32,
    padding: 14,
    overflow: "hidden",
  },
  previewImage: {
    height: 168,
    borderRadius: 24,
    backgroundColor: "#F3E8F3",
  },
  previewPlaceholder: {
    height: 168,
    borderRadius: 24,
    backgroundColor: "#FFFFFFB8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,
  },
  previewPlaceholderTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: "800",
  },
  previewPlaceholderBody: {
    marginTop: 10,
    color: palette.textSoft,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  previewBadgeRow: {
    marginTop: 12,
    flexDirection: "row",
  },
  metricGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  metricCard: {
    width: "48.5%",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  metricValue: {
    marginTop: 8,
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  noteCard: {
    backgroundColor: "#FFF9FC",
    borderWidth: 1,
    borderColor: palette.border,
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
  },
  ghostButton: {
    flex: 1,
    height: 54,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: palette.border,
    alignItems: "center",
    justifyContent: "center",
  },
  ghostButtonText: {
    color: palette.textSoft,
    fontSize: 14,
    fontWeight: "700",
  },
});
