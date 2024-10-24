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
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="../assets/images/home/motorbikes.png"
						class="d-block w-100"
						alt="motorbikes"
					/>
					<div class="carousel-caption d-none d-md-block">
                        <h1>hello</h1>
						<h5>First slide label</h5>
						<p>
							Some representative placeholder content for the
							first slide.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<img
						src="../assets/images/home/motorbikes2.png"
						class="d-block w-100"
						alt="motorbikes2"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="../assets/images/home/motorbikes3.png"
						class="d-block w-100"
						alt="motorbikes3"
					/>
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
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped></style>
