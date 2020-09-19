<template>
	<div id="app" class="default-layout flex flex-col h-screen">
		<AppHeader class="flex-grow-0" />
		<div class="page-container flex-grow flex">
			<transition name="fade" mode="out-in">
				<RouterView />
			</transition>
		</div>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
	components: { AppHeader },

	mounted() {
		var isIE = window.navigator.userAgent.indexOf('MSIE ') > 0
		if (isIE) window.location.href = 'https://www.google.com/chrome/'
	},
}
</script>
