const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //webpack entry pint
    entry: './src/scripts/index.js',
    //webpack output point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //webpack mode
    mode: 'development',

    //working with webpack dev server
    devServer: {
      port: 2222,
      open: true  
    },
    //working with loaders
    module: {
        rules: [
            {
                //working for babel loader
                //regex for searching text
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        //plugin foe individual loaders
                        plugins:
                        ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    //working with plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]  
}
