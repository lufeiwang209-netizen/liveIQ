import React, { useEffect, useState } from "react";
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

function normalizeReview(review: ReviewRecord): ReviewRecord {
  const matched = reviewHistory.find((item) => item.id === review.id) ?? reviewHistory[0];

  return {
    ...matched,
    ...review,
    metrics: {
      ...matched.metrics,
      ...review.metrics,
    },
    wins: review.wins ?? matched.wins,
    risks: review.risks ?? matched.risks,
    actions: review.actions ?? matched.actions,
    trafficMix: {
      ...matched.trafficMix,
      ...review.trafficMix,
    },
  };
}

function normalizeProduct(product: ProductRecommendation): ProductRecommendation {
  const matched =
    productRecommendations.find((item) => item.id === product.id) ?? productRecommendations[0];

  return {
    ...matched,
    ...product,
    entryIdeas: product.entryIdeas ?? matched.entryIdeas,
  };
}

export function AppShell() {
  const [route, setRoute] = useState<RouteKey>("home");
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [reviews, setReviews] = useState<ReviewRecord[]>(reviewHistory);
  const [savedProducts, setSavedProducts] = useState<ProductRecommendation[]>([]);
  const [selectedReview, setSelectedReview] = useState<ReviewRecord>(reviewHistory[0]);
  const [selectedProduct, setSelectedProduct] = useState<ProductRecommendation>(productRecommendations[0]);
  const [pickedAsset, setPickedAsset] = useState<string | null>(null);
  const [recognizedMetrics, setRecognizedMetrics] = useState<ReviewMetrics>(fakeRecognitionMetrics);

  useEffect(() => {
    async function bootstrap() {
      const snapshot = await loadAppSnapshot();
      if (!snapshot) return;
      if (snapshot.reviews.length > 0) {
        const normalizedReviews = snapshot.reviews.map(normalizeReview);
        setReviews(normalizedReviews);
        setSelectedReview(normalizedReviews[0]);
      }
      if (snapshot.savedProducts.length > 0) {
        setSavedProducts(snapshot.savedProducts.map(normalizeProduct));
      }
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

      if (result.canceled || !result.assets[0]) return;

      const uri = result.assets[0].uri;
      setPickedAsset(uri);
      const metrics = await recognizeMetrics({ assetUri: uri, notes: "主推商品：防晒喷雾" });
      setRecognizedMetrics(metrics);
      setRoute("confirm");
    } catch {
      handleUseDemoData();
    }
  }

  function handleUseDemoData() {
    setPickedAsset(null);
    setRecognizedMetrics(fakeRecognitionMetrics);
    setRoute("confirm");
  }

  async function handleGenerate() {
    setRoute("loading");
    const report = await generateReviewReport({
      assetUri: pickedAsset,
      notes: "主推商品：防晒喷雾；本场福利：第二件半价",
    });

    const normalizedReport = normalizeReview(report);
    setReviews((prev) => [normalizedReport, ...prev]);
    setSelectedReview(normalizedReport);
    setActiveTab("report");
    setRoute("report");
  }

  function openReport(review: ReviewRecord) {
    setSelectedReview(normalizeReview(review));
    setActiveTab("report");
    setRoute("report");
  }

  function openProduct(product: ProductRecommendation) {
    setSelectedProduct(normalizeProduct(product));
    setActiveTab("picks");
    setRoute("product");
  }

  function openCreateReview() {
    setRoute("upload");
  }

  function switchTab(tab: TabKey) {
    setActiveTab(tab);
    if (tab === "home") setRoute("home");
    if (tab === "report") setRoute("report");
    if (tab === "picks") setRoute("picks");
    if (tab === "profile") setRoute("profile");
  }

  function saveProduct(product: ProductRecommendation) {
    const normalizedProduct = normalizeProduct(product);
    setSavedProducts((prev) => {
      if (prev.some((item) => item.id === normalizedProduct.id)) return prev;
      return [normalizedProduct, ...prev];
    });
  }

  if (route === "home") {
    return (
      <HomeScreen
        activeTab={activeTab}
        onTabChange={switchTab}
        onCreateReview={openCreateReview}
        onOpenHistory={() => {
          setActiveTab("profile");
          setRoute("history");
        }}
        onOpenReport={() => openReport(selectedReview)}
        onOpenPicks={() => {
          setActiveTab("picks");
          setRoute("picks");
        }}
      />
    );
  }

  if (route === "upload") {
    return <UploadScreen onBack={() => setRoute("home")} onPick={handlePickScreenshot} onUseDemo={handleUseDemoData} />;
  }

  if (route === "confirm") {
    return (
      <ConfirmScreen
        metrics={recognizedMetrics}
        previewUri={pickedAsset}
        onBack={() => setRoute("upload")}
        onGenerate={handleGenerate}
      />
    );
  }

  if (route === "loading") {
    return <LoadingScreen />;
  }

  if (route === "report") {
    return (
      <ReportScreen
        review={selectedReview}
        activeTab={activeTab}
        onTabChange={switchTab}
        onCreateReview={openCreateReview}
      />
    );
  }

  if (route === "history") {
    return (
      <HistoryScreen
        reviews={reviews}
        activeTab={activeTab}
        onTabChange={switchTab}
        onSelect={openReport}
        onCreateReview={openCreateReview}
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
        onCreateReview={openCreateReview}
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
        onCreateReview={openCreateReview}
      />
    );
  }

  return <ProductDetailScreen product={selectedProduct} onBack={() => setRoute("picks")} onSave={saveProduct} />;
}
