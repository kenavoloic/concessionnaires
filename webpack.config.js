const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const racineApplication = fs.realpathSync(process.cwd());

const resolutionCheminApplication = cheminRelatif => path.resolve(racineApplication, cheminRelatif);

const HOTE = process.env.HOST || 'localhost';

process.env.NODE_ENV = 'production';

const sortie = 'distribution';
const prodDev = 'production';

const resolutionsRessources = {
    outils: path.join(__dirname, 'src', 'outils'),
    composants: path.join(__dirname, 'src', 'composants'),
    pages: path.join(__dirname, 'src', 'composants', 'pages'),
    patrons: path.join(__dirname, 'src', 'patrons'),
    chemins: path.join(__dirname, 'src', 'chemins'),
    images: path.join(__dirname, 'src', 'images')
};

const configurationClient = {
    target: 'web',
    mode: 'production',
    entry: {
        client: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, sortie),
        filename: 'js/[name].js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/i, 
                exclude: /node_modules/, 
                include: resolutionCheminApplication('src'),
                use: 'babel-loader'
            },
            {test: /\.less$/i, use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']},
        ]
    },
    resolve: {
        alias: resolutionsRessources
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'patrons', 'patron.html'),
            favicon: path.resolve(__dirname, 'src', 'images', 'favicon.ico'),
            inject: true        
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
    ,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    
};

module.exports = [configurationClient];

