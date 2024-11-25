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
					0932 873 910
				</li>
				<li class="text-white">
					<img
						src="@/assets/images/icon/mail.svg"
						alt="email icon"
						style="width: 1.25rem"
					/>
					ninjatw@gmail.com
				</li>
				<li class="text-white">
					<img
						src="@/assets/images/icon/pin.svg"
						alt="pin icon"
						style="width: 1.25rem"
					/>
					台北市內湖區瑞光路7巷2樓之一
				</li>
			</ol>
			<!-- Media Link -->
			<div class="media d-flex flex-column justify-content-center gap-3">
				<!-- Link need to set up -->

				<a href="#" target="_blank"
					><img
						src="@/assets/images/icon/facebook.svg"
						alt="facebook"
						draggable="false"
				/></a>
				<a href="#" target="_blank"
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
