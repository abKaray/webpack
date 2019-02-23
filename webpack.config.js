// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Object
// Function
// Promise
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        output:  {
            path:     resolve(__dirname, './build'),
            filename: 'bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin([ 'dist/*' ]),
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Learning webpack',
            }),
        ],
    };
};
