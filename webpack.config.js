const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  /**
   *  Entry point for the bundle
   */
  entry: {
    // 'app' is the chunk name: https://github.com/webpack/docs/wiki/Configuration
    app: PATHS.app
  },
  /**
   * Options for output compilation
   */
  output: {
    path: PATHS.build,
    // [name] will be replaced by the name of the chunk
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack dome'
    })
  ]
}
