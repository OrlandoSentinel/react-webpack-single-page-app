var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index',
  
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle-build.js?[hash]',
        publicPath: './'
  },
  
  plugins: [
        new ExtractTextPlugin('app-build.css?[hash]'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
  ],
  
  module: {
    loaders: [
        {
            test: require.resolve('jquery'),
            loader: 'expose?$!expose?jQuery'
        },
        
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&-autoprefixer&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader!sass-loader')
        },
        
        {
            test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
            loader: "url-loader?mimetype=application/font-woff&name=[name]-build.[ext]?[hash]"
        },
        
        {
            test: /\.(ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/,
            loader: "file-loader?name=[name]-build.[ext]?[hash]"
        },
        
        {
            test: /\.(png|jpg|gif)$/, 
            loader: 'file-loader?name=[name]-build.[ext]?[hash]'
        }
    ]
  },
  
  postcss: function(){
    return [autoprefixer];
  }
};