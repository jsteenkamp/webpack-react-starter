const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devServer: {
    port: 3000,
    contentBase: './public',
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
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new StyleLintPlugin(),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components/'),
      Types: path.resolve(__dirname, './src/types/'),
    },
  },
};
