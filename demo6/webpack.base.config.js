var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src',
	output: {
		path: 'builds',
		filename: 'bundle.js',
		publicPath: 'builds/',
	},
	module: {
		preLoaders: [
			{
				test: /\.js/,
				loader: 'eslint',
			}, 
			{
				test: /\.js/,
				loader: 'baggage?[file].html=template&[file].scss',
			}
		],
		loaders: [
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '\\src',// window的路径比较特别，不能使用'/src'
			},
			{
				test: /\.scss/,
				loader: ExtractPlugin.extract('style', 'css!sass'),
				// loader: 'style!css!sass',
				// loaders: ['style', 'css', 'sass'],
			},
			{
				test: /\.html/,
				loader: 'html',
			},
			{
				test: /\.(png|gif|jpe?g|svg)$/i,
				// loader: 'url?limit=10000',
				loader: 'url',
				query: {
					limit: 10000,
				}
			}
		],
	},
	plugins: [
		new ExtractPlugin('bundle.css'),// <=== where should content be piped
		new webpack.optimize.CommonsChunkPlugin({
			// filename: 'vender.js',
			// name:      'common', // Move dependencies to our main file
			children:  true, // Look for common dependencies in all children,
			async : true,
			minChunks: 2, // How many times a dependency must come up before being extracted
		}),
	],
};
