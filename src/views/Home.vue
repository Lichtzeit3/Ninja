<template>
	<div class="wrapper">
		<header
			id="carouselExampleAutoplaying"
			class="carousel slide"
			data-bs-ride="carousel"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes_XL.jpg"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes_L.jpg"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes_M.jpg"
							media="(min-width: 375px)"
						/>
						<img
							src="../assets/images/home/motorbikes_S.jpg"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<h1 class="h1 fw-bold text-shadow">專業重機託運服務</h1>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes2_XL.jpg"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes2_L.jpg"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes2_M.jpg"
							media="(min-width: 375px)"
						/>
						<img
							src="../assets/images/home/motorbikes2_S.jpg"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<h1 class="h1 fw-bold text-shadow">專業重機託運服務</h1>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes3_XL.jpg"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes3_L.jpg"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes3_M.jpg"
							media="(min-width: 375px)"
						/>
						<img
							src="../assets/images/home/motorbikes3_S.jpg"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<h1 class="h1 fw-bold text-shadow">專業重機託運服務</h1>
					</div>
				</div>
				<div class="carousel-item">
					<picture>
						<source
							srcset="../assets/images/home/motorbikes4_XL.jpg"
							media="(min-width: 1440px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes4_L.jpg"
							media="(min-width: 768px)"
						/>
						<source
							srcset="../assets/images/home/motorbikes4_M.jpg"
							media="(min-width: 375px)"
						/>
						<img
							src="../assets/images/home/motorbikes4_S.jpg"
							class="d-block w-100"
							alt="motorbikes"
						/>
					</picture>
					<div
						class="carousel-caption d-flex justify-content-center align-items-center h-100"
					>
						<h1 class="h1 fw-bold text-shadow">專業重機託運服務</h1>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleAutoplaying"
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
				data-bs-target="#carouselExampleAutoplaying"
				data-bs-slide="next"
			>
				<span
					class="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span class="visually-hidden">Next</span>
			</button>
		</header>

		<main class="container">
			<div class="row justify-content-around">
				<div class="col-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/bike.svg"
							alt="green_motorbike"
							class="img-fluid"
						/>
					</div>
				</div>
				<div class="col-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h3 class="h3 fw-light mb-4">機車運輸</h3>
						<p class="fs-5 lh-base">
							我們提供全國范圍內的機車運輸服務，包括長途運輸、城市配送等，保證安全、準時地將機車送達目的地。
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-around">
				<div class="col-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h3 class="h3 fw-light mb-4">專業保護</h3>
						<p class="fs-5 lh-base">
							我們在運輸過程中采取一系列措施保護機車安全，包括專業包裝、固定和保險，確保機車不受損傷。
						</p>
					</div>
				</div>
				<div class="col-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/truck.svg"
							alt="black_truck"
							class="img-fluid"
						/>
					</div>
				</div>
			</div>
			<div class="row justify-content-around">
				<div class="col-4">
					<div
						class="box d-flex justify-content-center align-items-center"
					>
						<img
							src="../assets/images/home/service.svg"
							alt="customer_service"
							class="img-fluid"
						/>
					</div>
				</div>
				<div class="col-4">
					<div
						class="box d-flex flex-column justify-content-center h-100"
					>
						<h3 class="h3 fw-light mb-4">客戶服務</h3>
						<p class="fs-5 lh-base">
							我們的客戶服務團隊隨時準備回答客戶的問題，提供即時支持和協助，確保客戶滿意度。
						</p>
					</div>
				</div>
			</div>
		</main>
        <div class="d-grid gap-2 col-2 mx-auto row">
            <RouterLink to="/contact" type="button" class="btn btn-danger btn-lg shadow-sm"><h4 class="m-2 text-nowrap">聯絡我們</h4></RouterLink>
        </div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	header,
	.row {
		margin-bottom: 80px;
	}

	.text-shadow {
		text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
	}
</style>
