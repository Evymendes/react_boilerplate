// Libs
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

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
        options: { presets: [[ 'es2015', { modules: false }], 'react'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /.*\.(gif|png|svg|jpe?g)$/i,
        loaders: [
          'url-loader',
        ]
      },
      {
        test: /.(ico|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url?limit=50000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
};
