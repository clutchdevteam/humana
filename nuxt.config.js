const axios = require('axios')

const isPreview = process.env.NODE_ENV === 'development'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',

  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    STORYBLOK_PREVIEW_API_KEY: process.env.STORYBLOK_PREVIEW_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },

  loading: {
    color: '#2D9AFF',
    height: '2px',
    throttle: 0,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Humana Code Academy',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'title', name: 'title', content: 'Humana Code Academy' },
      { name: 'format-detection', content: 'telephone=no' },
      [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.humanacode.ai',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Land your dream job in data science.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'A fresh and faster approach to learning data science.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://humanacode.ai/og-image.png',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://humanacode.ai',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Land your dream job in data science.',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'A fresh and faster approach to learning data science.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://humanacode.ai/og-image.png',
        },
      ],
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=EB+Garamond&family=IBM+Plex+Sans:wght@500;700&display=swap',
      },
    ],
  },

  generate: {
    concurrency: 25,
    fallback: true,
    crawler: false, // Revisit in the future
    routes: function (callback) {
      const token = isPreview
        ? process.env.STORYBLOK_PREVIEW_API_KEY
        : process.env.STORYBLOK_API_KEY

      const version = isPreview ? 'draft' : 'published'
      let cacheVersion = 0
      // ignore these files and folders
      const ignoreFiles = ['home', 'global', 'sitefooter']

      const routes = ['/']

      const getRoutes = async (ignoreFiles) => {
        axios
          .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
          /* eslint-disable-next-line camelcase */
          .then((space_res) => {
            // timestamp of latest publish
            cacheVersion = space_res.data.space.version
            // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
            axios
              .get(
                `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`
              )
              .then((res) => {
                Object.keys(res.data.links).forEach((key) => {
                  if (!ignoreFiles.includes(res.data.links[key].slug)) {
                    if (!(res.data.links[key].is_folder && !res.data.links[key].is_startpage)) {
                      routes.push('/' + res.data.links[key].slug)
                    }
                  }
                })

                callback(null, routes)
              })
          })
      }

      getRoutes(ignoreFiles)

      return routes
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/wicg-inert.client.js',
    '~/plugins/rich-text-renderer.js',
    '~/plugins/formRoute.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_PREVIEW_API_KEY,
        cacheProvider: 'memory',
      },
    ],
    'portal-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }

      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })

      config.node = {
        fs: 'empty',
      }
    },
  },
}
