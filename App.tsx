import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { AppShell } from "./src/core/AppShell";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF9FC" />
      <View style={styles.appShell}>
        <AppShell />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#201B24",
  },
  appShell: {
    flex: 1,
    backgroundColor: "#201B24",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
});
