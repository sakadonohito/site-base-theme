const buildEnv = process.env.NODE_ENV;
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
   devServer: {
		contentBase: "./sample",
		hot: true,
		inline: true,
		open: true
    },
	entry: {
		style: './src/css/style.scss'
	},
	output: {
		path: path.join(__dirname,'sample/css/custom'),
		filename: "[name].css"
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader?minimize')
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?minimize')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}];
