import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomNav,
  GradientFeatureCard,
  ScreenFrame,
  ScreenScroll,
  SearchBar,
  SectionHeader,
} from "../components/ui";
import { pickCategories } from "../data/mock";
import { ProductRecommendation, TabKey } from "../types";
import { palette } from "../theme";

export function PicksScreen({
  picks,
  activeTab,
  onTabChange,
  onSelect,
}: {
  picks: ProductRecommendation[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  onSelect: (product: ProductRecommendation) => void;
}) {
  const [search, setSearch] = useState("");
  const visiblePicks = picks.filter((pick) =>
    pick.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <ScreenFrame>
      <ScreenScroll>
        <SearchBar value={search} onChangeText={setSearch} />

        <View style={styles.cardGrid}>
          <GradientFeatureCard
            title="潜力爆款"
            subtitle="增长快，竞争还不算高"
            colors={["#FFB9C8", "#FFCBEA"]}
          />
          <GradientFeatureCard
            title="内容切口"
            subtitle="更适合你的讲解风格"
            colors={["#C4D8FF", "#D8C7FF"]}
          />
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

        <SectionHeader title="适合你测" link="查看更多" />

        {visiblePicks.map((pick, index) => (
          <Pressable key={pick.id} onPress={() => onSelect(pick)} style={styles.pickCard}>
            <LinearGradient
              colors={
                index === 0
                  ? ["#FFE0F0", "#D8D7FF"]
                  : index === 1
                    ? ["#FFF0D1", "#FFD7EA"]
                    : ["#DFF5FF", "#E9D9FF"]
              }
              style={styles.pickThumb}
            />
            <View style={styles.pickBody}>
              <Text style={styles.pickTitle}>{pick.title}</Text>
              <Text style={styles.pickSubtitle}>{pick.subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </ScreenScroll>
      <BottomNav activeTab={activeTab} onChange={onTabChange} />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  cardGrid: {
    flexDirection: "row",
    gap: 12,
  },
  categoryRow: {
    flexDirection: "row",
    gap: 10,
  },
  categoryCard: {
    flex: 1,
    minHeight: 92,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  categoryCount: {
    marginTop: 8,
    color: "#FBF7FF",
    fontSize: 11,
    fontWeight: "600",
  },
  pickCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  pickThumb: {
    width: 72,
    height: 68,
    borderRadius: 18,
  },
  pickBody: {
    flex: 1,
    justifyContent: "center",
  },
  pickTitle: {
    color: palette.text,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
  },
  pickSubtitle: {
    marginTop: 6,
    color: palette.textSoft,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },
});
