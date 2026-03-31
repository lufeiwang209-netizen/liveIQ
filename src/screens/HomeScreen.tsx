import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { dashboardSignals, todayFocusList } from "../data/mock";
import { palette } from "../theme";
import { TabKey } from "../types";
import {
  BottomNav,
  ScreenFrame,
  ScreenScroll,
  SearchBar,
  SectionHeader,
  TagPill,
  WhiteCard,
} from "../components/ui";

function FeatureCard({
  title,
  subtitle,
  colors,
  onPress,
}: {
  title: string;
  subtitle: string;
  colors: readonly [string, string];
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.featureWrap}>
      <LinearGradient colors={[colors[0], colors[1]]} style={styles.featureCard}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureSubtitle}>{subtitle}</Text>
      </LinearGradient>
    </Pressable>
  );
}

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
  const [search, setSearch] = useState("");

  return (
    <ScreenFrame>
      <ScreenScroll>
        <SearchBar value={search} onChangeText={setSearch} placeholder="搜索问题、商品或历史复盘" />

        <LinearGradient colors={["#FFBCD8", "#DCC8FF"]} style={styles.heroCard}>
          <View style={styles.heroBody}>
            <TagPill text="LIVEIQ 今日重点" tint="#2C2132" color="#FFFFFF" />
            <Text style={styles.heroTitle}>今晚这场，先把{"\n"}停留和承接拉起来</Text>
            <Text style={styles.heroSubtitle}>
              上传直播后台截图，几分钟拿到本场结论、问题原因和明天动作。
            </Text>
            <Pressable onPress={onCreateReview} style={styles.heroButton}>
              <Text style={styles.heroButtonText}>马上新建复盘</Text>
            </Pressable>
          </View>
          <View style={styles.heroArt}>
            <View style={styles.heroRingOuter} />
            <View style={styles.heroRingInner} />
            <LinearGradient colors={["#FFF6FB", "#FFE3F0"]} style={styles.heroScoreBubble}>
              <Text style={styles.heroScoreLabel}>建议优先级</Text>
              <Text style={styles.heroScoreValue}>A</Text>
            </LinearGradient>
          </View>
        </LinearGradient>

        <View style={styles.featureRow}>
          <FeatureCard
            title="直播复盘"
            subtitle="截图即看问题，适合下播后立刻复盘"
            colors={["#FFC4D8", "#FFE1F0"]}
            onPress={onCreateReview}
          />
          <FeatureCard
            title="潜力选品"
            subtitle="找正在起量但还没卷爆的货"
            colors={["#C9D9FF", "#E5D4FF"]}
            onPress={onOpenPicks}
          />
        </View>

        <View style={styles.signalRow}>
          {dashboardSignals.map((signal) => (
            <View key={signal.label} style={[styles.signalCard, { backgroundColor: signal.tint }]}>
              <Text style={[styles.signalLabel, { color: signal.text }]}>{signal.label}</Text>
              <Text style={styles.signalValue}>{signal.value}</Text>
            </View>
          ))}
        </View>

        <SectionHeader title="今天该盯什么" link="看完整建议" />

        {todayFocusList.map((item, index) => (
          <Pressable
            key={item.title}
            onPress={index === 0 ? onOpenReport : onOpenHistory}
            style={styles.focusCard}
          >
            <View style={styles.focusIndex}>
              <Text style={styles.focusIndexText}>0{index + 1}</Text>
            </View>
            <View style={styles.focusBody}>
              <Text style={styles.focusTitle}>{item.title}</Text>
              <Text style={styles.focusText}>{item.body}</Text>
            </View>
          </Pressable>
        ))}

        <WhiteCard style={styles.moreCard}>
          <View style={styles.moreHeader}>
            <Text style={styles.moreTitle}>历史复盘资产</Text>
            <Pressable onPress={onOpenHistory}>
              <Text style={styles.moreLink}>查看全部</Text>
            </Pressable>
          </View>
          <Text style={styles.moreBody}>
            你的每场直播都会沉淀成历史记录，后面看趋势、看问题复发、看选品方向都会更快。
          </Text>
        </WhiteCard>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} onPrimaryAction={onCreateReview} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    minHeight: 224,
    borderRadius: 32,
    padding: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#E6A3C3",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.28,
    shadowRadius: 28,
  },
  heroBody: {
    flex: 1,
    paddingRight: 10,
  },
  heroTitle: {
    marginTop: 14,
    color: "#2C2132",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#5F5068",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  heroButton: {
    marginTop: 16,
    alignSelf: "flex-start",
    backgroundColor: "#2C2132",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  heroButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  heroArt: {
    width: 118,
    alignItems: "center",
    justifyContent: "center",
  },
  heroRingOuter: {
    position: "absolute",
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: "#FFFFFF4A",
  },
  heroRingInner: {
    position: "absolute",
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#FFFFFF75",
  },
  heroScoreBubble: {
    width: 94,
    height: 118,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  heroScoreLabel: {
    color: palette.textSoft,
    fontSize: 11,
    fontWeight: "700",
  },
  heroScoreValue: {
    marginTop: 8,
    color: palette.pinkDeep,
    fontSize: 44,
    lineHeight: 48,
    fontWeight: "800",
  },
  featureRow: {
    flexDirection: "row",
    gap: 12,
  },
  featureWrap: {
    flex: 1,
  },
  featureCard: {
    minHeight: 126,
    borderRadius: 26,
    padding: 16,
  },
  featureTitle: {
    color: "#2C2132",
    fontSize: 18,
    fontWeight: "800",
  },
  featureSubtitle: {
    marginTop: 10,
    color: "#5D5465",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  signalRow: {
    flexDirection: "row",
    gap: 10,
  },
  signalCard: {
    flex: 1,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  signalLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  signalValue: {
    marginTop: 8,
    color: palette.text,
    fontSize: 20,
    fontWeight: "800",
  },
  focusCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 16,
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 3,
  },
  focusIndex: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "#FFF0F6",
    alignItems: "center",
    justifyContent: "center",
  },
  focusIndexText: {
    color: palette.pinkDeep,
    fontSize: 16,
    fontWeight: "800",
  },
  focusBody: {
    flex: 1,
  },
  focusTitle: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  focusText: {
    marginTop: 8,
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  moreCard: {
    backgroundColor: "#FFF8FC",
    borderWidth: 1,
    borderColor: palette.border,
  },
  moreHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreTitle: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  moreLink: {
    color: palette.textSoft,
    fontSize: 13,
    fontWeight: "700",
  },
  moreBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
});
