import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNav, CardTitle, PageTitle, ScreenFrame, ScreenScroll, TagPill, WhiteCard } from "../components/ui";
import { profileIssueTags } from "../data/mock";
import { palette } from "../theme";
import { ProductRecommendation, ReviewRecord, TabKey } from "../types";

export function ProfileScreen({
  activeTab,
  onTabChange,
  reviews,
  savedProducts,
  onCreateReview,
}: {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  reviews: ReviewRecord[];
  savedProducts: ProductRecommendation[];
  onCreateReview: () => void;
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <PageTitle title="我的" subtitle="账号、额度、待测池和你的高频问题都在这里" />

        <WhiteCard style={styles.heroCard}>
          <Text style={styles.heroTitle}>LiveIQ 基础版</Text>
          <Text style={styles.heroBody}>今日还可以生成 18 次复盘报告，也可以继续做选品测试。</Text>
        </WhiteCard>

        <View style={styles.metricRow}>
          <View style={[styles.metricCard, { backgroundColor: "#FFF1F7" }]}>
            <Text style={[styles.metricLabel, { color: palette.pinkDeep }]}>累计复盘</Text>
            <Text style={styles.metricValue}>{reviews.length}</Text>
          </View>
          <View style={[styles.metricCard, { backgroundColor: "#EFFAF4" }]}>
            <Text style={[styles.metricLabel, { color: "#51B37F" }]}>待测商品</Text>
            <Text style={styles.metricValue}>{savedProducts.length}</Text>
          </View>
        </View>

        <WhiteCard>
          <CardTitle>高频问题标签</CardTitle>
          <View style={styles.tagRow}>
            {profileIssueTags.map((tag, index) => (
              <TagPill
                key={tag}
                text={tag}
                tint={index % 2 === 0 ? "#FFF1F7" : "#EEF4FF"}
                color={index % 2 === 0 ? palette.pinkDeep : "#6B8EEB"}
              />
            ))}
          </View>
        </WhiteCard>

        <WhiteCard>
          <CardTitle>待测商品池</CardTitle>
          {savedProducts.length === 0 ? (
            <Text style={styles.emptyText}>你还没有加入待测商品，去“选品”页挑几个更适合你风格的货试试。</Text>
          ) : (
            savedProducts.map((product) => (
              <View key={product.id} style={styles.productItem}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productBody}>{product.subtitle}</Text>
              </View>
            ))
          )}
        </WhiteCard>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} onPrimaryAction={onCreateReview} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: "#FFF8FC",
    borderWidth: 1,
    borderColor: palette.border,
  },
  heroTitle: {
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  heroBody: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
  metricRow: {
    flexDirection: "row",
    gap: 12,
  },
  metricCard: {
    flex: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  metricValue: {
    marginTop: 10,
    color: palette.text,
    fontSize: 30,
    fontWeight: "800",
  },
  tagRow: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  emptyText: {
    marginTop: 12,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  productItem: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: palette.line,
    paddingTop: 14,
  },
  productTitle: {
    color: palette.text,
    fontSize: 15,
    fontWeight: "800",
  },
  productBody: {
    marginTop: 6,
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
});
