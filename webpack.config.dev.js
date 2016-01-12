var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
        'webpack-hot-middleware/client',
        './src/index'
  ],
  
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
  },
  
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
            loader: 'style-loader!css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
        },
        
        {
            test: /\.(png|jpg|gif)$/, 
            loader: 'url-loader?limit=8192'
        }
    ]
  },
  
  postcss: [
    require('autoprefixer')({
        browsers: [
            'Firefox >= 1',
            'Chrome >= 1',
            'Safari >= 5',
            'Edge >= 1',
            'IE >= 9',
            'iOS >= 6',
            'ChromeAndroid >= 1',
            'FirefoxAndroid >= 1',
            'Android >= 4'
		]
	})
  ]
};