const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./lib/common');
const local = require('./lib/local');
const TARGET = process.env.npm_lifecycle_event;

switch(TARGET) {
case 'start':
  module.exports = merge(common, local);
  break;
default:
  break;
}
