import "vuetify/styles";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify();
createApp(App).use(router).mount("#app");
