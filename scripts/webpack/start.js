/**
 * 1. webpack
 * 2. webpack dev server
 * 3. webpack hot middleware
 * 4. webpack config
 * 5.compiler
 * 6. init
*/

// Constants
const { HOST, PORT } = require('./constants');
// Core
const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');

const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
    host:               HOST,
    port:               PORT,
    historyApiFallback: true,
    overlay:            true,
    quiet:              true,
    clientLogLevel:     'none',
    noInfo:             true,
    open:               true,
    after:              (app) => {
        app.use(
            hot(compiler, {
                log: false,
            }),
        );
    },
});

server.listen(PORT, HOST, () => {
    console.log(
        `${chalk.greenBright('Server listening on')} ${chalk.greenBright(`http://${HOST}:${PORT}`)}`,
    );
});
