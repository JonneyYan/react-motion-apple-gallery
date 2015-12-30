var path = require('path');
var webpack = require('webpack');

var assetsPath = path.resolve(__dirname, 'static');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index',
  ],
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }, {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url?limit=8192'],
      }
    ],
  },
};
