const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // For generating the html index page.
const CleanWebpackPlugin = require('clean-webpack-plugin') // For cleaning out the output folder.
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // Unbundle the CSS after bundling - (TODO: why?)
const CopyWebpackPlugin = require('copy-webpack-plugin') // Copy Images

module.exports = {
    entry: [
        './src/js/index.js' //  The main application entry point.
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // The output bundle.
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new MiniCssExtractPlugin(
            {filename: './css/style.css'}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html', // How to generate out html.
            filename: 'index.html' // What to generate.
        }),
        new CopyWebpackPlugin([{ from: 'src/img', to: 'img' }])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist' // Tell webpack-dev-server where to serve content from.
    },
    devtool: 'cheap-module-eval-source-map'
}
