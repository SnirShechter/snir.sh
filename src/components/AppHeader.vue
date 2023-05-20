<template>
	<header class="app-header bg-gray-100 flex justify-center sm:p-5 p-3">
		<div class="container flex justify-between items-center">
			<GLink :to="{ name: 'home' }" class="font-bold sm:text-lg text-md break-all">
				<span class="inline-block align-middle">> SnirShechter@home:~$</span>
				<span class="cursor inline-block align-middle bg-green-400 ml-1 w-3 h-5"></span>
			</GLink>
			<nav class="flex space-x-4">
				<ul>
					<li v-for="link in links" :key="link.title + JSON.stringify(link.to)">
						<GLink :to="link.to">{{ link.title }}</GLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
	data() {
		return {
			links: [],
		}
	},
}
</script>

<style lang="scss" scoped>
.cursor {
	animation: cursor 1s infinite;
}

@keyframes cursor {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
