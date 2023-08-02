//require path and html webpack plugin to set up WDS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//use index.js as entry, check for file extensions in resolve, transpile in the rules section

module.exports = {
	mode: process.env.NODE_ENV, //production and dev mode can comm. w/eachother
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				// import css
				test: /\.s[ac]ss$/i,
				include: path.resolve(__dirname, 'client'),
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			},
		],
	}, //server running in 3000, webpack running on 8080
	devServer: {
		port: 8080,
		open: true,
		hot: true,
		compress: true,
		proxy: {
      '/api': {
        target: 'http://localhost:8080',
        router: 'http://localhost:3000',
        secure: false,
      }
		},
		historyApiFallback: true,
	},
};
//add start and build scripts to package.json

//r3UB5ctlFrJYuIRqoSrjMTwLqYl5Cui4BX8Ekn7xakoqFt2q3wGOzYR4PFjKEfnn