const CleanPlugin = require('clean-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsPlugin = require('favicons-webpack-plugin')
const merge = require('webpack-merge')

const path = require('path')

const sourceDirectory = path.resolve(__dirname, './src')
const buildDirectory = path.resolve(__dirname, './dist')

const devConfig = require('./config/webpack/webpack.dev.js')
const prodConfig = require('./config/webpack/webpack.prod.js')
const rules = require('./config/webpack/webpack.loaders.js')

const cssFontPlugin = new ExtractTextPlugin('./css/[name].fonts.[hash:8].css')
const scssPlugin = new ExtractTextPlugin('./css/[name].styles.[hash:8].css')

const commonConfig = {
  entry: {
    app: `${sourceDirectory}/index.js`
  },
  output: {
    path: buildDirectory,
    publicPath: '/',
    filename: '[name].bundle.min.js'
  },
  plugins: [
    new CleanPlugin(buildDirectory),
    new HTMLPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new FaviconsPlugin({
      logo: './public/img/logo-it.png',
      prefix: 'img/[hash:8].',
      // emitStats: false,
      // statsFilename: 'iconstats-[hash].json',
      persistentCache: false,
      // inject: true,
      // background: '#fff',
      // title: 'Webpack App',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    cssFontPlugin,
    scssPlugin
  ],
  module: {
    rules: [
      rules.jsRule,
      rules.scssRule(scssPlugin),
      rules.cssFontRule(cssFontPlugin),
      rules.fontRule,
      rules.imgRule
    ]
  }
}

module.exports = (env = {}) =>
  merge(commonConfig, env.prod ? prodConfig : devConfig)
