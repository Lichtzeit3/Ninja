<template>
	<div class="wrapper">
		<header
			id="carouselAutoplaying"
			class="carousel slide mb-80"
			data-bs-ride="carousel"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselAutoplaying"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselAutoplaying"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselAutoplaying"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#carouselAutoplaying"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes_XL.webp"
							media="(min-width: 1441px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes_L.webp"
							media="(min-width: 769px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes_M.webp"
							media="(min-width: 576px)"
						/>
						<img
							src="../assets/images/home/motorbikes_L.webp"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<h1 class="fw-bold text-shadow text-nowrap">
							專業重機託運服務
						</h1>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes2_XL.webp"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes2_L.webp"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes2_M.webp"
							media="(min-width: 576px)"
						/>
						<img
							src="../assets/images/home/motorbikes2_L.webp"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<p class="h1 fw-bold text-shadow text-nowrap">
							安全專業重機配送
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes3_XL.webp"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes3_L.webp"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes3_M.webp"
							media="(min-width: 576px)"
						/>
						<img
							src="../assets/images/home/motorbikes3_L.webp"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<p class="h1 fw-bold text-shadow text-nowrap">
							專業重機安全守護
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes4_XL.webp"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes4_L.webp"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes4_M.webp"
							media="(min-width: 576px)"
						/>
						<img
							src="../assets/images/home/motorbikes4_L.webp"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<p class="h1 fw-bold text-shadow text-nowrap">
							服務至上的運輸專家
						</p>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselAutoplaying"
				data-bs-slide="prev"
			>
				<span
					class="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselAutoplaying"
				data-bs-slide="next"
			>
				<span
					class="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span class="visually-hidden">Next</span>
			</button>
		</header>
		<section class="mobile-header">
			<h1
				class="header text-white text-shadow d-flex justify-content-center align-items-center"
			>
				專業重機託運服務
			</h1>
		</section>
		<main class="container">
			<div
				class="row justify-content-evenly mb-100"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="800"
				data-aos-offset="100"
			>
				<div class="d-flex col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/bike.svg"
							alt="green_motorbike"
							class="img-fluid"
							loading="lazy"
						/>
					</div>
				</div>
				<div class="col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h2 class="h3 fw-normal mb-4">機車運輸</h2>
						<p class="fs-5 lh-base">
							我們提供全國范圍內的機車運輸服務，包括長途運輸、城市配送等，保證安全、準時地將機車送達目的地。
						</p>
					</div>
				</div>
			</div>
			<div
				class="row justify-content-evenly mb-100 protection"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="800"
				data-aos-offset="100"
			>
				<div class="col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h2 class="h3 fw-normal mb-4">專業保護</h2>
						<p class="fs-5 lh-base">
							我們在運輸過程中采取一系列措施保護機車安全，包括專業包裝、固定和保險，確保機車不受損傷。
						</p>
					</div>
				</div>
				<div class="d-flex col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/truck.svg"
							alt="black_truck"
							class="img-fluid"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div
				class="row justify-content-evenly mb-80"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="800"
				data-aos-offset="100"
			>
				<div class="d-flex col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/service.svg"
							alt="customer_service"
							class="img-fluid"
							loading="lazy"
						/>
					</div>
				</div>
				<div class="col-10 col-sm-6 col-lg-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h2 class="h3 fw-normal mb-4">客戶服務</h2>
						<p class="fs-5 lh-base">
							我們的客戶服務團隊隨時準備回答客戶的問題，提供即時支持和協助，確保客戶滿意度。
						</p>
					</div>
				</div>
			</div>
		</main>
		<div class="text-center mb-80">
			<RouterLink to="/contact" class="btn btn-danger btn-lg"
				><p class="h4 m-2 text-nowrap">聯絡我們</p></RouterLink
			>
		</div>
	</div>
</template>

<script>
	import { onMounted, onActivated, onDeactivated, nextTick } from "vue";
	import AOS from "aos";
	import "aos/dist/aos.css";

	export default {
		setup() {
			const initCarousel = () => {
				const carousel = document.querySelector("#carouselAutoplaying");
				if (carousel) {
					new bootstrap.Carousel(carousel, {
						interval: 5000,
						ride: "carousel",
					});
				}
			};

			const initializeAOS = () => {
				AOS.init({
					duration: 1200,
					once: false,
				});
			};

			const refreshAOS = () => {
				AOS.refreshHard();
			};

			onMounted(async () => {
				await nextTick();
				initCarousel();
				initializeAOS();

				setTimeout(() => {
					refreshAOS();
				}, 100);
			});

			onActivated(async () => {
				await nextTick();
				initCarousel();
				refreshAOS();
			});

			onDeactivated(() => {
				const carousel = bootstrap.Carousel.getInstance(
					document.querySelector("#carouselAutoplaying")
				);
				if (carousel) {
					carousel.pause();
				}
			});

			return { initCarousel };
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

	header {
		@include breakpoint(576px) {
			display: none;
		}
	}

	.mobile-header {
		display: none;
		@include breakpoint(576px) {
			display: block;
		}
	}

	.header {
		background-color: $Red;
		height: 160px;
		width: 100%;
		margin-bottom: 80px;
	}

	.box {
		@include breakpoint(576px) {
			margin-bottom: 40px;
		}
		.img {
			@include breakpoint(768px) {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
		}
	}

	.protection {
		@include breakpoint(576px) {
			flex-direction: column-reverse;
			align-items: center;
		}
	}

	.mb-100 {
		margin-bottom: 100px;
	}

	.mb-80 {
		margin-bottom: 80px;
	}

	.text-shadow {
		text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
	}
</style>
