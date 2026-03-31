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
    <LinearGradient colors={["#FFF9FC", "#FFF2F8"]} style={styles.bgFill}>
      <View style={styles.topGlowPink} />
      <View style={styles.topGlowBlue} />
      <View style={[styles.contentWrap, !withBottomNav && styles.contentWrapNoNav]}>{children}</View>
    </LinearGradient>
  );
}

export function ScreenScroll({
  children,
  contentContainerStyle,
}: {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  );
}

export function BottomNav({
  activeTab,
  onChange,
  onPrimaryAction,
}: {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
  onPrimaryAction?: () => void;
}) {
  const items: Array<{ key: TabKey; label: string }> = [
    { key: "home", label: "首页" },
    { key: "report", label: "复盘" },
    { key: "picks", label: "选品" },
    { key: "profile", label: "我的" },
  ];

  return (
    <View style={styles.bottomWrap}>
      <View style={styles.bottomPill}>
        {items.map((item) => {
          const active = activeTab === item.key;
          return (
            <Pressable key={item.key} onPress={() => onChange(item.key)} style={styles.tabItem}>
              <View style={[styles.tabDot, active && styles.tabDotActive]} />
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
        {onPrimaryAction ? (
          <Pressable onPress={onPrimaryAction} style={styles.primaryActionButton}>
            <LinearGradient colors={["#FFB2D1", "#CDA5FF"]} style={styles.primaryActionGradient}>
              <Text style={styles.primaryActionText}>+</Text>
            </LinearGradient>
          </Pressable>
        ) : null}
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
    <View style={styles.pageTitleWrap}>
      <Text style={styles.pageTitle}>{title}</Text>
      {subtitle ? <Text style={styles.pageSubtitle}>{subtitle}</Text> : null}
    </View>
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
    <Pressable onPress={onPress} style={styles.backLinkWrap}>
      <Text style={styles.backLink}>{"<"} {label}</Text>
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
    <Pressable onPress={onPress} style={small ? styles.buttonSmallWrap : undefined}>
      <LinearGradient
        colors={["#FFB5D2", "#CFA8FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradientButton, small && styles.gradientButtonSmall]}
      >
        <Text style={styles.gradientButtonText}>{label}</Text>
      </LinearGradient>
    </Pressable>
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
  return <View style={[styles.whiteCard, compact && styles.whiteCardCompact, style]}>{children}</View>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.cardTitle}>{children}</Text>;
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

export function SearchBar({
  value,
  onChangeText,
  placeholder = "搜索关键词",
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) {
  return (
    <View style={styles.searchWrap}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={palette.textMuted}
        style={styles.searchInput}
      />
      <LinearGradient colors={["#FFBED6", "#F3A4DE"]} style={styles.searchAction}>
        <Text style={styles.searchActionText}>搜索</Text>
      </LinearGradient>
    </View>
  );
}

export function TagPill({
  text,
  tint,
  color,
}: {
  text: string;
  tint: string;
  color: string;
}) {
  return (
    <View style={[styles.tagPill, { backgroundColor: tint }]}>
      <Text style={[styles.tagPillText, { color }]}>{text}</Text>
    </View>
  );
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
    flex: 1,
    overflow: "hidden",
    backgroundColor: palette.bg,
  },
  bgFill: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  topGlowPink: {
    position: "absolute",
    top: -100,
    left: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#FFD8EA",
    opacity: 0.65,
  },
  topGlowBlue: {
    position: "absolute",
    top: -50,
    right: -20,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#E3E5FF",
    opacity: 0.75,
  },
  contentWrap: {
    flex: 1,
    paddingTop: 10,
  },
  contentWrapNoNav: {
    paddingBottom: 18,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 124,
    gap: 16,
  },
  bottomWrap: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 18,
  },
  bottomPill: {
    height: 78,
    borderRadius: 30,
    backgroundColor: "#FFFFFFF2",
    borderWidth: 1,
    borderColor: "#F5E5EE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.32,
    shadowRadius: 22,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  tabDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E8DEEB",
  },
  tabDotActive: {
    backgroundColor: palette.pinkDeep,
    width: 22,
  },
  tabLabel: {
    color: palette.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  tabLabelActive: {
    color: palette.pinkDeep,
    fontWeight: "700",
  },
  primaryActionButton: {
    position: "absolute",
    alignSelf: "center",
    top: -18,
  },
  primaryActionGradient: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#FFF7FB",
  },
  primaryActionText: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 32,
    fontWeight: "700",
    marginTop: -1,
  },
  pageTitleWrap: {
    gap: 4,
  },
  pageTitle: {
    color: palette.text,
    fontSize: 29,
    lineHeight: 34,
    fontWeight: "800",
  },
  pageSubtitle: {
    color: palette.textSoft,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  backLinkWrap: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: "#FFFFFFAA",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  backLink: {
    color: palette.text,
    fontSize: 13,
    fontWeight: "700",
  },
  gradientButton: {
    height: 58,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#E9A6C8",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
  },
  buttonSmallWrap: {
    flex: 1,
  },
  gradientButtonSmall: {
    height: 54,
  },
  gradientButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  whiteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 4,
  },
  whiteCardCompact: {
    paddingVertical: 14,
  },
  cardTitle: {
    color: palette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: palette.text,
    fontSize: 20,
    fontWeight: "800",
  },
  sectionLink: {
    color: palette.textSoft,
    fontSize: 13,
    fontWeight: "600",
  },
  searchWrap: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: palette.border,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    flex: 1,
    color: palette.text,
    fontSize: 14,
    fontWeight: "500",
  },
  searchAction: {
    minWidth: 74,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  searchActionText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  tagPill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  tagPillText: {
    fontSize: 12,
    fontWeight: "700",
  },
  savedChip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "#EEF9F2",
  },
  savedChipText: {
    color: "#46A972",
    fontSize: 12,
    fontWeight: "700",
  },
  noteText: {
    marginTop: 12,
    color: palette.textSoft,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
});
