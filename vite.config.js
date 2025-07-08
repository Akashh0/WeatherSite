import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cesium from "vite-plugin-cesium";

export default defineConfig({
  base: "/WeatherSite/", // ⚠️ MATCHES your repo name exactly
  plugins: [react(), cesium()],
  define: {
    CESIUM_BASE_URL: JSON.stringify("/WeatherSite/cesium")
  }
});
