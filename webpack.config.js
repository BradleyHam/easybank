const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ mode } = { mode: "production" }) => {
    return merge({
        mode,
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
            ]
        }
    }, modeConfig(mode)
    );
} 