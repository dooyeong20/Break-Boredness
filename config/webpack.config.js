const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const __ROOT = process.cwd();
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  target: ['web', 'es5'],
  entry: './src/',
  output: {
    path: path.resolve(__ROOT, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: path.resolve(__ROOT, 'src/app'),
      components: path.resolve(__ROOT, 'src/components'),
    },
  },
  devServer: {
    contentBase: path.resolve(__ROOT, 'dist'),
    port: process.env.PORT,
    compress: true,
    hot: true,
    overlay: true,
    stats: 'errors-warnings',
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Random Activity',
      template: path.resolve(__ROOT, 'index.html'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      entries: true,
      profile: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      cache: true,
      fix: true,
    }),
  ],
};
