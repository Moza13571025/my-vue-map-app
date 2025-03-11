import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import router from "./router";
import "leaflet/dist/leaflet.css"; // Leaflet 地圖需要 CSS

const vuetify = createVuetify();
// createApp(App).use(router).use(vuetify).mount("#app");

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
