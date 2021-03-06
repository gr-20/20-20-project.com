const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const minifyConfig = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: false
};

module.exports = (env, argv) => {
  const mode = argv.mode || process.env.NODE_ENV || 'development';
  const devMode = mode !== 'production';
  return {
    entry: {
      index: './src/index.js',
      kit: './src/kit.js'
    },
    mode,
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      filename: '[name].[contentHash].js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap: true,
                camelCase: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunks: ['index'],
        minify: minifyConfig
      }),
      new HtmlWebpackPlugin({
        template: 'src/kit.html',
        filename: 'kit.html',
        chunks: ['kit'],
        minify: minifyConfig
      }),
      new HtmlWebpackPlugin({
        template: 'src/404.html',
        filename: '404.html',
        inject: false,
        minify: minifyConfig
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contentHash].css',
        chunkFilename: '[id].[contentHash].css'
      })
    ]
  };
};
