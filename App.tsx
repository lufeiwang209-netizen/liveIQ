import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { AppShell } from "./src/core/AppShell";
import { palette } from "./src/theme";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.bg} />
      <View style={styles.appShell}>
        <AppShell />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  appShell: {
    flex: 1,
    backgroundColor: palette.bg,
  },
});
