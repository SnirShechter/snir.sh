<template>
	<main class="container p-3 mx-auto flex justify-center items-center flex-grow">
		<div class="max-w-2xl">
			<h1 class="font-bold sm:text-6xl text-4xl">Hi, I'm Snir 👋🏻</h1>
			<h3 class="text-lg">
				<p>I build stuff, ship things that don’t break (much), and turn ideas into product.</p>
			</h3>
			<div class="flex space-x-5 mt-4">
				<a href="https://github.com/SnirShechter" target="_blank">
					<GithubIcon class="social-icon" />
				</a>
				<a href="mailto:me@snir.sh" target="_blank">
					<EmailIcon class="social-icon" />
				</a>
				<a href="https://www.linkedin.com/in/snir" target="_blank">
					<LinkedInIcon class="social-icon h-7" />
				</a>
			</div>
		</div>
	</main>
</template>

<script>
import EmailIcon from '../assets/social-icons/email.svg?vueComponent'
import GithubIcon from '../assets/social-icons/github.svg?vueComponent'
import LinkedInIcon from '../assets/social-icons/linkedin.svg?vueComponent'
export default {
	components: {
		EmailIcon,
		GithubIcon,
		LinkedInIcon,
	},
	metaInfo: {
		title: 'Home',
	},
}
</script>

<style lang="scss" scoped>
.social-icon {
	@apply h-6 inline-block;
	transition: 0.3s filter;
	&:not(:hover) {
		filter: brightness(0);
	}
}
</style>
