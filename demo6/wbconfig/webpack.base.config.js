var webpack = require('webpack');

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

	],
};
