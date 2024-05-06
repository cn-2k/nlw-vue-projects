// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/base.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "nuxt-lucide-icons"],
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },
  ssr: false,
})
