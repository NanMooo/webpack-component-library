const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
    button: './packages/button',
    aside: './packages/aside',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'ComLib',
      type: 'umd',
    },
    clean: true,
  },
  externals: ['vue'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: { loader: 'vue-loader' },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
