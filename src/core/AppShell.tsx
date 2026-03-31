import React, { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { fakeRecognitionMetrics, productRecommendations, reviewHistory } from "../data/mock";
import { generateReviewReport, recognizeMetrics } from "../services/mockAi";
import { ConfirmScreen } from "../screens/ConfirmScreen";
import { HistoryScreen } from "../screens/HistoryScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { PicksScreen } from "../screens/PicksScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ReportScreen } from "../screens/ReportScreen";
import { UploadScreen } from "../screens/UploadScreen";
import { loadAppSnapshot, saveAppSnapshot } from "../services/storage";
import { ProductRecommendation, ReviewMetrics, ReviewRecord, RouteKey, TabKey } from "../types";

export function AppShell() {
  const [route, setRoute] = useState<RouteKey>("home");
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [reviews, setReviews] = useState<ReviewRecord[]>(reviewHistory);
  const [savedProducts, setSavedProducts] = useState<ProductRecommendation[]>([]);
  const [selectedReview, setSelectedReview] = useState<ReviewRecord>(reviewHistory[0]);
  const [selectedProduct, setSelectedProduct] = useState<ProductRecommendation>(
    productRecommendations[0],
  );
  const [pickedAsset, setPickedAsset] = useState<string | null>(null);
  const [recognizedMetrics, setRecognizedMetrics] = useState<ReviewMetrics>(fakeRecognitionMetrics);
  const [reviewNote] = useState("主推商品：防晒喷雾");

  const currentReview = useMemo(() => selectedReview, [selectedReview]);

  useEffect(() => {
    async function bootstrap() {
      const snapshot = await loadAppSnapshot();
      if (!snapshot) return;
      if (snapshot.reviews.length > 0) {
        setReviews(snapshot.reviews);
        setSelectedReview(snapshot.reviews[0]);
      }
      setSavedProducts(snapshot.savedProducts);
    }

    void bootstrap();
  }, []);

  useEffect(() => {
    void saveAppSnapshot({ reviews, savedProducts });
  }, [reviews, savedProducts]);

  async function handlePickScreenshot() {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("需要相册权限", "请允许访问相册后再上传直播截图。");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        const uri = result.assets[0].uri;
        setPickedAsset(uri);
        const metrics = await recognizeMetrics({ assetUri: uri, notes: reviewNote });
        setRecognizedMetrics(metrics);
        setRoute("confirm");
      }
    } catch {
      setPickedAsset("mock://picked");
      setRecognizedMetrics(fakeRecognitionMetrics);
      setRoute("confirm");
    }
  }

  async function handleGenerate() {
    setRoute("loading");
    const report = await generateReviewReport({ assetUri: pickedAsset, notes: reviewNote });
    setReviews((prev) => [report, ...prev.filter((item) => item.id !== report.id)]);
    setSelectedReview(report);
    setActiveTab("report");
    setRoute("report");
  }

  function openReport(review: ReviewRecord) {
    setSelectedReview(review);
    setActiveTab("report");
    setRoute("report");
  }

  function openProduct(product: ProductRecommendation) {
    setSelectedProduct(product);
    setActiveTab("picks");
    setRoute("product");
  }

  function switchTab(tab: TabKey) {
    setActiveTab(tab);
    if (tab === "home") setRoute("home");
    if (tab === "report") setRoute("report");
    if (tab === "picks") setRoute("picks");
    if (tab === "profile") setRoute("profile");
  }

  function saveProduct(product: ProductRecommendation) {
    setSavedProducts((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [product, ...prev];
    });
  }

  if (route === "home") {
    return (
      <HomeScreen
        activeTab={activeTab}
        onTabChange={switchTab}
        onCreateReview={() => setRoute("upload")}
        onOpenHistory={() => {
          setActiveTab("profile");
          setRoute("history");
        }}
        onOpenReport={() => openReport(reviews[0])}
        onOpenPicks={() => {
          setActiveTab("picks");
          setRoute("picks");
        }}
      />
    );
  }

  if (route === "upload") {
    return <UploadScreen onBack={() => setRoute("home")} onPick={handlePickScreenshot} />;
  }

  if (route === "confirm") {
    return (
      <ConfirmScreen
        metrics={recognizedMetrics}
        hasPicked={pickedAsset !== null}
        onBack={() => setRoute("upload")}
        onGenerate={handleGenerate}
      />
    );
  }

  if (route === "loading") {
    return <LoadingScreen />;
  }

  if (route === "report") {
    return <ReportScreen review={currentReview} activeTab={activeTab} onTabChange={switchTab} />;
  }

  if (route === "history") {
    return (
      <HistoryScreen
        reviews={reviews}
        activeTab={activeTab}
        onTabChange={switchTab}
        onSelect={openReport}
      />
    );
  }

  if (route === "picks") {
    return (
      <PicksScreen
        picks={productRecommendations}
        activeTab={activeTab}
        onTabChange={switchTab}
        onSelect={openProduct}
      />
    );
  }

  if (route === "profile") {
    return (
      <ProfileScreen
        activeTab={activeTab}
        onTabChange={switchTab}
        reviews={reviews}
        savedProducts={savedProducts}
      />
    );
  }

  return (
    <ProductDetailScreen
      product={selectedProduct}
      onBack={() => setRoute("picks")}
      onSave={saveProduct}
    />
  );
}
