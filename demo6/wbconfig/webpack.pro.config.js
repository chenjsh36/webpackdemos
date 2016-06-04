var webpack = require('webpack')
var config = require('./webpack.base.config')
// var CleanPlugin = require('clean-webpack-plugin'); // 第三方插件
config.debug = false
// 资源映射
config.devtool = false 
// 版本化，为文件添加哈希值
config.output.filename = '[name]-[hash].js'
config.output.chunkFilename = '[name]-[chunkhash].js'

config.plugins = (config.plugins || []).concat([

	// Cleanup the builds/ folder before
	// compiling our final assets
	// new CleanPlugin('builds'
		// , {
		// "root": "[location of webpack.config]", // An absolute path for the root.
		// "verbose": true, // Write logs to console.
		// "dry": false, // Do not delete anything, good for testing.
	// }
	// ),

	// This plugin looks for similar chunks and files
	// and merges them for better caching by the user
	new webpack.optimize.DedupePlugin(),

	// This plugins optimizes chunks and modules by
	// how much they are used in your app
	new webpack.optimize.OccurenceOrderPlugin(),

	// This plugin prevents Webpack from creating chunks
	// that would be too small to be worth loading separately
	new webpack.optimize.MinChunkSizePlugin({
		minChunkSize: 51200, // ~50kb
	}),

	// This plugin minifies all the Javascript code of the final bundle
	new webpack.optimize.UglifyJsPlugin({
		mangle:   true,
		compress: {
			warnings: false, // Suppress uglification warnings
		},
	}),

	// This plugins defines various variables that we can set to false
	// in production to avoid code related to them from being compiled
	// in our final bundle
	new webpack.DefinePlugin({
		__SERVER__:      false,
		__DEVELOPMENT__: false,
		__DEVTOOLS__:    false,
		'process.env':   {
			BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
])

module.exports = config
