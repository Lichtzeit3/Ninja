<template>
	<div class="wrapper">
		<header
			class="header text-white text-shadow d-flex justify-content-center align-items-center mb-100"
		>
			<h1>聯絡我們</h1>
		</header>
		<img
			src="../assets/images/Logo_black_ninja.webp"
			alt="ninja_logo"
			draggable="false"
			class="bg-logo"
		/>
		<main
			class="card mx-auto rounded-4 shadow mb-80 h-100"
			data-aos="zoom-out"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			<div class="row g-0">
				<div class="col-6 contact-img">
					<img
						src="../assets/images/contact/contact.webp"
						class="img-fluid img-radius"
						alt="contact"
						draggable="false"
					/>
				</div>
				<div class="col-md-12 col-lg-6">
					<div
						class="card-body d-flex flex-column h-100 align-items-center justify-content-evenly"
					>
						<h2 class="h3 card-title text-center">
							忍者通運有限公司
						</h2>
						<ul
							class="d-flex flex-column align-items-start justify-content-evenly h-100 ps-3"
						>
							<li>
								<img
									src="../assets/images/icon/phone.svg"
									alt="phone_icon"
									class="align-middle icon"
									draggable="false"
								/><span class="fs-5 align-middle ps-3 info"
									><a href="tel:0287860836"
										>02 8786 0836</a
									></span
								>
							</li>
							<li>
								<img
									src="../assets/images/icon/mail.svg"
									alt="email_icon"
									class="align-middle icon"
									draggable="false"
								/><span class="fs-5 align-middle ps-3 info"
									><a href="mailto:admin@ninjatw.com"
										>admin@ninjatw.com</a
									></span
								>
							</li>
							<li>
								<img
									src="../assets/images/icon/pin.svg"
									alt="address_icon"
									class="align-middle icon"
									draggable="false"
								/><span class="fs-5 align-middle ps-3 info"
									><a
										href="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%85%A7%E6%B9%96%E5%8D%80%E7%91%9E%E5%85%89%E8%B7%AF7%E5%B7%B71%E8%99%9F"
										target="_blank"
										>台北市內湖區瑞光路7巷1號2樓之一</a
									></span
								>
							</li>
						</ul>
						<span
							class="d-flex align-items-center justify-content-center"
						>
							<a href="https://www.facebook.com/profile.php?id=61569922133237" target="_blank"
								><img
									src="../assets/images/icon/fb-dark.svg"
									alt="facebook_icon"
									class="mx-3 img-fluid"
									draggable="false"
							/></a>
							<a href="https://lin.ee/Hc1y9nE" target="_blank"
								><img
									src="../assets/images/icon/line-dark.svg"
									alt="line_icon"
									class="mx-3 img-fluid"
									draggable="false"
							/></a>
						</span>
					</div>
				</div>
			</div>
		</main>
		<div class="text-center mx-auto">
			<RouterLink to="/" class="btn btn-danger btn-lg"
				><p class="h4 m-2 text-nowrap">返回首頁</p></RouterLink
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
		padding-bottom: 80px;
		position: relative;

		.header {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}

		.bg-logo {
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

		.card {
			max-width: 55rem;
			@include breakpoint(992px) {
				max-width: 35rem;
			}
			@include breakpoint(576px) {
				background: none !important;
				box-shadow: none !important;
				border: none !important;
			}
			.contact-img {
				@include breakpoint(992px) {
					display: none;
				}
				.img-radius {
					border-radius: 1rem 0 0 1rem;
				}
			}
			.card-body {
				@include breakpoint(992px) {
					height: 25rem !important;
				}
				ul {
					@include breakpoint(576px) {
						padding: 0 !important;
					}
				}
			}
		}
	}

	.icon {
		@include breakpoint(576px) {
			width: 30px;
		}
	}

	.info {
		@include breakpoint(576px) {
			font-size: 1rem !important;
		}
		& a {
			text-decoration: none;
			color: #333;
			transition: all 0.3s ease;
			&:hover {
				color: $Red;
			}
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.mb-100 {
		margin-bottom: 100px;
	}

	.mb-80 {
		margin-bottom: 80px;
	}
</style>
