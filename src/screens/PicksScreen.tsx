import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomNav,
  ScreenFrame,
  ScreenScroll,
  SearchBar,
  SectionHeader,
  TagPill,
} from "../components/ui";
import { pickCategories } from "../data/mock";
import { ProductRecommendation, TabKey } from "../types";
import { palette } from "../theme";

export function PicksScreen({
  picks,
  activeTab,
  onTabChange,
  onSelect,
  onCreateReview,
}: {
  picks: ProductRecommendation[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onSelect: (product: ProductRecommendation) => void;
  onCreateReview: () => void;
}) {
  const [search, setSearch] = useState("");
  const keyword = search.trim().toLowerCase();
  const visiblePicks = picks.filter((pick) => {
    if (!keyword) return true;
    return `${pick.title} ${pick.subtitle} ${pick.category}`.toLowerCase().includes(keyword);
  });

  return (
    <ScreenFrame>
      <ScreenScroll>
        <SearchBar value={search} onChangeText={setSearch} placeholder="搜索品类、关键词或测试方向" />

        <View style={styles.highlightRow}>
          <LinearGradient colors={["#FFBED7", "#FFD8ED"]} style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>潜力爆款</Text>
            <Text style={styles.highlightBody}>优先看增长快、竞争还没彻底卷满的商品。</Text>
          </LinearGradient>
          <LinearGradient colors={["#C9DAFF", "#E1D1FF"]} style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>内容切口</Text>
            <Text style={styles.highlightBody}>更适合你快节奏讲解和对比型表达的货。</Text>
          </LinearGradient>
        </View>

        <View style={styles.categoryRow}>
          {pickCategories.map((category) => (
            <LinearGradient
              key={category.label}
              colors={[category.colors[0], category.colors[1]]}
              style={styles.categoryCard}
            >
              <Text style={styles.categoryTitle}>{category.label}</Text>
              <Text style={styles.categoryCount}>{category.count}</Text>
            </LinearGradient>
          ))}
        </View>

        <SectionHeader title="适合你先测" link={`${visiblePicks.length} 个结果`} />

        {visiblePicks.map((pick) => (
          <Pressable key={pick.id} onPress={() => onSelect(pick)} style={styles.pickCard}>
            <LinearGradient colors={["#FFF1F7", "#F1EDFF"]} style={styles.pickThumb}>
              <Text style={styles.pickCategory}>{pick.category}</Text>
            </LinearGradient>
            <View style={styles.pickBody}>
              <Text style={styles.pickTitle}>{pick.title}</Text>
              <Text style={styles.pickSubtitle}>{pick.subtitle}</Text>
              <View style={styles.pickTagRow}>
                <TagPill text={pick.trendTag} tint="#FFF1F7" color={palette.pinkDeep} />
                <TagPill text={pick.competitionTag} tint="#EEF4FF" color="#6B8EEB" />
                <TagPill text={pick.fitTag} tint="#EFFAF4" color="#51B37F" />
              </View>
            </View>
          </Pressable>
        ))}
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} onPrimaryAction={onCreateReview} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  highlightRow: {
    flexDirection: "row",
    gap: 12,
  },
  highlightCard: {
    flex: 1,
    minHeight: 124,
    borderRadius: 28,
    padding: 16,
  },
  highlightTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: "800",
  },
  highlightBody: {
    marginTop: 10,
    color: "#5C5164",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },
  categoryRow: {
    flexDirection: "row",
    gap: 10,
  },
  categoryCard: {
    flex: 1,
    minHeight: 92,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  categoryCount: {
    marginTop: 10,
    color: "#FFF9FD",
    fontSize: 12,
    fontWeight: "600",
  },
  pickCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 10,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 3,
  },
  pickThumb: {
    width: 92,
    height: 104,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  pickCategory: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  pickBody: {
    flex: 1,
  },
  pickTitle: {
    color: palette.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "800",
  },
  pickSubtitle: {
    marginTop: 8,
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  pickTagRow: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
