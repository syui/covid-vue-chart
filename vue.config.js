module.exports = {
  publicPath: '/covid-vue-chart/',
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  css: {
    extract: {
      filename: '[name].css',
      chunkFilename: '[name].css'
    },
  },
}
