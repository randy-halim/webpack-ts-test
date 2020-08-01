const webpack = require('webpack');
const { resolve } = require('path');

/** @type {webpack.Configuration} */
module.exports = {
	mode: process.env.NODE_ENV || 'development',
	context: resolve(__dirname),
	entry: './index.ts',
	module: {
		rules: [{
			test: /\.ts?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}],
	},
	resolve: { extensions: ['.tsx', '.ts', '.js'] },
	output: { path: resolve(__dirname, 'dist') }
};