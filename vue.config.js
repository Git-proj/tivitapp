module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/v1": {
        target: "https://interview.tivit.io/",
        secure: false,
        logLevel: "debug",
        changeOrigin: true
      }
    },
  }
}
