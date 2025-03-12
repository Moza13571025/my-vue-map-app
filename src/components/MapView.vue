<template>
  <div class="h-screen">
    <h1>地圖頁面</h1>
    <div id="map" class="w-full h-full"></div>
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

<style>
#map {
  height: 100vh;
  width: 100dvw;
}
</style>
