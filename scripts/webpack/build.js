/**
 * 1. webpack
 * 2.compiler
 * 3.webpack config
 * 4. init
*/
// Core

const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
    if (error) {
        // error config
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }
    const info = stats.toString({
        hash:    true,
        colors:  true,
        modules: false,
    });
    console.log('→ info', info);
    console.log('→ chalk.greenBright', chalk.greenBright('BUILD complete'));

    if (stats.hasErrors()) {
        // ошибка во время компиляции, битый импорт, неправильный импорт
        console.log(chalk.redBright('ERROR'));
        console.error(info);
    }

    if (stats.hasWarnings()) {
        // ворнинг во время компиляции
        console.log(chalk.redYellow('Warning'));
        console.error(info);
    }
});
