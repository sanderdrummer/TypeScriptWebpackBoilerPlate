var webpack = require('webpack');

// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var pathToLessLoader = path.resolve(__dirname, 'dist/bundle(bundle.js');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['exports', 'require']
            }
        })
    ]
};
