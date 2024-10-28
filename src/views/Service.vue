<template>
	<div class="wrapper">
		<header
			class="service h1 text-white text-shadow d-flex justify-content-center align-items-center"
		>
			服務項目
		</header>
		<main>
			<section>
				<h4>忍者運輸有限公司 - 您值得信賴的重機託運專家</h4>
				<p>
					忍者運輸有限公司專注於提供專業的重機機車託運服務，憑藉多年行業經驗，我們的專業團隊能夠提供全方位的託運解決方案，確保您的愛車安全無憂地送達目的地。
				</p>
			</section>

			<section>
				<h4>為何選擇忍者運輸？</h4>
				<div class="d-flex">
					<div class="card border-0" style="width: 18rem">
						<div class="circle">
							<img
								src="../assets/images/service/profesional.png"
								class="card-img-top"
								alt="profesional"
							/>
						</div>
						<div class="card-body">
							<h5>專業可靠的經驗</h5>
							<p class="card-text">
								我們擁有豐富的重機物流經驗，深知機車託運的特殊需求，為您的每一次託運保駕護航
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
							<p class="card-text">
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
							<p class="card-text">
								無論是單輛還是多輛機車託運，我們都能靈活定制服務，滿足您的需求
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<h4>我們對您的承諾</h4>
				<img
					src="../assets/images/service/quote.svg"
					alt="quote"
					class="quote-top"
				/>
				<h5>
					忍者運輸堅持「專業、安全、服務至上」的經營理念，不斷提升服務品質，致力於成為您信賴的重機運輸夥伴，超越您的期望。
				</h5>
				<img
					src="../assets/images/service/quote.svg"
					alt="quote"
					class="quote-bottom"
				/>
			</section>

			<h5>
				準備好安心託運您的機車了嗎？聯繫忍者運輸有限公司，讓我們為您打理一切運輸事宜，讓您輕鬆上路！
			</h5>
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
		position: relative;

		.service {
			background-color: $Red;
			height: 160px;
			width: 100%;
			margin-bottom: 100px;
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.circle {
		border-radius: 100%;
	}
</style>
