const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    path.resolve(__dirname, 'src/styles/base.css'),
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist/build'),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: [/src/, /node_modules/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new StyleLintPlugin(),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components/'),
    },
  },
};
