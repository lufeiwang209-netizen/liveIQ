import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackLink,
  CardTitle,
  GradientButton,
  InfoChip,
  NoteText,
  PageTitle,
  ScreenFrame,
  WhiteCard,
} from "../components/ui";
import { ProductRecommendation } from "../types";

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
        <BackLink label="返回推荐" onPress={onBack} />
        <PageTitle title="商品详情" />

        <LinearGradient colors={["#FFF0F7", "#F3EEFF"]} style={styles.productHeroCard}>
          <LinearGradient colors={["#FFD7EA", "#D7DAFF"]} style={styles.productHeroMedia} />
          <Text style={styles.productHeroTitle}>{product.title.replace("，适合快节奏直播讲解", "")}</Text>
          <Text style={styles.productHeroSubtitle}>适合快节奏直播讲解，适配夏季高频场景</Text>
        </LinearGradient>

        <View style={styles.detailChipRow}>
          <InfoChip text={product.trendTag} tint="#FFF3F8" color="#D46993" />
          <InfoChip text="竞争中低" tint="#F2F4FF" color="#6B8EEB" />
          <InfoChip text="适合你" tint="#F3FFF7" color="#53B97A" />
        </View>

        <WhiteCard>
          <CardTitle>推荐理由</CardTitle>
          <NoteText>
            1. 最近 7 天搜索热度持续抬升{"\n"}
            2. 你的历史场次里美妆清凉类素材留存更高{"\n"}
            3. 头部主播尚未形成绝对垄断
          </NoteText>
        </WhiteCard>

        <GradientButton
          label="加入待测商品池"
          onPress={() => {
            onSave(product);
            Alert.alert("已加入", `${product.title} 已加入待测商品池`);
          }}
        />
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
  productHeroCard: {
    borderRadius: 30,
    padding: 16,
  },
  productHeroMedia: {
    height: 108,
    borderRadius: 22,
  },
  productHeroTitle: {
    marginTop: 12,
    color: "#2F2738",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "800",
  },
  productHeroSubtitle: {
    marginTop: 6,
    color: "#6E6476",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  detailChipRow: {
    flexDirection: "row",
    gap: 10,
  },
});
