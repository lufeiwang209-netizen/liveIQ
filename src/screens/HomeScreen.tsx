import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { quickActions } from "../data/mock";
import { palette } from "../theme";
import { TabKey } from "../types";
import {
  BottomNav,
  GradientFeatureCard,
  ScreenFrame,
  ScreenScroll,
  SectionHeader,
} from "../components/ui";

export function HomeScreen({
  activeTab,
  onTabChange,
  onCreateReview,
  onOpenReport,
  onOpenPicks,
  onOpenHistory,
}: {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onCreateReview: () => void;
  onOpenReport: () => void;
  onOpenPicks: () => void;
  onOpenHistory: () => void;
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <LinearGradient colors={["#FFB7D5", "#D6B8FF"]} style={styles.heroCard}>
          <View style={styles.heroTextWrap}>
            <Text style={styles.heroTitle}>今天这场{"\n"}哪里该改?</Text>
            <Text style={styles.heroSubtitle}>上传截图，3 分钟生成复盘建议</Text>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillText}>LIVE REVIEW</Text>
            </View>
          </View>
          <View style={styles.heroArtWrap}>
            <View style={styles.heroArtHalo} />
            <LinearGradient colors={["#FFD5EA", "#FFF7FB"]} style={styles.heroArtCard}>
              <Text style={styles.heroArtText}>主播插画{"\n"}占位</Text>
            </LinearGradient>
          </View>
        </LinearGradient>

        <View style={styles.cardGrid}>
          <GradientFeatureCard
            title="新建复盘"
            subtitle="上传截图即生成诊断"
            colors={["#FFB8C9", "#FFC7E8"]}
            onPress={onCreateReview}
          />
          <GradientFeatureCard
            title="AI诊断"
            subtitle="识别亮点与关键问题"
            colors={["#B9D7FF", "#D8C7FF"]}
            onPress={onOpenReport}
          />
        </View>

        <View style={styles.cardGrid}>
          <GradientFeatureCard
            title="潜力选品"
            subtitle="找到正在起量但未爆的货"
            colors={["#FFD7A8", "#FFC1D6"]}
            compact
            onPress={onOpenPicks}
          />
          <GradientFeatureCard
            title="历史表现"
            subtitle="复盘结果自动沉淀成库"
            colors={["#B8F0D2", "#CBE7FF"]}
            compact
            onPress={onOpenHistory}
          />
        </View>

        <View style={styles.quickActionRow}>
          {quickActions.map((action) => (
            <View key={action.label} style={[styles.quickChip, { backgroundColor: action.tint }]}>
              <Text style={[styles.quickChipText, { color: action.text }]}>{action.label}</Text>
            </View>
          ))}
        </View>

        <SectionHeader title="发现更多" link="查看全部" />

        <Pressable style={styles.previewCard}>
          <LinearGradient colors={["#F0E3F8", "#E0E8FF"]} style={styles.previewMedia}>
            <Text style={styles.previewLabelLeft}>Before</Text>
            <Text style={styles.previewLabelRight}>After</Text>
            <View style={styles.previewDotLeft} />
            <View style={styles.previewDotRight} />
          </LinearGradient>
          <Text style={styles.previewCaption}>复盘前后，留存和峰值变化一眼看懂</Text>
        </Pressable>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    minHeight: 188,
    borderRadius: 30,
    padding: 22,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#E7A6D5",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.22,
    shadowRadius: 24,
  },
  heroTextWrap: {
    flex: 1,
    paddingRight: 12,
  },
  heroTitle: {
    color: palette.text,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: "800",
    marginTop: 4,
  },
  heroSubtitle: {
    marginTop: 8,
    color: "#5E506A",
    fontSize: 13,
    fontWeight: "500",
  },
  heroPill: {
    marginTop: 12,
    alignSelf: "flex-start",
    backgroundColor: palette.dark,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  heroPillText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  heroArtWrap: {
    width: 124,
    alignItems: "center",
    justifyContent: "center",
  },
  heroArtHalo: {
    position: "absolute",
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 10,
    borderColor: "#FFFFFF88",
  },
  heroArtCard: {
    width: 124,
    height: 160,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  heroArtText: {
    color: "#A57CCF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },
  cardGrid: {
    flexDirection: "row",
    gap: 12,
  },
  quickActionRow: {
    flexDirection: "row",
    gap: 10,
  },
  quickChip: {
    flex: 1,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  quickChipText: {
    fontSize: 13,
    fontWeight: "600",
  },
  previewCard: {
    backgroundColor: palette.surface,
    borderRadius: 28,
    padding: 12,
    shadowColor: "#EACEEA",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  previewMedia: {
    height: 112,
    borderRadius: 22,
    position: "relative",
    overflow: "hidden",
  },
  previewLabelLeft: {
    position: "absolute",
    left: 14,
    top: 12,
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    zIndex: 1,
  },
  previewLabelRight: {
    position: "absolute",
    right: 14,
    top: 12,
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    zIndex: 1,
  },
  previewDotLeft: {
    position: "absolute",
    left: 28,
    top: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFFFFF66",
  },
  previewDotRight: {
    position: "absolute",
    right: 28,
    top: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFFFFF66",
  },
  previewCaption: {
    marginTop: 12,
    color: "#3B3341",
    fontSize: 15,
    fontWeight: "600",
  },
});
