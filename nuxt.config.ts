// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "Learners",
      link: [{ rel: "icon", type: "image/png", href: "./logo.png" }],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
});