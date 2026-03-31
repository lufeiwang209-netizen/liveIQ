import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackLink,
  GradientButton,
  PageTitle,
  ScreenFrame,
} from "../components/ui";
import { palette } from "../theme";

function SmallStepCard({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <View style={styles.stepCard}>
      <Text style={[styles.stepCardTitle, { color }]}>{title}</Text>
      <Text style={styles.stepCardSubtitle}>{subtitle}</Text>
    </View>
  );
}

export function UploadScreen({
  onBack,
  onPick,
}: {
  onBack: () => void;
  onPick: () => void;
}) {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <BackLink label="返回" onPress={onBack} />
        <PageTitle title="新建复盘" subtitle="上传后台截图，AI 自动帮你看问题" />

        <LinearGradient colors={["#FFF0F7", "#F3EEFF"]} style={styles.uploadCard}>
          <LinearGradient colors={["#FFB7D5", "#D6B8FF"]} style={styles.uploadOrb} />
          <Text style={styles.uploadTitle}>上传直播数据截图</Text>
          <Text style={styles.uploadSubtitle}>支持场观、在线曲线、流量来源等后台图</Text>
          <Pressable onPress={onPick} style={styles.darkUploadButton}>
            <Text style={styles.darkUploadButtonText}>选择截图</Text>
          </Pressable>
        </LinearGradient>

        <View style={styles.stepRow}>
          <SmallStepCard title="1 上传" subtitle="截图或相册" color={palette.pinkDeep} />
          <SmallStepCard title="2 识别" subtitle="自动抽取数据" color="#7F89FF" />
          <SmallStepCard title="3 诊断" subtitle="生成行动建议" color="#53B97A" />
        </View>

        <GradientButton label="选择截图开始" onPress={onPick} />
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
  uploadCard: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: palette.border,
    minHeight: 288,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  uploadOrb: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 18,
  },
  uploadTitle: {
    color: "#3B3341",
    fontSize: 18,
    fontWeight: "700",
  },
  uploadSubtitle: {
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 10,
  },
  darkUploadButton: {
    marginTop: 16,
    backgroundColor: palette.dark,
    borderRadius: 999,
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  darkUploadButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  stepRow: {
    flexDirection: "row",
    gap: 10,
  },
  stepCard: {
    flex: 1,
    backgroundColor: palette.surface,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  stepCardTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  stepCardSubtitle: {
    marginTop: 4,
    color: palette.textSoft,
    fontSize: 12,
    fontWeight: "500",
  },
});
