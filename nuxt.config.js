//import colors from "vuetify/es5/util/colors";

export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js Vuetify starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js Vuetify starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    "@nuxtjs/vuetify",
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "nuxt-svg"
    // TODO: Remove it if you want to eject from codeSandbox
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://backend-dev.storm-technologies.com/sandbox/v1',
      pathRewrite: {
        '^/api': ''
      }
    },
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true
    }
  }
};
