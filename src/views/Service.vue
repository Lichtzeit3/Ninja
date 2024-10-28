<template>
	<div class="wrapper">
		<header
			class="service h1 text-white text-shadow d-flex justify-content-center align-items-center mb-100"
		>
			服務項目
		</header>
		<main>
			<section class="text-center mb-120">
				<h4 class="mb-3">忍者運輸有限公司 - 您值得信賴的重機託運專家</h4>
				<p class="fs-6">
					忍者運輸有限公司專注於提供專業的重機機車託運服務，憑藉多年行業經驗，我們的專業團隊能夠提供全方位的託運解決方案，確保您的愛車安全無憂地送達目的地。
				</p>
			</section>

			<section class="text-center mb-120">
				<h4 class="mb-3">為何選擇忍者運輸？</h4>
				<div class="d-flex justify-content-evenly">
					<div class="card border-0" style="width: 18rem">
						<div class="circle">
							<img
								src="../assets/images/service/professional.png"
								class="card-img-top"
								alt="professional"
							/>
						</div>
						<div class="card-body">
							<h5>專業可靠的經驗</h5>
							<p class="card-text lh-base fs-6">
								我們擁有豐富的重機物流經驗，<br />深知機車託運的特殊需求，<br />為您的每一次託運保駕護航
							</p>
						</div>
					</div>
					<div class="card border-0" style="width: 18rem">
						<div class="circle">
							<img
								src="../assets/images/service/safety.png"
								class="card-img-top"
								alt="safety"
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
						<div class="circle">
							<img
								src="../assets/images/service/service.png"
								class="card-img-top"
								alt="service"
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
					<h5>
						<span class="quote">&#x301D</span> 忍者運輸堅持「專業、安全、服務至上」的經營理念，不斷提升服務品質，致力於成為您信賴的重機運輸夥伴，超越您的期望。 <span class="quote">&#x301E</span>
					</h5>
				</div>
			</section>

			<h6 class="fs-6 fw-normal text-center mb-80">
				準備好安心託運您的機車了嗎？聯繫忍者運輸有限公司，讓我們為您打理一切運輸事宜，讓您輕鬆上路！
			</h6>
		</main>
		<div class="d-grid gap-2 col-2 mx-auto">
			<RouterLink
				to="/contact"
				type="button"
				class="btn btn-danger btn-lg"
				><h4 class="m-2 text-nowrap">聯絡我們</h4></RouterLink
			>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	.wrapper {
		width: 100%;
		padding-bottom: 80px;

		.service {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}

		.quote{
			font-size: 3.5rem;
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.circle {
		display: block;
		border-radius: 100%;
		width: 128px;
		margin: 0 auto;
	}

	.mb-100 {
		margin-bottom: 120px;
	}

	.mb-120 {
		margin-bottom: 120px;
	}

	.mb-80 {
		margin-bottom: 80px;
	}
</style>
