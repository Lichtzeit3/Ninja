<template>
	<div class="wrapper">
		<header
			class="header h1 text-white text-shadow d-flex justify-content-center align-items-center"
		>
			<h1>關於我們</h1>
		</header>
		<img
			src="../assets/images/Logo_black_ninja.webp"
			alt="ninja_logo"
			draggable="false"
		/>
		<main
			class="box shadow col-12 col-sm-10 col-lg-8 col-xl-6"
			data-aos="zoom-out"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			<p class="fs-5 lh-base">
				忍者通運有限公司專注於提供專業的重機機車託運服務。我們深知每一位機車愛好者對愛車的重視，因此致力於為客戶提供高品質、安全可靠的機車託運解決方案。我們的團隊擁有多年機車運輸經驗，專業處理各類型重機的運輸需求，確保每一台機車都能在最佳狀態下安全送達。<br /><br />我們以「專業、安全、服務至上」為核心理念，針對重機託運進行全方位的方案設計，從裝車到運送每一個環節都精益求精。我們的服務不僅涵蓋個人機車的託運需求，還能處理多輛車的大規模配送，靈活滿足客戶的多元需求。
			</p>
		</main>
		<div class="text-center">
			<RouterLink to="/contact" class="btn btn-danger btn-lg"
				><h4 class="m-2 text-nowrap">聯絡我們</h4></RouterLink
			>
		</div>
	</div>
</template>

<script>
	import { onMounted } from "vue";
	import AOS from "aos";
	import "aos/dist/aos.css";

	export default {
		setup() {
			onMounted(() => {
				AOS.init();
			});
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	@mixin breakpoint($point) {
		@media screen and (max-width: $point) {
			@content;
		}
	}

	.wrapper {
		background-color: rgba(0, 0, 0, 0.03);
		width: 100%;
		position: relative;
		padding-bottom: 80px;

		.header {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}

		img {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
			opacity: 0.1;
			width: 38.3rem;
			@include breakpoint(576px) {
				opacity: 0.04;
				bottom: 20%;
			}
		}

		.box {
			background-color: #fff;
			border-radius: 20px;
			padding: 80px;
			margin: 100px auto 80px;
			@include breakpoint(576px) {
				background: none;
				box-shadow: none !important;
				padding: 0 32px;
			}
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}
</style>
