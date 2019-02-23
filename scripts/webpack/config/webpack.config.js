// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Constants
const { PROJECT_ROOT, SOURCE, BUILD, STATIC, HOST, PORT } = require('../constants');

// Object
// Function
// Promise
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        output:  {
            path:     BUILD,
            filename: 'bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin([ 'dist', 'build' ], {
                root:    PROJECT_ROOT,
                verbose: true,
            }),
            new HtmlWebpackPlugin({
                template: `${STATIC}/template.html`,
                title:    'Learning webpack 🙂',
            }),
            new HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
    };
};
