export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fadhila crop sciences limited',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Fadhila crop sciences limited' },
      { hid: 'description', name: 'description', content: 'Agricultural solutions to help farmers increase their outputs per unit. Fadhila leverages digital agricultural solutions to build, scale and improve the yield and livelihood of farmers, by providing farmers with opportunities.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'Keywords', content: 'Fadhila, crop science, Agricultural solutions, farm solutions, zabi kashe, mai mai, mai adawa, herbicides, maza-maza, insecticide, kisa, na-kwaya, mai-zabe' },
      { name: 'theme-color', content: '#00ADEE' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fadhila-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
    'materialize-css/dist/css/materialize.min.css',
    'material-design-icons/iconfont/material-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
