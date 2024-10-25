<template>
	<footer>
		<div class="logo-info">
			<!-- Logo -->
			<router-link to="/">
				<img
					src="@/assets/images//logo.svg"
					alt="footerLogo"
					class="footer_logo"
					draggable="false"
				/>
			</router-link>
			<!-- Company Info -->
			<ol>
				<li>TEL: 0988 168 588</li>
				<li>EMAIL: ninjatw@gmail.com</li>
				<li>ADD: 台北市內湖區瑞光路7巷2樓之一</li>
			</ol>
			<!-- Media Link -->
			<div class="footer-media">

				<!-- Link need to set up -->

				<a href="#" target="_blank"><img src="@/assets/images/facebook.svg" alt="facebook" draggable="false"/></a>
				<a href="#" target="_blank"><img src="@/assets/images/Line.svg" alt="Line" draggable="false"/></a>
			</div>
		</div>
		<!-- Copyright -->
		<p class="copyright">&copy; 忍者運輸有限公司 All Rights Reserved.</p>
	</footer>
</template>

<script>
	export default {
		name: "FooterComponent",
	};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	footer {
		background: linear-gradient(0deg, #000, #181818);
		height: 234px;
		width: 100%;
		.logo-info {
			padding-top: 20px;
			display: flex;
			justify-content: center;
		}
		.footer_logo {
			width: 400px;
		}
		ol {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			padding: 0 40px;
		}
		ol li {
			color: #fff;
			font-family: $FontFamily;
			font-size: 1.25rem;
		}
		.footer-media {
			display: flex;
			flex-direction: column;
			gap: 12px;
			justify-content: center;
		}
		.copyright {
			color: $Gold;
			text-align: center;
			margin-top: 20px;
		}
	}
</style>
