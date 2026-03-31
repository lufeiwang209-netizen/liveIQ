import React from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "../theme";
import { TabKey } from "../types";

export function ScreenFrame({
  children,
  withBottomNav = true,
}: {
  children: React.ReactNode;
  withBottomNav?: boolean;
}) {
  return (
    <View style={styles.canvas}>
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <Text style={styles.statusDots}>●●●</Text>
      </View>
      <View style={[styles.contentWrap, !withBottomNav && styles.contentWrapNoNav]}>{children}</View>
    </View>
  );
}

export function ScreenScroll({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      {children}
    </ScrollView>
  );
}

export function BottomNav({
  activeTab,
  onChange,
}: {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}) {
  const items: Array<{ key: TabKey; label: string; icon: string }> = [
    { key: "home", label: "首页", icon: "⌂" },
    { key: "report", label: "复盘", icon: "⌁" },
    { key: "picks", label: "选品", icon: "✦" },
    { key: "profile", label: "我的", icon: "◎" },
  ];

  return (
    <View style={styles.bottomWrap}>
      <View style={styles.bottomPill}>
        {items.map((item) => {
          const active = activeTab === item.key;
          return (
            <Pressable
              key={item.key}
              onPress={() => onChange(item.key)}
              style={[styles.tabItem, active && styles.tabItemActive]}
            >
              <Text style={[styles.tabIcon, active && styles.tabIconActive]}>{item.icon}</Text>
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <Text style={styles.pageTitle}>{title}</Text>
      {subtitle ? <Text style={styles.pageSubtitle}>{subtitle}</Text> : null}
    </>
  );
}

export function BackLink({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.backLink}>‹ {label}</Text>
    </Pressable>
  );
}

export function GradientButton({
  label,
  onPress,
  small,
}: {
  label: string;
  onPress: () => void;
  small?: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={small ? styles.gradientButtonSmallWrap : undefined}>
      <LinearGradient
        colors={["#CFA7FF", "#FFB4CF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientButton, small && styles.gradientButtonSmall]}
      >
        <Text style={styles.gradientButtonText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export function GradientFeatureCard({
  title,
  subtitle,
  colors,
  compact,
  onPress,
}: {
  title: string;
  subtitle: string;
  colors: readonly [string, string];
  compact?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.featureCardWrap}>
      <LinearGradient
        colors={[colors[0], colors[1]]}
        style={[styles.featureCard, compact && styles.featureCardSmall]}
      >
        <Text style={[styles.featureTitle, compact && styles.featureTitleSmall]}>{title}</Text>
        <Text style={styles.featureSubtitle}>{subtitle}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export function InfoChip({
  text,
  tint,
  color,
}: {
  text: string;
  tint: string;
  color: string;
}) {
  return (
    <View style={[styles.infoChip, { backgroundColor: tint }]}>
      <Text style={[styles.infoChipText, { color }]}>{text}</Text>
    </View>
  );
}

export function SearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="搜索关键词"
        placeholderTextColor={palette.textMuted}
        style={styles.searchInput}
      />
      <LinearGradient colors={["#FFB4CF", "#F6A7DE"]} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>搜索</Text>
      </LinearGradient>
    </View>
  );
}

export function SectionHeader({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {link ? <Text style={styles.sectionLink}>{link}</Text> : null}
    </View>
  );
}

export function WhiteCard({
  children,
  compact,
  style,
}: {
  children: React.ReactNode;
  compact?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[compact ? styles.whiteCardCompact : styles.whiteCard, style]}>{children}</View>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.cardTitleDark}>{children}</Text>;
}

export function SavedChip({ label }: { label: string }) {
  return (
    <View style={styles.savedChip}>
      <Text style={styles.savedChipText}>{label}</Text>
    </View>
  );
}

export function NoteText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.noteText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  canvas: {
    width: 393,
    height: 852,
    borderRadius: 36,
    backgroundColor: palette.bg,
    overflow: "hidden",
    shadowColor: "#C99AFF",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.16,
    shadowRadius: 30,
    elevation: 10,
  },
  statusBar: {
    height: 62,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusTime: {
    color: palette.text,
    fontSize: 18,
    fontWeight: "700",
  },
  statusDots: {
    color: palette.text,
    fontSize: 12,
    fontWeight: "700",
  },
  contentWrap: {
    flex: 1,
  },
  contentWrapNoNav: {
    paddingBottom: 18,
  },
  scrollContent: {
    paddingTop: 6,
    paddingHorizontal: 18,
    paddingBottom: 12,
    gap: 16,
  },
  bottomWrap: {
    paddingTop: 10,
    paddingHorizontal: 18,
    paddingBottom: 20,
  },
  bottomPill: {
    height: 62,
    borderRadius: 36,
    backgroundColor: "#FFFFFFDD",
    borderWidth: 1,
    borderColor: "#F3DDEB",
    flexDirection: "row",
    padding: 4,
  },
  tabItem: {
    flex: 1,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  tabItemActive: {
    backgroundColor: "#FFD5E8",
  },
  tabIcon: {
    color: "#B6A9BC",
    fontSize: 16,
  },
  tabIconActive: {
    color: "#D85A90",
  },
  tabLabel: {
    color: "#B6A9BC",
    fontSize: 10,
    fontWeight: "600",
  },
  tabLabelActive: {
    color: "#D85A90",
    fontWeight: "700",
  },
  pageTitle: {
    color: palette.text,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "800",
  },
  pageSubtitle: {
    marginTop: -10,
    color: palette.textSoft,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },
  backLink: {
    color: palette.textSoft,
    fontSize: 14,
    fontWeight: "600",
  },
  gradientButton: {
    height: 54,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  gradientButtonSmallWrap: {
    flex: 1,
  },
  gradientButtonSmall: {
    height: 54,
  },
  gradientButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  featureCardWrap: {
    flex: 1,
  },
  featureCard: {
    minHeight: 110,
    borderRadius: 26,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  featureCardSmall: {
    minHeight: 96,
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  featureTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
  },
  featureTitleSmall: {
    fontSize: 16,
  },
  featureSubtitle: {
    marginTop: 8,
    color: "#FDF9FF",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
  },
  infoChip: {
    flex: 1,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
  },
  infoChipText: {
    fontSize: 13,
    fontWeight: "700",
  },
  searchBar: {
    height: 52,
    borderRadius: 999,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 6,
  },
  searchInput: {
    flex: 1,
    color: palette.text,
    fontSize: 14,
    fontWeight: "500",
  },
  searchButton: {
    width: 72,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  sectionHeader: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: palette.text,
    fontSize: 22,
    fontWeight: "800",
  },
  sectionLink: {
    color: "#9B90A8",
    fontSize: 13,
    fontWeight: "600",
  },
  whiteCard: {
    backgroundColor: palette.surface,
    borderRadius: 28,
    padding: 16,
  },
  whiteCardCompact: {
    backgroundColor: palette.surface,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardTitleDark: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "700",
  },
  savedChip: {
    backgroundColor: "#FFE7F1",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  savedChipText: {
    color: palette.pinkDeep,
    fontSize: 12,
    fontWeight: "700",
  },
  noteText: {
    color: "#6E6476",
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "500",
  },
});

export const sharedStyles = styles;
