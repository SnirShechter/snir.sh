<template>
	<main class="projects container p-3 mx-auto flex-grow flex flex-wrap justify-center">
		<ProjectCard v-for="project in projects" :key="project.demoUrl" v-bind="project" class="m-3" />
	</main>
</template>

<script>
import githubIcon from '../assets/social-icons/github.svg'
import fileUploadImage from '../assets/projects/file-upload.png'
import doritShechterImage from '../assets/projects/dorit-shechter.png'
import ProjectCard from '../components/ProjectCard'

export default {
	name: 'Projects',
	components: { ProjectCard },
	metaInfo: {
		title: 'Projects',
	},
	data() {
		return {
			projects: [
				{
					title: `File Sharing`,
					description: `Upload a file, get a six-characters code and share it with others to download.`,
					image: fileUploadImage,
					demoUrl: 'https://snirs-file-upload.netlify.app',
					actions: [
						{
							url: 'https://github.com/SnirShechter/file-upload-frontend',
							icon: githubIcon,
							text: 'Frontend',
						},
						{
							url: 'https://github.com/SnirShechter/file-upload-backend',
							icon: githubIcon,
							text: 'Backend',
						},
					],
				},
				{
					title: `Dorit Shechter`,
					description: `My mom's professional website (in hebrew).`,
					image: doritShechterImage,
					demoUrl: 'https://www.doritshechter.co.il/',
					actions: [
						{ url: 'https://github.com/SnirShechter/dorit-shechter', icon: githubIcon, text: 'Frontend' },
					],
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped></style>
