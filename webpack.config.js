const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const serveStatic = require('serve-static')

const rootPath = path.resolve(__dirname)
const srcPath = path.resolve(rootPath, 'src')

module.exports = {
  entry: path.resolve(srcPath, 'index.js'),
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['url-loader'],
        type: 'javascript/auto'
      }
    ]
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    after: app => {
      app.use('/public', serveStatic(path.resolve(rootPath, 'public')))
    }
  }
}
