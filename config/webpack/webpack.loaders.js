const jsRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules|public|config\/webpack/,
  loader: 'babel-loader'
}

const scssRule = scssPlugin => ({
  test: /\.(s(a|c)ss)$/,
  use: scssPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader'
        // options: { alias: { '../img': '../public/img' } }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer')({ browsers: ['>1%', 'last 2 versions'] })
          ]
        }
      },
      { loader: 'sass-loader' }
    ]
  })
})

const cssFontRule = cssFontPlugin => ({
  test: /\.css$/,
  use: cssFontPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })
})

const fontRule = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file-loader',
  options: { name: './fonts/[name].[hash:8].[ext]' }
}

const imgRule = {
  test: /\.(png|jpe?g|gif|ico)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: './img/[name].[hash:8].[ext]',
        limit: 10000
      }
    },
    { loader: 'img-loader' }
  ]
}

module.exports = {
  jsRule,
  scssRule,
  cssFontRule,
  fontRule,
  imgRule
}
