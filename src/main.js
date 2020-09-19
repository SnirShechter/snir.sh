// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/index.scss'

export default function(Vue, { head }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	head.script.push({
		src: 'http://localhost:8080/fuck-ie.js',
	})
	head.meta.push({
		name: 'description',
		content: 'Snir Shechter, a software developer',
	})

	head.link.push({
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: true,
	})

	head.meta.push({
		name: 'author',
		content: 'Snir Shechter',
	})

	head.meta.push({
		name: 'keywords',
		content: [
			'Snir Shechter',
			'Snir',
			'Shechter',
			'Software',
			'Software developer',
			'Software development',
			'Web development',
			'Frontend',
			'Backend',
			'DevOps',
			'Machine Learning',
		].join(','),
	})

	// TODO: facebook, twitter, PWA meta tags
}
