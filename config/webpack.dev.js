const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: 'development',

	// Control how source maps are generated
	devtool: 'inline-source-map',

	// Spin up a server for quick development
	devServer: {
		historyApiFallback: true,
		static: paths.public,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
		proxy: {
			'/v2/projects/search': {
				changeOrigin: true,
				target: 'https://api.reporter.nih.gov',
				onProxyReq: (proxyReq) => {
					// Browers may send Origin headers even with same-origin
					// requests. To prevent CORS issues, we have to change
					// the Origin to match the target URL.
					if (proxyReq.getHeader('origin')) {
						proxyReq.setHeader('origin', 'api.reporter.nih.gov');
					}
					proxyReq.removeHeader('user-agent');
					proxyReq.removeHeader('pragma');
					proxyReq.removeHeader('referer');
					proxyReq.removeHeader('accept-language');
				},
			},
			'/services/Projects/SearchCriteria': {
				changeOrigin: true,
				target: 'https://reporter.nih.gov',
				onProxyReq: (proxyReq) => {
					// Browers may send Origin headers even with same-origin
					// requests. To prevent CORS issues, we have to change
					// the Origin to match the target URL.
					if (proxyReq.getHeader('origin')) {
						proxyReq.setHeader('origin', 'reporter.nih.gov');
					}
				},
			},
		},
	},

	module: {
		rules: [
			// Styles: Inject CSS into the head with source maps
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1, modules: false },
					},
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
		],
	},

	plugins: [
		// Only update what has changed on hot reload
		new webpack.HotModuleReplacementPlugin(),
	],
});
