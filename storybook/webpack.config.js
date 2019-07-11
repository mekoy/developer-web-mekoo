const path = require('path');

module.exports = ({ config }) => {
  // Do not transform vendor's CSS with CSS-modules
  // The point is that they remain in global scope.
  // Since we require these CSS files in our JS or CSS files,
  // they will be a part of our compilation either way.
  // So, no need for ExtractTextPlugin here.
  config.module.rules.push({
    test: /\.scss$/,
    include: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src/styles'),
    ],
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  });
  config.module.rules.push({
    test: /\.s?css$/,
    // include: path.resolve(__dirname, '../app'),
    exclude: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src/styles'),
    ],
    loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!sass-loader',
  });
  config.resolve.extensions.push('.scss');

  config.resolve.modules.push(path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules'));

  return config;
};
