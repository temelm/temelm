const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env) => {
  const isProdBuild = (env.production === true)
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            (isProdBuild) ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|ico|jpe?g|png|svg)$/,
          exclude: /node_modules/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        favicon: './src/images/favicon.ico'
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }),
      new CopyWebpackPlugin([{
        from: './src/server/mail.php',
        to: './mail.php',
        toType: 'file'
      }])
    ],
    optimization: {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin({}),
        new UglifyjsWebpackPlugin({
          parallel: true
        })
      ]
    }
  }
}
