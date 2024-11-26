<template>
	<div class="wrapper">
		<header
			class="header text-white text-shadow d-flex justify-content-center align-items-center mb-100"
		>
			<h1>收費標準</h1>
		</header>

		<main class="mb-80">
			<h2 class="text-center mb-40 mx-4">
				一般重型機車（600 c.c (含) 以下）
			</h2>
			<div class="container table-responsive">
				<table
					class="table table-hover table-striped-columns text-center fs-5"
				>
					<caption class="fs-6 text-end">
						新台幣 NTD
					</caption>
					<thead>
						<tr class="table-dark">
							<th scope="col">地點</th>
							<th scope="col">屏東</th>
							<th scope="col">高雄</th>
							<th scope="col">台南</th>
							<th scope="col">嘉義</th>
							<th scope="col">雲林</th>
							<th scope="col">彰化</th>
							<th scope="col">台中</th>
							<th scope="col">苗栗</th>
							<th scope="col">新竹</th>
							<th scope="col">桃園</th>
							<th scope="col">台北</th>
							<th scope="col">基隆</th>
							<th scope="col">宜蘭</th>
							<th scope="col">花蓮</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" class="table-dark">花蓮</th>
							<td>16,000</td>
							<td>14,000</td>
							<td>13,000</td>
							<td>12,500</td>
							<td>12,000</td>
							<td>11,500</td>
							<td>11,000</td>
							<td>10,500</td>
							<td>10,000</td>
							<td>9,000</td>
							<td>8,000</td>
							<td>9,000</td>
							<td>7,000</td>
							<td>-</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">宜蘭</th>
							<td>10,500</td>
							<td>8,500</td>
							<td>8,000</td>
							<td>7,500</td>
							<td>7,000</td>
							<td>6,500</td>
							<td>6,000</td>
							<td>5,500</td>
							<td>5,000</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>-</td>
							<td>7,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">基隆</th>
							<td>9,000</td>
							<td>7,000</td>
							<td>6,000</td>
							<td>5,500</td>
							<td>5,000</td>
							<td>4,500</td>
							<td>4,000</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>3,000</td>
							<td>9,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">台北</th>
							<td>8,500</td>
							<td>6,500</td>
							<td>5,000</td> <!-- 5,500? -->
							<td>5,000</td>
							<td>4,500</td>
							<td>4,000</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>1,500</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>8,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">桃園</th>
							<td>8,000</td>
							<td>6,000</td>
							<td>5,000</td>
							<td>4,500</td>
							<td>4,000</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>1,500</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>9,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">新竹</th>
							<td>7,500</td>
							<td>5,500</td>
							<td>4,500</td>
							<td>4,000</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>5,000</td>
							<td>10,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">苗栗</th>
							<td>7,000</td>
							<td>5,000</td>
							<td>4,000</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>5,500</td>
							<td>10,500</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">台中</th>
							<td>6,500</td>
							<td>4,500</td>
							<td>3,500</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>6,600</td> <!-- 6,000? -->
							<td>11,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">彰化</th>
							<td>6,000</td>
							<td>4,000</td>
							<td>3,000</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>6,500</td>
							<td>11,500</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">雲林</th>
							<td>5,500</td>
							<td>3,500</td>
							<td>2,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>5,000</td>
							<td>7,000</td>
							<td>12,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">嘉義</th>
							<td>5,000</td>
							<td>3,000</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>5,000</td>
							<td>5,500</td>
							<td>7,500</td>
							<td>12,500</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">台南</th>
							<td>4,500</td>
							<td>2,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>2,500</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>5,000</td>
							<td>5,500</td>
							<td>6,000</td>
							<td>8,000</td>
							<td>13,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">高雄</th>
							<td>4,000</td>
							<td>-</td>
							<td>2,000</td>
							<td>3,000</td>
							<td>3,500</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>5,000</td>
							<td>5,500</td>
							<td>6,000</td>
							<td>6,500</td>
							<td>7,000</td>
							<td>8,500</td>
							<td>14,000</td>
						</tr>
						<tr>
							<th scope="row" class="table-dark">屏東</th>
							<td>-</td>
							<td>4,000</td>
							<td>4,500</td>
							<td>5,000</td>
							<td>5,500</td>
							<td>6,000</td>
							<td>6,500</td>
							<td>7,000</td>
							<td>7,500</td>
							<td>8,000</td>
							<td>8,500</td>
							<td>9,000</td>
							<td>10,500</td>
							<td>16,000</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="d-flex explain">
				<h6 class="lh-lg text-nowrap">說明：</h6>
				<ol class="lh-lg fs-5 m-0">
					<li class="fw-bold">
						601 c.c 以上重型機車運費依上述運費再加300元。
					</li>
					<li>一次託運2輛以上重機時請來電公司法談優惠辦法。</li>
					<li>屏東縣不包括恆春及墾丁地區。</li>
				</ol>
			</div>
		</main>
		<div class="text-center">
			<RouterLink to="/contact" class="btn btn-danger btn-lg"
				><p class="h4 m-2 text-nowrap">聯絡我們</p></RouterLink
			>
		</div>
	</div>
</template>

<script setup>
	import { onMounted } from "vue";

	onMounted(() => {});
</script>

<style lang="scss" scoped>
	@import "@/sass/style.scss";

	@mixin breakpoint($point) {
		@media screen and (max-width: $point) {
			@content;
		}
	}

	.wrapper {
		width: 100%;
		padding-bottom: 80px;

		.header {
			background-color: $Red;
			height: 160px;
			width: 100%;
		}
		th,
		td {
			text-align: center;
			vertical-align: middle;
		}
		.explain {
			margin-left: 12vw;
			@include breakpoint(992px) {
				margin: 0 2rem;
			}
		}
		ol {
			list-style: decimal;
		}
	}

	.text-shadow {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.mb-100 {
		margin-bottom: 100px;
	}

	.mb-40 {
		margin-bottom: 40px;
	}

	.mb-80 {
		margin-bottom: 80px;
	}
</style>
