<template>
	<section class="project-card inline-block shadow">
		<a :href="demoUrl" target="_blank">
			<div class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
		</a>
		<div class="project-card-content p-4 pb-2 flex flex-col justify-between">
			<div>
				<a :href="demoUrl" target="_blank">
					<h5 class="font-bold text-xl">{{ title }}</h5>
				</a>
				<p class="project-description text-sm text-gray-500">
					{{ description }}
				</p>
			</div>
			<div>
				<slot name="actions">
					<div class="flex space-x-4">
						<a
							v-for="action in actions"
							:key="action.url"
							:href="action.url"
							target="_blank"
							class="card-link inline-block text-center"
						>
							<GImage class="mx-auto icon" :src="action.icon" v-if="action.icon" />
							<div class="text-xs leading-none">{{ action.text }}</div>
						</a>
					</div>
				</slot>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		demoUrl: {
			type: String,
			required: true,
		},
		actions: {
			type: Array,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
$height: 310px;
$width: 300px;
$image-height: 150px;
.project-card {
	width: $width;
	height: $height;
}

.card-image {
	filter: brightness(0.99);
	width: $width;
	height: $image-height;
	background-position: top center;
	background-size: cover;
}
.project-card-content {
	height: $height - $image-height;
}
.project-description {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.icon {
	transition: 0.3s filter;
}
.card-link:not(:hover) {
	.icon {
		filter: brightness(0);
	}
}
</style>
