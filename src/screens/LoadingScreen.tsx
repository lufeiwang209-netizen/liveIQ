import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PageTitle, ScreenFrame, WhiteCard } from "../components/ui";
import { palette } from "../theme";

const steps = ["正在抽取关键数据", "正在对比历史场次", "正在整理明日动作"];

export function LoadingScreen() {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <PageTitle title="复盘生成中" subtitle="系统正在把直播数据翻成一份能直接执行的报告" />

        <LinearGradient colors={["#FFF0F7", "#F1EDFF"]} style={styles.loadingHero}>
          <ActivityIndicator size="large" color={palette.pinkDeep} />
          <Text style={styles.loadingTitle}>AI 正在分析这场直播</Text>
          <Text style={styles.loadingBody}>通常只需要几秒钟，重点会落在停留、承接和下一场动作。</Text>
        </LinearGradient>

        {steps.map((step, index) => (
          <WhiteCard key={step} compact style={styles.stepCard}>
            <View style={styles.stepDotWrap}>
              <View style={[styles.stepDot, index === 0 && styles.stepDotActive]} />
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </WhiteCard>
        ))}
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  screenInner: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18,
    gap: 14,
  },
  loadingHero: {
    borderRadius: 34,
    minHeight: 280,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  loadingTitle: {
    marginTop: 18,
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  loadingBody: {
    marginTop: 10,
    color: palette.textSoft,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  stepDotWrap: {
    width: 28,
    alignItems: "center",
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#E6DDEC",
  },
  stepDotActive: {
    backgroundColor: palette.pinkDeep,
  },
  stepText: {
    color: palette.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
