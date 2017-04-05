// webpack 插件配置
const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');

exports.plugins =[
            new webpack.ProvidePlugin({
                $: 'jquery'
            }),
            new WebpackNotifierPlugin({
                title: 'Webpack 编译成功',
                contentImage: path.resolve(process.cwd(), './img/avatar.jpeg'),
                alwaysNotify: true
            }),
            new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: Infinity
            })
];

exports.loaders = [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                use: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            },
            {
                test: /\.html/,
                use: "html-loader?" + JSON.stringify({
                    minimize: false,
                    attrs:false
                })
            }
];
