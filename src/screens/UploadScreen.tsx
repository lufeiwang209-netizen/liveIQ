import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BackLink, GradientButton, PageTitle, ScreenFrame, TagPill, WhiteCard } from "../components/ui";
import { palette } from "../theme";

function TipCard({
  step,
  title,
  body,
  tint,
}: {
  step: string;
  title: string;
  body: string;
  tint: string;
}) {
  return (
    <View style={[styles.tipCard, { backgroundColor: tint }]}>
      <Text style={styles.tipStep}>{step}</Text>
      <Text style={styles.tipTitle}>{title}</Text>
      <Text style={styles.tipBody}>{body}</Text>
    </View>
  );
}

export function UploadScreen({
  onBack,
  onPick,
  onUseDemo,
}: {
  onBack: () => void;
  onPick: () => void;
  onUseDemo: () => void;
}) {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <BackLink label="返回首页" onPress={onBack} />
        <PageTitle title="新建复盘" subtitle="上传直播后台截图，系统会自动抽取关键指标" />

        <LinearGradient colors={["#FFF0F7", "#F5ECFF"]} style={styles.uploadHero}>
          <View style={styles.uploadHaloOuter} />
          <View style={styles.uploadHaloInner} />
          <View style={styles.uploadCard}>
            <Text style={styles.uploadCardTitle}>把截图丢进来</Text>
            <Text style={styles.uploadCardBody}>支持场观、在线峰值、停留、来源结构这些后台图。</Text>
          </View>
          <View style={styles.uploadTagRow}>
            <TagPill text="场观" tint="#FFE6F0" color={palette.pinkDeep} />
            <TagPill text="停留" tint="#EAF3FF" color="#6B8EEB" />
            <TagPill text="峰值" tint="#EDF9F2" color="#51B37F" />
          </View>
        </LinearGradient>

        <View style={styles.tipRow}>
          <TipCard
            step="01"
            title="上传截图"
            body="优先传完整后台页，不要只截一小块。"
            tint="#FFF4F8"
          />
          <TipCard
            step="02"
            title="自动识别"
            body="系统会先帮你读数，再让你确认。"
            tint="#EFF4FF"
          />
          <TipCard
            step="03"
            title="生成动作"
            body="最后直接给你下一场该怎么改。"
            tint="#EFFAF4"
          />
        </View>

        <WhiteCard>
          <Text style={styles.notesTitle}>建议上传内容</Text>
          <Text style={styles.notesBody}>1. 本场直播数据概览{"\n"}2. 在线峰值或在线趋势图{"\n"}3. 流量来源结构截图</Text>
        </WhiteCard>

        <GradientButton label="选择截图开始" onPress={onPick} />

        <Pressable onPress={onUseDemo} style={styles.demoButton}>
          <Text style={styles.demoButtonText}>先用示例数据试一遍</Text>
        </Pressable>
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
  uploadHero: {
    minHeight: 286,
    borderRadius: 34,
    overflow: "hidden",
    paddingHorizontal: 18,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadHaloOuter: {
    position: "absolute",
    width: 196,
    height: 196,
    borderRadius: 98,
    backgroundColor: "#FFFFFF55",
  },
  uploadHaloInner: {
    position: "absolute",
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: "#FFFFFF88",
  },
  uploadCard: {
    width: "100%",
    borderRadius: 28,
    backgroundColor: "#FFFFFFD9",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  uploadCardTitle: {
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  uploadCardBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  uploadTagRow: {
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
  },
  tipRow: {
    flexDirection: "row",
    gap: 10,
  },
  tipCard: {
    flex: 1,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  tipStep: {
    color: palette.textMuted,
    fontSize: 11,
    fontWeight: "700",
  },
  tipTitle: {
    marginTop: 8,
    color: palette.text,
    fontSize: 14,
    fontWeight: "800",
  },
  tipBody: {
    marginTop: 6,
    color: palette.textSoft,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },
  notesTitle: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  notesBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
  },
  demoButton: {
    height: 54,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: palette.border,
    alignItems: "center",
    justifyContent: "center",
  },
  demoButtonText: {
    color: palette.textSoft,
    fontSize: 14,
    fontWeight: "700",
  },
});
