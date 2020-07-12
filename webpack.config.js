const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      { // Rule #1：Transform ES6 and JSX syntax
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      { // Rule #2: Process CSS
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, // allows us to import modules without needing to add their extensions, e.g. import React from 'React'
  output: { // tells Webpack where to put the bundled code, and also tell webpack-dev-server where to serve files from
    path: path.resolve(__dirname, "dist/"),
    publicPath: "../dist/",
    filename: "bundle.js"
  },
  devServer: { // set up webpack-dev-server
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // Configure this so code changes are reflected immediately on the pages
};