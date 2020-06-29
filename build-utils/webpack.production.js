const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [

        new MiniCssExtractPlugin(
            {
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'imgs'
                    }
                }
            },
        ]
    }
}