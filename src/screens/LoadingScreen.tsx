import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PageTitle, ScreenFrame } from "../components/ui";
import { palette } from "../theme";

export function LoadingScreen() {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <PageTitle title="生成报告中" subtitle="正在根据截图识别结果生成复盘建议" />
        <LinearGradient colors={["#FFF0F7", "#F3EEFF"]} style={styles.loadingCard}>
          <ActivityIndicator size="large" color={palette.pinkDeep} />
          <Text style={styles.loadingTitle}>AI 正在分析本场直播</Text>
          <Text style={styles.loadingSubtitle}>识别亮点、问题与明日动作，通常只需要几秒钟</Text>
        </LinearGradient>
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
  loadingCard: {
    marginTop: 24,
    borderRadius: 30,
    minHeight: 260,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  loadingTitle: {
    marginTop: 18,
    color: palette.text,
    fontSize: 18,
    fontWeight: "700",
  },
  loadingSubtitle: {
    marginTop: 10,
    color: palette.textSoft,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
});
