console.log(`Building Nuxt project for ${process.env.NODE_ENV}`);

module.exports =  {
  mode: 'universal',
  buildDir: '../prod/functions/nuxt_public',
  /*
  ** Headers of the page
  */
  head: {
    title: "Austin Fay",
    meta: [
      { charset: 'utf-8' },
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-vuikit',
    [
      'storyblok-nuxt',
      {
        accessToken: (process.env.NODE_ENV == 'production')?
        'fn3RN4u4Gu03oLoJEVR1tQtt' :
        'omIlKYHVd2TSMA5AT9G4Nwtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  vuikit: {
    defaultTheme: true,
    icons: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: '/nuxt_assets',
    extend (config, ctx) {
    }
  }
}
