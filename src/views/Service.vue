<template>
	<div class="wrapper">
		<header
			class="header text-white text-shadow d-flex justify-content-center align-items-center mb-100"
		>
			<h1>服務項目</h1>
		</header>
		<main>
			<section class="text-center mb-120 px-4">
				<h4 class="mb-4 lh-base">
					忍者通運有限公司 - 您值得信賴的重機託運專家
				</h4>
				<p class="fs-6 lh-base">
					忍者通運有限公司專注於提供專業的重機機車託運服務，憑藉多年行業經驗，我們的專業團隊能夠提供全方位的託運解決方案，確保您的愛車安全無憂地送達目的地。
				</p>
			</section>
			<section class="text-center mb-120">
				<h4 class="mb-4">為何選擇忍者通運？</h4>
				<div class="d-flex justify-content-evenly cards">
					<div
						class="card border-0 mobile-margin"
						style="width: 18rem"
					>
						<div class="circle shadow-sm">
							<img
								src="../assets/images/service/professional.png"
								class="card-img-top"
								alt="professional"
								draggable="false"
							/>
						</div>
						<div class="card-body">
							<h5>專業可靠的經驗</h5>
							<p class="card-text lh-base fs-6">
								我們擁有豐富的重機物流經驗，<br />深知機車託運的特殊需求，<br />為您的每一次託運保駕護航
							</p>
						</div>
					</div>
					<div
						class="card border-0 mobile-margin"
						style="width: 18rem"
					>
						<div class="circle shadow-sm">
							<img
								src="../assets/images/service/safety.png"
								class="card-img-top"
								alt="safety"
								draggable="false"
							/>
						</div>
						<div class="card-body">
							<h5>安全至上</h5>
							<p class="card-text lh-base fs-6">
								您的機車安全是我們的首要任務，使用先進的設備與嚴謹的操作流程，確保您的車輛完好無損地抵達目的地
							</p>
						</div>
					</div>
					<div class="card border-0" style="width: 18rem">
						<div class="circle shadow-sm">
							<img
								src="../assets/images/service/service.png"
								class="card-img-top"
								alt="service"
								draggable="false"
							/>
						</div>
						<div class="card-body">
							<h5>全方位服務</h5>
							<p class="card-text lh-base fs-6">
								無論是單輛還是多輛機車託運，<br />我們都能靈活定制服務，<br />滿足您的需求
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="text-center mb-120">
				<h4>我們對您的承諾</h4>
				<div>
					<span class="quote left-quote">&#x301D</span><br>
					<h5 class="px-5 my-3">
						忍者通運堅持「專業、安全、服務至上」的經營理念，不斷提升服務品質，致力於成為您信賴的重機運輸夥伴，超越您的期望。
					</h5>
					<span class="quote right-quote">&#x301E</span>
				</div>
			</section>
			<h6 class="fs-6 fw-normal text-center mb-80 lh-base px-4">
				準備好安心託運您的機車了嗎？聯繫忍通運有限公司，讓我們為您打理一切運輸事宜，讓您輕鬆上路！
			</h6>
		</main>
		<div class="text-center">
			<RouterLink to="/contact" class="btn btn-danger btn-lg"
				><h4 class="m-2 text-nowrap">聯絡我們</h4></RouterLink
			>
		</div>
	</div>
</template>

<script setup>
	import { onMounted } from "vue";

	onMounted(() => {});
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	@mixin breakpoint($point) {
		@media screen and (max-width: $point) {
			@content;
		}
	}

	.wrapper {
		width: 100%;
		padding-bottom: 80px;

		.header {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}

		.cards {
			@include breakpoint(576px) {
				flex-direction: column;
				align-items: center;
			}
		}

		.quote {
			font-size: 3.5rem;
		}

		.left-quote {
			float: left;
		}

		.right-quote {
			float: right;
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.circle {
		display: block;
		border-radius: 50%;
		width: 128px;
		margin: 0 auto;
	}

	.mobile-margin {
		@include breakpoint(576px) {
			margin-bottom: $spacer * 3;
		}
	}

	.mb-100 {
		margin-bottom: 100px;
	}

	.mb-120 {
		margin-bottom: 120px;
	}

	.mb-80 {
		margin-bottom: 80px;
	}
	.btn {
		font-size: $h4-font-size;
	}
</style>
