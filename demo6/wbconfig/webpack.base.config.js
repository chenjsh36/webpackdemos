var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin'); 
module.exports = {
	entry: './src',
	output: {
		path: 'builds',
		filename: 'bundle.js',
		publicPath: 'builds/',
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '\\src',// window的路径比较特别，不能使用'/src'
			},
			{
				test: /\.scss/,
				loader: 'style!css!sass',
				// loaders: ['style', 'css', 'sass'],
			},
			{
				test: /\.html/,
				loader: 'html',
			}
		],
	},
	plugins: [
		new CleanPlugin('builds'),

		new webpack.optimize.CommonsChunkPlugin({
			// filename: 'vender.js',
			// name:      'common', // Move dependencies to our main file
			children:  true, // Look for common dependencies in all children,
			async : true,
			minChunks: 2, // How many times a dependency must come up before being extracted
		}),
	],
};
