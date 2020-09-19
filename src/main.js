import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/index.scss'

export default function(Vue, { head }) {
	Vue.component('Layout', DefaultLayout)

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
}
