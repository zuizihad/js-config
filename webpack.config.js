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
    mode: 'development'  
}
