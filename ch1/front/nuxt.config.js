module.exports = {
  head: {
      title: 'NodeBird'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
 
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  vuetify: {

  },
};