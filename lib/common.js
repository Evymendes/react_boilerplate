// Libs
const path = require("path");

const PATHS = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
  styles: path.join(__dirname, '../styles'),
  fonts: path.join(__dirname, '../build/assets/fonts')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: {
      disableDotRule: true
    },
    hot: true,
    inline: true,
    stats: 'errors-only',
    open: true,
    compress: true,
    host: process.env.HOST,
    port: process.env.PORT
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}],
            'react'
          ]
        }
      }
    ]
  }
};
