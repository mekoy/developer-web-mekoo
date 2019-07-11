const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  mode: 'developpement',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/App.jsx'), // Start with js/app.js
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.css$/,
      loader: 'style!css',
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      loader: 'style!scss',
      use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader', 'postcss-loader'],
      })),
    },
    {
      test: /\.json$/,
      loader: 'json',
      include: path.join(__dirname, 'src'),
    }],
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true,
  },
  devtool: 'eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJSPlugin(),
    new OptimizeCSSAssets(),
    new DashboardPlugin()
  );
}
module.exports = config;
