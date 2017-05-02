const path = require('path');

const PATHS = {
  components: path.join(__dirname, '../components'),
  build: path.join(__dirname, '../build'),
  fonts: path.join(__dirname, '../build/assets/fonts')
};

module.exports = {
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!stylus-loader',
        include: [PATHS.components]
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
  }
}
