<template>
	<div class="default-page-wrapper">
		<DefaultNavbar />
		<div class="content-wrapper">
			<slot />
		</div>
		<FooterComponent />
	</div>
</template>

<script>
	import DefaultNavbar from "./navbar.vue";
	import FooterComponent from "./footer.vue";
	export default {
		components: {
			DefaultNavbar,
			FooterComponent,
		},
	};
</script>

<style lang="scss">
	.default-page-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* Make the wrapper at least the height of the viewport */
	}

	.content-wrapper {
		flex: 1; /* Take up the remaining space, pushing the footer down */
	}

	footer {
		position: relative; /* or position: fixed; for a fixed footer */
		bottom: 0;
		width: 100%;
	}
</style>
