const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');


const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/main/js/app.js',
    },
    devtool: 'sourcemaps',
    resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
	},
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
    },
	plugins: [new MonacoWebpackPlugin()],
};