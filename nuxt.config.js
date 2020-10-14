
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'https://kit.fontawesome.com/607ff03677.js' }
    ],
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { lang: 'es' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'animate.css/animate.min.css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-glide.js', ssr: true },
    { src: "@/plugins/vClickOutside", ssr: false },
    { src: "@/plugins/vue-zoom", ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  target: 'static',
  router: {
    base: '/Tienda_MiRopa/'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }

}
