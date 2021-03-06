const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const fs = require('fs')


module.exports = {
    entry: [
        './src/scripts/main.js',
        './src/styles/main.scss'
    ],
    output: {
        filename: './scripts/script.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/scripts'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: 'env'
                }
            }
        },
        {
            test: /\.(sass|scss)$/,
            include: path.resolve(__dirname, 'src/styles'),
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
                ]
            })
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './styles/main.css',
            allChunks: true,
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
        {
            from: './src/images',
            to: './images'
        },
        {
            from: './src/fonts',
            to: './fonts'
        }
        ]),
        new ImageminWebpackPlugin([
            {
                test:  /\.(jpe?g|png|gif|svg)$/i
            }
        ])
    ]
};