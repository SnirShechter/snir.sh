<template>
	<main class="container p-3 mx-auto flex justify-center items-center text-center flex-grow">
		<div>
			<h1 class="text-4xl">Page not found</h1>
			<GLink :to="{ name: 'home' }" class="cmp-link mt-5 inline-block">← Take me home</GLink>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Page404',
}
</script>
<style lang="scss">
@import '../styles/components/link';
</style>
