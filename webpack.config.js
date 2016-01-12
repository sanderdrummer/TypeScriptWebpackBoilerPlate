var webpack = require('webpack');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
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