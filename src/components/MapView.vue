<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css"; // 引入 Leaflet 的 CSS
import { onMounted } from "vue";
import L from "leaflet";

onMounted(() => {
  const map = L.map("map").setView([25.033, 121.5654], 13); //預設地圖中心和縮放級別

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map); //引入 OpenStreetMap 圖磚服務 API並加入版權資訊、放入map中。
});
</script>

<style lang="scss" scoped>
.map-container {
  position: fixed;
  top: 64px; /* 導航欄高度 */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  #map {
    height: 100%;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .map-container {
    top: 56px; /* 響應式導航欄高度 */
  }
}
</style>
