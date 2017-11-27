const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"       
        })
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(__dirname, 'src', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html')
    })
  ]
};
