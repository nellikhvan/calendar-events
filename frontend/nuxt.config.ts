// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8080'
    }
  }
})

// const { data } = await useFetch(`${useRuntimeConfig().public.apiBase}/your-endpoint`)