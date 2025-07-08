// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cesium from "vite-plugin-cesium";

export default defineConfig({
  base: "/WeatherSite/", // ✅ still your repo name
  plugins: [react(), cesium()],
  define: {
    // ✅ Correct path matching your public/cesium folder
    CESIUM_BASE_URL: JSON.stringify("/cesium")
  }
});
