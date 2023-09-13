// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   
    css: ['/node_modules/primeflex/primeflex.css', 'primeicons/primeicons.css','/node_modules/primevue/resources/themes/lara-light-indigo/theme.css'],
    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
      ],
      image: {
        format: ['webp'],
        dir: 'assets/images'
      },
      autoImports : [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
      build: {
        transpile: ["primevue"]
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
        },
      ],
})
