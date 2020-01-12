# js-config

webpack basic concepts:
1. Entry
2. Output
3. Loaders
4. Plugins
5. Mode


npm init -y

npm i -D webpack webpack-cli

# Webpack entry point:
 entry: './src/scripts/index.js'
# Webpack output point:
 output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
# Webpack Mode setting:
mode: 'development'



# use babel js for converting ES6 code to ES5 for all browser support by using loaders
out of the box webpack only understands javaScripts and JSON files. 
Loaders allow webpack to process other types of files and convert them into a valid module.   

webpack & babel js are two different concept. but how we connect them.
babel js connect with webpack by using loaders. 

npm i -D babel-loader @babel/core @babel/preset-env webpack

npm i -D @babel/plugin-proposal-class-properties

# plugin: 
working with css loader and his plugin
npm i -D css loader mini-css-extract-plugin