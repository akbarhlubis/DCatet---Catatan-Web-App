import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        theme_color: "#2E2E2E",
        background_color: "#ffffff",
        scope: "/",
        start_url: "/",
        name: "D'Catet: Lupakan Kebiasan Sering Kelupaan",
        short_name: "Dcatet",
        description:
          "D'Catet: Lupakan Kebiasan Sering Kelupaan dengan mencatat hal hal penting",
        screenshots: [
          {
            src: "/img/Screenshoot-1.png",
            sizes: "1280x720",
            type: "image/png",
          },
          {
            src: "/img/Screenshoot-2.png",
            sizes: "1280x720",
            type: "image/png",
          }
        ],
        icons: [
          {
            src: "/img/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/img/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/img/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/img/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/DCatet---Catatan-Web-App",
});
