<template>
	<main class="container p-3 mx-auto flex justify-center items-center flex-grow">
		<div class="max-w-2xl">
			<h1 class="font-bold sm:text-6xl text-4xl">Hi, I'm Snir 👋🏻</h1>
			<h3 class="text-lg">
				I'm a software developer based in Israel. I currently work at <a href="https://aporia.com" target="_blank" class="underline text-current">Aporia</a>. I do pretty much
				anything related to software - from frontend (♡ Vue) to backend, devOps, native/hybrid apps and much
				more.
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
import MediumIcon from '../assets/social-icons/medium.svg?vueComponent'
import LinkedInIcon from '../assets/social-icons/linkedin.svg?vueComponent'
import DevtoIcon from '../assets/social-icons/dev-to.svg?vueComponent'
export default {
	components: {
		EmailIcon,
		GithubIcon,
		MediumIcon,
		LinkedInIcon,
		DevtoIcon,
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
