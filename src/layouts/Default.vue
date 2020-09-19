<template>
	<div class="default-layout flex flex-col h-screen">
		<AppHeader class="flex-grow-0" />
		<transition name="fade" appear mode="out-in">
			<div class="page-container flex-grow flex">
				<slot />
			</div>
		</transition>
	</div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
	name: 'DefaultLayout',
	components: { AppHeader },
}
</script>
