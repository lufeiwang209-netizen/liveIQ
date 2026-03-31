import React from "react";
import { Alert, DimensionValue, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackLink,
  CardTitle,
  GradientButton,
  NoteText,
  PageTitle,
  ScreenFrame,
  TagPill,
  WhiteCard,
} from "../components/ui";
import { palette } from "../theme";
import { ProductRecommendation } from "../types";

function SignalBar({
  label,
  width,
  color,
}: {
  label: string;
  width: DimensionValue;
  color: string;
}) {
  return (
    <View style={styles.signalBlock}>
      <Text style={styles.signalLabel}>{label}</Text>
      <View style={styles.signalTrack}>
        <View style={[styles.signalFill, { width, backgroundColor: color }]} />
      </View>
    </View>
  );
}

export function ProductDetailScreen({
  product,
  onBack,
  onSave,
}: {
  product: ProductRecommendation;
  onBack: () => void;
  onSave: (product: ProductRecommendation) => void;
}) {
  return (
    <ScreenFrame withBottomNav={false}>
      <View style={styles.screenInner}>
        <BackLink label="返回选品" onPress={onBack} />
        <PageTitle title="商品详情" subtitle="看清为什么值得测，再决定要不要放进待测池" />

        <LinearGradient colors={["#FFF0F8", "#F2EEFF"]} style={styles.heroCard}>
          <View style={styles.heroTagRow}>
            <TagPill text={product.category} tint="#FFFFFFCC" color={palette.pinkDeep} />
            <TagPill text={product.trendTag} tint="#FFFFFFCC" color="#6B8EEB" />
          </View>
          <Text style={styles.heroTitle}>{product.title}</Text>
          <Text style={styles.heroBody}>{product.subtitle}</Text>
        </LinearGradient>

        <WhiteCard>
          <CardTitle>这货为什么值得先测</CardTitle>
          <NoteText>{product.reason}</NoteText>
          <View style={styles.signalWrap}>
            <SignalBar label="增长速度" width="82%" color="#F48BB7" />
            <SignalBar label="竞争压力" width="48%" color="#8EBEFF" />
            <SignalBar label="和你内容的匹配度" width="76%" color="#77D09F" />
          </View>
        </WhiteCard>

        <WhiteCard>
          <CardTitle>建议切入方式</CardTitle>
          {product.entryIdeas.map((idea, index) => (
            <View key={idea} style={styles.ideaRow}>
              <View style={styles.ideaIndex}>
                <Text style={styles.ideaIndexText}>{index + 1}</Text>
              </View>
              <Text style={styles.ideaText}>{idea}</Text>
            </View>
          ))}
        </WhiteCard>

        <GradientButton
          label="加入待测商品池"
          onPress={() => {
            onSave(product);
            Alert.alert("已加入待测池", `${product.title} 已经放进你的待测商品池。`);
          }}
        />
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
  heroCard: {
    borderRadius: 34,
    padding: 18,
  },
  heroTagRow: {
    flexDirection: "row",
    gap: 10,
  },
  heroTitle: {
    marginTop: 14,
    color: palette.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
  },
  heroBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
  signalWrap: {
    marginTop: 16,
    gap: 12,
  },
  signalBlock: {
    gap: 8,
  },
  signalLabel: {
    color: palette.text,
    fontSize: 13,
    fontWeight: "700",
  },
  signalTrack: {
    height: 12,
    borderRadius: 999,
    backgroundColor: "#F3EDF4",
    overflow: "hidden",
  },
  signalFill: {
    height: "100%",
    borderRadius: 999,
  },
  ideaRow: {
    marginTop: 14,
    flexDirection: "row",
    gap: 12,
  },
  ideaIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFF1F7",
    alignItems: "center",
    justifyContent: "center",
  },
  ideaIndexText: {
    color: palette.pinkDeep,
    fontSize: 13,
    fontWeight: "800",
  },
  ideaText: {
    flex: 1,
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
});
