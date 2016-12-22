const { readFileSync } = require('fs');
const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelSettings
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'svelte-loader'
      }
    ]
  }
};
