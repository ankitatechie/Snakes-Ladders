'use strict';

var path = require('path'); // it helps us manipulate file paths
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // helps us auto-generate html

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(), // to make shorter hash ids
        new webpack.HotModuleReplacementPlugin(), // to auto reload page on save without changing store state
        new webpack.NoErrorsPlugin(), // it doesn't exit from CLI if there is an error

        // This plugin helps us pass variables from webpack to our js files. 
        // We can for example pass what environment we are in (dev or prod) 
        // so that our js files act accordingly. This way we can turn off 
        // development tools if we are in a production environment.
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
    module: {
        // Loaders are what basically replace other task runners like gulp or grunt. 
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
        ]
    }
};
