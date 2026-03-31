import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppStorageSnapshot } from "../types";

const STORAGE_KEY = "liveiq:mvp:snapshot";

export async function loadAppSnapshot(): Promise<AppStorageSnapshot | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppStorageSnapshot;
  } catch {
    return null;
  }
}

export async function saveAppSnapshot(snapshot: AppStorageSnapshot): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Best-effort persistence for MVP.
  }
}
