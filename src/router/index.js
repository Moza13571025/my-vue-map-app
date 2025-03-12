//1.引入必要模組
import { createRouter, createWebHistory } from "vue-router"; //用vue-router的內建函式，建立路由實例、設定路由模式。
import MapView from "../components/MapView.vue"; //在特定url下渲染指定的vue元件

// 使用動態導入以實現代碼分割
const CommitView = () => import('../views/CommitView.vue');

//2.定義路由
const routes = [
  { path: "/", component: MapView },
  { path: "/commit", component: CommitView }
];

//3.以createRouter()建立路由實例(instance)
const router = createRouter({
  history: createWebHistory(), //使用 HTML5 的 History API，使 URL 看起來更乾淨
  routes,
});

//4.匯出路由實例
export default router;
