var webpack = require('webpack')
var config = require('./webpack.base.config')

config.debug = true
config.devtool = 'eval'
config.plugins = (config.plugins || []).concat([
	// new webpack.optimize.CommonsChunkPlugin({
	// 	// filename: 'vender.js',
	// 	// name:      'common', // Move dependencies to our main file
	// 	children:  true, // Look for common dependencies in all children,
	// 	async : true,
	// 	minChunks: 2, // How many times a dependency must come up before being extracted
	// }),
])

module.exports = config