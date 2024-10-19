<template>
	<div class="nav-banner bg-black">
		<router-link to="/">
			<img
				src="@/assets/images/logo.svg"
				alt="footerLogo"
				class="nav-logo"
				draggable="false"
			/>
		</router-link>
		<div>
			<span class="phone-number text-white">
				<img
					src="@/assets/images/header/phone.svg"
					alt="Phone"
					draggable="false"
				/>
				0988 <span class="mid-number">168</span> 588
			</span>
			<a href="#" target="_blank"
				><img
					src="@/assets/images/facebook.svg"
					alt="facebook"
					class="nav-media"
					draggable="false"
			/></a>
			<a href="#" target="_blank"
				><img
					src="@/assets/images/Line.svg"
					alt="Line"
					class="nav-media"
					draggable="false"
			/></a>
		</div>
	</div>
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

	.nav-banner {
		border-bottom: 4px solid $Red;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.nav-logo {
			width: 400px;
			padding: 12px;
			margin: 0 80px;
		}

		div {
			margin-right: 80px;

			.phone-number {
				font-size: 2.5rem;
				font-family: $FontFamily;

				img {
					width: 30px;
				}

				.mid-number {
					color: $Gold;
				}
			}

			.nav-media {
				padding: 0 6px;
				height: 30px;
			}
		}
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
