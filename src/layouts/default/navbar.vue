<template>
	<header
		class="bg-black d-flex align-items-center justify-content-center custom-border"
	>
		<div class="container">
			<div class="row">
				<div class="col-4">
					<div class="box mt-3 mb-3">
						<router-link to="/">
							<img
								src="@/assets/images/logo.svg"
								alt="Logo"
								draggable="false"
							/>
						</router-link>
					</div>
				</div>

				<!-- Empty space -->
				<div class="col-4"></div>
				<!-- Empty space -->

				<div
					class="col-4 d-flex align-items-center justify-content-center"
				>
					<img
						src="@/assets/images/header/phone.svg"
						alt="phone"
						draggable="false"
						class="me-3"
					/>
					<span class="text-white h3 mb-0 text-nowrap">
						0988 <span class="text-gold">168</span> 588
					</span>
					<div class="d-flex ms-3">
						<a href="#" target="_blank" class="me-2">
							<img
								src="@/assets/images/facebook.svg"
								alt="facebook"
								draggable="false"
							/>
						</a>
						<a href="#" target="_blank">
							<img
								src="@/assets/images/line.svg"
								alt="line"
								draggable="false"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>

	<nav class="navbar navbar-expand-lg navbar-dark bg-black">
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
					<li class="nav-item">
						<router-link
							to="/"
							class="nav-link text-white d-flex flex-column text-start"
							href="#"
							><span class="chinese-text">首頁資訊</span
							><span class="custom-text">Home</span></router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							to="/about"
							class="nav-link text-white d-flex flex-column text-start"
							href="#"
							><span class="chinese-text">關於我們</span
							><span class="custom-text">About</span></router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							to="/service"
							class="nav-link text-white d-flex flex-column text-start"
							href="#"
							><span class="chinese-text">服務項目</span
							><span class="custom-text"
								>Service</span
							></router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							to="/pricing"
							class="nav-link text-white d-flex flex-column text-start"
							href="#"
							><span class="chinese-text">收費標準</span
							><span class="custom-text"
								>Pricing</span
							></router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							to="/contact"
							class="nav-link text-white d-flex flex-column text-start"
							href="#"
							><span class="chinese-text">聯絡我們</span
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
	};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	.custom-border {
		border-bottom: 4px solid $Red;
	}

	.text-gold {
		color: $Gold;
	}

	.nav-item {
		padding: 12px 20px;

		.nav-link {
			font-family: $FontFamily;
			padding: 8px;

			.chinese-text {
				font-size: 20px;
				margin-bottom: 4px;
			}

			.custom-text {
				color: $Gold;
			}
		}
	}
</style>
