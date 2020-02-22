const path = require('path');
const Html = require('html-webpack-plugin');
const cssExtract = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



//--------------------------------------------------------------


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

let cssCompile = add => {
    let box = [{
        loader: cssExtract.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
    },
        'css-loader'
    ]

    if (add) box.push(add);

    return box;
}


//-------------------------------------------------------

module.exports = {
    context: path.resolve(__dirname, './assets'),
    entry: {
        col: './coltype/coltype.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.s[cs]ss$/,
                use: cssCompile('sass-loader')
            },
            {
                test: /\.css$/,
                use: cssCompile()
            },
            {
                test: /\.(ttf|svg|ttf|eof)$/,
                loader: 'file-loader'
            },
        ]
    },

    devServer: {
        port: 3000,
        hot: isDev
    },

    plugins: [
        new Html({
            template: './coltype/coltype.pug',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new cssExtract({
            filename: '[name].css'
        })
    ]
}