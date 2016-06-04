var path = require('path');

module.exports = {
	entry: './src',

	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publishPath: '/dist/'
	},
	devServer: {
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/, loader: 'babel', exclude: /node_modules/
			},
			{
				test: /\.vue/, loader: 'vue'
			}
		]
	},
	vue: {
		loaders: {
			css: 'style!css!autoprefixer!less'
		}
	}
}