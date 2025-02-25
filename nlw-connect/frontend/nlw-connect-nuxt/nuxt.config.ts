import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-lucide-icons',
    '@vee-validate/nuxt',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  features: {
    inlineStyles: false,
  },

  compatibilityDate: '2025-02-20',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
})
