// 一个常见的`webpack`配置文件
const webpack = require('webpack');

module.exports = {
  entry: "./src/entry-with-compiler.ts", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",
    filename: "myVue.js"
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true
  },
  module: {
    rules: [{
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};