const { CONTENT_TYPES } = require('./content/config/index.js');

export default {
  target: 'static',
  ssr: true,
  server: {
    port: 3000,
    host: '192.168.10.127'
  },
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
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
  loading: { color: '#000' },
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
    '@nuxt/content',
    '@nuxt/components'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    // dir: '../dist',
    async routes () {
      const { $content } = require('@nuxt/content')
      let files = [];

      await CONTENT_TYPES.forEach(async (cType) => 
        (await $content(cType.CONTENT_NAME).only(['path']).fetch())
        .forEach(obj => files.push(obj)));

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
