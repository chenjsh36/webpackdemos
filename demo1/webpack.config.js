const webpack = require('webpack');

module.exports = {
	entry: './src/entry.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jade$/, loader: "jade" },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.css$/, loaders: ["style", "css"] },
		]
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
	]
};
