export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Izabela Magiera | Jamstack Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Jamstack front-end developer building modern, user centred websites and ecommerce shops.',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Izabela Magiera | Jamstack developer',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Full stack front-end developer building modern websites and ecommerce shops',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/imcrtv-social.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Wesbite of full stack developer',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Izabela Magiera | Jamstack developer',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Full stack front-end developer building modern websites and ecommerce shops',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/imcrtv-social.jpg',
      },
      // {
      //   hid: 'og:image:secure_url',
      //   property: 'og:image:secure_url',
      //   content: this.image,
      // },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Izabela Magiera | Jamstack developer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/imcrtv-favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/fxp6opt.css',
        media: 'all',
      },
    ],
    script: [
      {
        hid: 'scrollTrigger',
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js',
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-concise-slider.js', mode: 'client' }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-122317265-1',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
