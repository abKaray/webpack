// Network
const { path: PROJECT_ROOT } = require('app-root-path');
const { resolve } = require('path');
// Directories
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE = resolve(PROJECT_ROOT, './source');
exports.BUILD = resolve(PROJECT_ROOT, './build');
exports.STATIC = resolve(PROJECT_ROOT, './static');

// Network
exports.HOST = 'localhost';
exports.PORT = 3000;
