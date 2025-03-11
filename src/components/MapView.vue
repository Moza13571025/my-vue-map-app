<template>
  <div class="h-screen">
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import L from "leaflet";

export default {
  setup(){
    onMounted(()=>{
      const map = L.map("map").setView([25.033, 121.5654], 13)//預設地圖中心和縮放級別

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);//引入 OpenStreetMap 圖磚服務 API並加入版權資訊、放入map中。
    })
  }
}
</script>

<style>
#map {
  height: 100vh;
}
</style>