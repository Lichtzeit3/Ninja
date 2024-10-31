<template>
	<div class="wrapper">
		<header
			class="about h1 text-white text-shadow d-flex justify-content-center align-items-center mb-100"
		>
			<h1>聯絡我們</h1>
		</header>
		<img
			src="../assets/images/Logo_black_ninja.png"
			alt="ninja_logo"
			draggable="false"
			class="bg-logo"
		/>
		<main
			class="card mx-auto rounded-4 shadow mb-80"
			style="max-width: 55rem"
			data-aos="zoom-out"
			data-aos-duration="1000"
		>
			<div class="row g-0">
				<div class="col-6">
					<img
						src="../assets/images/contact/contact.jpg"
						class="img-fluid rounded-start"
						alt="..."
						draggable="false"
					/>
				</div>
				<div class="col-6">
					<div class="card-body">
						<h3 class="card-title text-center mb-5">
							忍者運輸有限公司
						</h3>
						<ul
							class="d-flex flex-column align-items-start justify-content-around ps-3"
						>
							<li class="mb-5">
								<img
									src="../assets/images/icon/phone.svg"
									alt="phone_icon"
									class="align-middle"
									draggable="false"
								/><span class="fs-5 align-middle ps-3"
									>0988 168 588</span
								>
							</li>
							<li class="mb-5">
								<img
									src="../assets/images/icon/mail.svg"
									alt="email_icon"
									class="align-middle"
									draggable="false"
								/><span class="fs-5 align-middle ps-3"
									>ninjatw@gmail.com</span
								>
							</li>
							<li class="mb-3">
								<img
									src="../assets/images/icon/pin.svg"
									alt="address_icon"
									class="align-middle"
									draggable="false"
								/><span class="fs-5 align-middle ps-3"
									>台北市內湖區瑞光路7巷1號2樓之一</span
								>
							</li>
						</ul>
						<span
							class="d-flex align-items-center justify-content-center"
						>
							<a href="#" target="_blank"
								><img
									src="../assets/images/icon/fb-dark.svg"
									alt="facebook_icon"
									class="mx-3"
									draggable="false"
							/></a>
							<a href="#" target="_blank"
								><img
									src="../assets/images/icon/line-dark.svg"
									alt="line_icon"
									class="mx-3"
									draggable="false"
							/></a>
						</span>
					</div>
				</div>
			</div>
		</main>
		<div class="d-grid gap-2 col-2 mx-auto" data-aos="zoom-in">
			<RouterLink to="/" class="btn btn-danger btn-lg"
				><h4 class="m-2 text-nowrap">返回首頁</h4></RouterLink
			>
		</div>
	</div>
</template>

<script>
	import AOS from "aos";
	import "aos/dist/aos.css";

	export default {
		mounted() {
			AOS.init();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	.wrapper {
		background-color: rgba(0, 0, 0, 0.1);
		width: 100%;
		padding-bottom: 80px;
		position: relative;

		.about {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}

		.bg-logo {
			position: absolute;
			bottom: 0;
			right: 0;
			width: 38.3rem;
			opacity: 0.1;
		}

		.box {
			background-color: #fff;
			width: 55rem;
			border-radius: 20px;
			padding: 80px;
			margin: 80px auto;
			position: relative;
			z-index: 1;
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
