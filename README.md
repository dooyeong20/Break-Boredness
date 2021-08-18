# Break-Boredness

Escape from boring time and get some fun!

## Dependencies

```
# react
npm i react react-dom

# babel
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

# webpack
npm i -D webpack webpack-cli webpack-dev-server

# dotenv
npm i -D dotenv

# HTML Plugin
npm i -D html-webpack-plugin

# styled-components
# babel-plugin-styled-components: styled-components 디버깅을 쉽게하고, 최적화를 위함
npm i -D styled-components babel-plugin-styled-components

# eslint
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-webpack-plugin
```

## Webpack Setting

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html을 자동 생성해주고, js 파일을 엮어주기 위한 플러그인
const ESLintPlugin = require('eslint-webpack-plugin'); // eslint를 위한 플러그인
const webpack = require('webpack');
const path = require('path');
const __ROOT = process.cwd();

require('dotenv').config(); // .env를 파싱하기 위해서 config 함수를 실행해줌

module.exports = {
  mode: process.env.NODE_ENV,
  target: ['web', 'es5'], // target에 'es5'를 설정해주지 않으면 es6 문법(arrow function 등)이 남아있음
  entry: './src/',
  output: {
    path: path.resolve(__ROOT, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: path.resolve(__ROOT, 'src/app'), // 절대 경로를 설정해주기 위함
      components: path.resolve(__ROOT, 'src/components'), // 절대 경로를 설정해주기 위함
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
```
