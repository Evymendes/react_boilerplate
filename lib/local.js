// Libs
const webpack = require('webpack');
const DashBoardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL': JSON.stringify('http://localhost:3000'),
        'CALLBACK_URL': JSON.stringify('http://localhost:8080')
      }
    }),
    new DashBoardPlugin()
  ]
};
