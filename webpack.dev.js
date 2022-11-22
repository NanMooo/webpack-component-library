const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './example/src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  devServer: {
    static: [
      path.resolve(__dirname, 'example/public'),
      path.resolve(__dirname, 'dist'),
    ],
    port: 8080,
    host: 'localhost',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'example/public/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
  ],
}
