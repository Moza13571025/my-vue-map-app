import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base:"/",//確保開發時資源路徑正確
  plugins: [vue()],
})
