module.exports = {
	siteName: 'Snir Shechter',
	siteUrl: 'https://snir.sh',
	siteDescription: 'Snir Shechter, a software developer',
	titleTemplate: 'Snir Shechter | %s',
	chainWebpack(config) {
		const svgRule = config.module.rule('svg')

		svgRule.uses.clear()

		svgRule
			.oneOf('inline')
			.resourceQuery(/vueComponent/)
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
			.options({
				svgo: {
					plugins: [{ prefixIds: true }],
				},
			})
			.end()
			.end()
			.oneOf('external')
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: 'assets/[name].[hash:8].[ext]',
			})
	},
	plugins: [
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000, // default
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				purgeConfig: {
					content: ['./src/**/*.vue', './src/**/*.scss', './src/**/*.js', './src/**/*.html', './src/**/*.md'],
					whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded', 'active'],
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
				},
			},
		},
	],
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/styles/config/_index.scss";`,
			},
		},
	},
}
