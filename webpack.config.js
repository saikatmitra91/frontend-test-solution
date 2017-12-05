const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
]
module.exports = {
  entry: ['babel-regenerator-runtime', './src/app/script/app.js'],
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'https://api.mcmakler.de/v1',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'isomorphic-style-loader',
          { loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: (bundler) => ([
                require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
              ])
            }
          },
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Js app",
      template: "./src/app/index.html"
    })
  ],
};