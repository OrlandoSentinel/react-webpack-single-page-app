var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index',
  
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.min.js',
        publicPath: './'
  },
  
  plugins: [
        new HtmlWebpackPlugin({
            template: 'templates/prod.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('app.min.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
  ],
  
  module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        
        {
            test: /\.json?$/,
            loader: 'json-loader'
        },
        
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader')
        },
        
        {
            test: /\.(png|jpg|gif)$/, 
            loader: 'url-loader?limit=8192'
        }
    ]
  }
};