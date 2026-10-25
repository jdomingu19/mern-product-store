// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
