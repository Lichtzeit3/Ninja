<template>
	<footer>
		<div class="logo-info d-flex justify-content-center pt-3">
			<!-- Logo -->
			<router-link to="/">
				<img
					src="@/assets/images/logo.svg"
					alt="footerLogo"
					class="footer_logo"
					draggable="false"
				/>
			</router-link>
			<!-- Company Info -->
			<ol class="m-0 d-flex flex-column justify-content-evenly">
				<li class="text-white">
					<img
						src="@/assets/images/icon/phone.svg"
						alt="phone icon"
						style="width: 1.25rem"
					/>
					<a href="tel:0932873910">0932 873 910</a>
				</li>
				<li class="text-white">
					<img
						src="@/assets/images/icon/mail.svg"
						alt="email icon"
						style="width: 1.25rem"
					/>
					<a href="mailto:ninjatw@gmail.com">ninjatw@gmail.com</a>
				</li>
				<li class="text-white">
					<img
						src="@/assets/images/icon/pin.svg"
						alt="pin icon"
						style="width: 1.25rem"
					/>
					<a
						href="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%85%A7%E6%B9%96%E5%8D%80%E7%91%9E%E5%85%89%E8%B7%AF7%E5%B7%B71%E8%99%9F"
						target="_blank"
						>台北市內湖區瑞光路7巷1號2樓之一</a
					>
				</li>
			</ol>
			<!-- Media Link -->
			<div class="media d-flex flex-column justify-content-center gap-3">
				<!-- Link need to set up -->

				<a
					href="https://www.facebook.com/profile.php?id=61569922133237"
					target="_blank"
					><img
						src="@/assets/images/icon/facebook.svg"
						alt="facebook"
						draggable="false"
				/></a>
				<a href="https://lin.ee/Hc1y9nE" target="_blank"
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

	@mixin breakpoint($point) {
		@media screen and (max-width: $point) {
			@content;
		}
	}

	footer {
		background: linear-gradient(0deg, #000, #181818);
		width: 100%;
		.logo-info {
			@include breakpoint(768px) {
				flex-direction: column;
				align-items: center;
			}
			.footer_logo {
				@include breakpoint(768px) {
					width: 200px;
				}
				@include breakpoint(992px) {
					width: 300px;
				}
			}
			ol {
				list-style-type: none;
				padding: 0 40px;
				li {
					font-family: $FontFamily;
					@include breakpoint(768px) {
						line-height: 250%;
					}
					img {
						margin-right: 0.5rem;
					}
					a {
						text-decoration: none;
						color: #fff;
						transition: all 0.3s ease;
						&:hover {
							color: $Red;
						}
					}
				}
			}
			.media {
				@include breakpoint(768px) {
					flex-direction: row !important;
					margin-top: 1rem;
					gap: 2rem !important;
				}
			}
		}

		.copyright {
			color: $Gold;
			margin-top: 20px;
			font-size: 0.75rem;
		}
	}
</style>
