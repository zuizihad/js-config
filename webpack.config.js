const path = require('path');

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
                        plugins:
                        ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }  
}
