// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-headlessui",
    "@nuxt/test-utils/module",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@samk-dev/nuxt-vcalendar"
  ],

  experimental: {
    reactivityTransform: true,
  },

  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  colorMode: {
    classSuffix: ""
  },

  headlessui: {
    prefix: "",
  },

  devtools: true,

  tailwindcss: {
    exposeConfig: true
  },

  typescript: {
    shim: false
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },
});