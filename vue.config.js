const { defineConfig } = require('@vue/cli-service')
module.exports = {
  //... other configurations...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7036',
        changeOrigin: true
      },
      '/auth': {
        target: 'http://localhost:7036',
        changeOrigin: true
      }
  },
}
}