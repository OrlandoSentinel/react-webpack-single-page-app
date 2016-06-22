var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
        'webpack-hot-middleware/client',
        './src/index'
  ],
  
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/build/bundle.js',
        publicPath: '/'
  },
  
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
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
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
        },
        
        {
            test: /\.(png|jpg|gif)$/, 
            loader: 'file-loader?name=images/[name].[ext]'
        }
    ]
  }
};