
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [

        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
                chunkFilename: '[id].css',
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: 'imgs'
                    }
                }
            },
        ]
    }
}