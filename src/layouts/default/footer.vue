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
			<ol class="m-0 d-flex flex-column justify-content-evenly">
				<li class="text-white">TEL: 0988 168 588</li>
				<li class="text-white">EMAIL: ninjatw@gmail.com</li>
				<li class="text-white">ADD: 台北市內湖區瑞光路7巷2樓之一</li>
			</ol>
			<!-- Media Link -->
			<div class="d-flex flex-column justify-content-center gap-3">
				<!-- Link need to set up -->

				<a href="#" target="_blank"
					><img
						src="@/assets/images/icon/facebook.svg"
						alt="facebook"
						draggable="false"
				/></a>
				<a href="#" target="_blank"
					><img
						src="@/assets/images/icon/Line.svg"
						alt="Line"
						draggable="false"
				/></a>
			</div>
		</div>
		<!-- Copyright -->
		<p class="copyright text-center">
			&copy; 忍者運輸有限公司 All Rights Reserved.
		</p>
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
			padding: 0 40px;
		}
		ol li {
			font-family: $FontFamily;
		}
		.copyright {
			color: $Gold;
			margin-top: 20px;
			font-size: 0.75rem;
		}
	}
</style>
