// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@vueuse/nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      strict: true,
      sensitive: true
    }
  },
  compatibilityDate: '2024-11-01',
  // Route rules
  // routeRules: {
  //   '/blog/**': { swr: true },
  //   '/admin/**': { ssr: false }
  // }
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  eslint: {
    config: {
      stylistic: {
        braceStyle: '1tbs',
        commaDangle: 'never',
        quotePryops: 'as-needed',
        jsx: false,
        indent: 2,
        semi: false
      }
    }
  }
})