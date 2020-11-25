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
        app: './website/landing/landing.js',
        foothead: './foothead/foothead.js',
        coltype: './coltype/coltype.js',
        cards: './cards/cards.js',
        form: './form/form.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
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
                test: /\.(ttf|eof|woff|woff2|otf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }
        ],
    },

    devServer: {
        port: 5000,
        hot: isDev
    },

    plugins: [
        new Html({
            template: './website/landing/landing.pug',
            chunks: ['app'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './website/registr/registr.pug',
            filename: 'registr.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './website/signin/signin.pug',
            filename: 'signin.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './website/inroom/inroom.pug',
            filename: 'inroom.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './website/roomquest/roomquest.pug',
            filename: 'roomquest.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './foothead/foothead.pug',
            filename: 'foothead.html',
            chunks: ['foothead'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './coltype/coltype.pug',
            filename: 'coltype.html',
            chunks: ['coltype'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './cards/cards.pug',
            filename: 'cards.html',
            chunks: ['cards'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new Html({
            template: './form/form.pug',
            filename: 'form.html',
            chunks: ['form'],
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




