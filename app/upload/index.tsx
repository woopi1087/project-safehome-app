import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PdfUploadScreen() {
  const [selectedPdf, setSelectedPdf] = useState<null | unknown>(null);

  return (
    <View style={styles.container}>
      {/* 중앙 영역 */}
      <View style={styles.center}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>PDF 업로드</Text>
        </TouchableOpacity>
      </View>

      {/* 하단 영역 */}
      <TouchableOpacity
        style={[
          styles.analyzeButton,
          !selectedPdf && styles.analyzeButtonDisabled,
        ]}
        disabled={!selectedPdf}
      >
        <Text style={styles.analyzeText}>분석 시작</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadButton: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  analyzeButton: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },
  analyzeButtonDisabled: {
    backgroundColor: "#CBD5E1",
  },
  analyzeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
