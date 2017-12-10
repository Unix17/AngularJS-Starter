const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            },
            
            {
                test: /\.ts$/,
                exclude: [ 
                    /node_modules/,
                    /\.spec\.ts$/
                ],
                use: 'istanbul-instrumenter-loader',
                enforce: 'post'
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader'
            },

            {
                test: /.html$/,
                use: 'html-loader'
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {}
};
