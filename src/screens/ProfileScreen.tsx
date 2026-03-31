import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNav, CardTitle, PageTitle, ScreenFrame, ScreenScroll, WhiteCard } from "../components/ui";
import { palette } from "../theme";
import { ProductRecommendation, ReviewRecord, TabKey } from "../types";

export function ProfileScreen({
  activeTab,
  onTabChange,
  reviews,
  savedProducts,
}: {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  reviews: ReviewRecord[];
  savedProducts: ProductRecommendation[];
}) {
  return (
    <ScreenFrame>
      <ScreenScroll>
        <PageTitle title="我的" subtitle="账号、额度与待测商品池" />

        <WhiteCard>
          <CardTitle>本月概览</CardTitle>
          <View style={styles.metricRow}>
            <View style={[styles.metricBlock, { backgroundColor: "#FFF3F8" }]}>
              <Text style={[styles.metricLabel, { color: palette.pinkDeep }]}>复盘次数</Text>
              <Text style={styles.metricValue}>{reviews.length}</Text>
            </View>
            <View style={[styles.metricBlock, { backgroundColor: "#F2F4FF" }]}>
              <Text style={[styles.metricLabel, { color: "#6B8EEB" }]}>待测商品</Text>
              <Text style={styles.metricValue}>{savedProducts.length}</Text>
            </View>
          </View>
        </WhiteCard>

        <WhiteCard>
          <CardTitle>AI 使用额度</CardTitle>
          <Text style={styles.bodyText}>今日剩余 18 次报告生成，可继续完成直播复盘与选品分析。</Text>
        </WhiteCard>

        <WhiteCard>
          <CardTitle>待测商品池</CardTitle>
          {savedProducts.length === 0 ? (
            <Text style={styles.bodyText}>你还没有加入待测商品，去“选品”页挑几个试试。</Text>
          ) : (
            savedProducts.map((product) => (
              <View key={product.id} style={styles.savedItem}>
                <Text style={styles.savedTitle}>{product.title}</Text>
                <Text style={styles.savedSubtitle}>{product.subtitle}</Text>
              </View>
            ))
          )}
        </WhiteCard>
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  metricRow: {
    marginTop: 14,
    flexDirection: "row",
    gap: 10,
  },
  metricBlock: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  metricValue: {
    marginTop: 6,
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  bodyText: {
    marginTop: 10,
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  savedItem: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F4E8F1",
    paddingTop: 12,
  },
  savedTitle: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "700",
  },
  savedSubtitle: {
    marginTop: 4,
    color: palette.textSoft,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },
});
