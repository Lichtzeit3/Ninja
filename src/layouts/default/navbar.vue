<template>
	<header
		class="bg-black d-flex align-items-center justify-content-center custom-border"
	>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6">
					<div class="py-2">
						<router-link to="/" @click="closeNavbar">
							<picture>
								<source
									srcset="@/assets/images/logo.svg"
									media="(min-width: 576px)"
								/>
								<img
									src="@/assets/images/Logo_black_ninja.svg"
									class="logo"
									alt="Logo"
									draggable="false"
								/>
							</picture>
						</router-link>
					</div>
				</div>
				<div
					class="phone_number col-12 col-md-6 d-flex align-items-center justify-content-end"
				>
					<img
						src="@/assets/images/icon/phone.svg"
						alt="phone"
						draggable="false"
						class="me-3"
					/>
					<span class="text-white h3 mb-0 text-nowrap">
						0932 <span class="text-gold">873</span> 910
					</span>
					<div class="d-flex ms-3">
						<a href="https://www.facebook.com/profile.php?id=61569922133237" target="_blank" class="me-2">
							<img
								src="@/assets/images/icon/facebook.svg"
								alt="facebook"
								draggable="false"
							/>
						</a>
						<a href="https://lin.ee/Hc1y9nE" target="_blank">
							<img
								src="@/assets/images/icon/line.svg"
								alt="line"
								draggable="false"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>

	<nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
		<div class="container-fluid">
			<button
				class="navbar-toggler ms-auto border-0"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse justify-content-center"
				id="navbarNav"
			>
				<ul class="navbar-nav position-center">
					<li class="nav-item p-0 px-3">
						<router-link
							to="/"
							class="nav-link text-white d-flex flex-column text-start"
							@click="closeNavbar"
							><span class="fs-5 mb-1">首頁資訊</span
							><span class="custom-text">Home</span></router-link
						>
					</li>
					<li class="nav-item p-0 px-3">
						<router-link
							to="/about"
							class="nav-link text-white d-flex flex-column text-start"
							@click="closeNavbar"
							><span class="fs-5 mb-1">關於我們</span
							><span class="custom-text">About</span></router-link
						>
					</li>
					<li class="nav-item p-0 px-3">
						<router-link
							to="/service"
							class="nav-link text-white d-flex flex-column text-start"
							@click="closeNavbar"
							><span class="fs-5 mb-1">服務項目</span
							><span class="custom-text"
								>Service</span
							></router-link
						>
					</li>
					<li class="nav-item p-0 px-3">
						<router-link
							to="/pricing"
							class="nav-link text-white d-flex flex-column text-start"
							@click="closeNavbar"
							><span class="fs-5 mb-1">收費標準</span
							><span class="custom-text"
								>Pricing</span
							></router-link
						>
					</li>
					<li class="nav-item p-0 px-3">
						<router-link
							to="/contact"
							class="nav-link text-white d-flex flex-column text-start"
							@click="closeNavbar"
							><span class="fs-5 mb-1">聯絡我們</span
							><span class="custom-text"
								>Contact</span
							></router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "DefaultNavbar",
		methods: {
			closeNavbar() {
				const navbar = document.getElementById("navbarNav");
				const bsCollapse = bootstrap.Collapse.getInstance(navbar);
				if (bsCollapse) {
					bsCollapse.hide();
				}
			},
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

	.navbar{
		margin-top: -1px;
	}

	.logo {
		@include breakpoint(576px) {
			width: 150px !important;
			display: block;
			margin: 0 auto;
		}
		@include breakpoint(992px) {
			width: 300px;
			display: block;
			margin: 0 auto;
		}
	}

	.phone_number {
		@include breakpoint(768px) {
			justify-content: center !important;
			margin-bottom: 1rem;
		}
	}

	.custom-border {
		border-bottom: 5px solid $Red;
	}

	.text-gold {
		color: $Gold;
	}

	.nav-item {
		transition: all 0.3s ease;
		&:hover {
			transform: translateY(-5px);
		}
		.nav-link {
			.custom-text {
				color: $Gold;
			}
		}
	}
</style>
