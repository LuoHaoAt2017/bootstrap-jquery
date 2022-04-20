const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, 'src/index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '回到前端的古典时代',
      template: path.resolve(__dirname, 'public/index.html'),
      // favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
    new CleanWebpackPlugin()
  ]
}