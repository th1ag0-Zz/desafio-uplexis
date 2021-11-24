<template>
	<div class="container">
		<header>
			<Banner />
		</header>

		<main>
			<div class="section-title">
				<span> < </span>
				<p>Histórico Empresarial</p>
			</div>

			<section class="slider-section">
				<button class="arrow arrow-left">
					<img src="assets/seta-esquerda.png" />
				</button>

				<div class="slider-section-content">
					<div class="slider-box">
						<img src="assets/photo-slider-1.jpg" />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
							numquam ullam ipsa.
						</p>
					</div>

					<div class="slider-box">
						<img src="assets/photo-slider-1.jpg" />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
							numquam ullam ipsa.
						</p>
					</div>
				</div>

				<button class="arrow arrow-right">
					<img src="assets/seta-direita.png" />
				</button>
			</section>

			<section class="info-content">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sint,
					ea sed perspiciatis ipsa aliquam mollitia unde aut in non enim ab quae
					sit alias esse beatae id similique illum. Unde aut in non enim ab quae
					sit alias esse beatae id similique illum. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Itaque quam, tempore cum aspernatur
					blanditiis vitae quisquam dolore delectus.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sint,
					ea sed perspiciatis ipsa aliquam mollitia unde aut in non enim ab quae
					sit alias esse beatae id similique illum.
				</p>

				<div class="about-content">
					<div class="price-content">
						<span>R$</span>
						40,00
					</div>

					<button>Habilitar</button>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';
import Banner from '~/components/Banner';

export default Vue.extend({
	head() {
		return {
			title: 'Detalhes'
		};
	},

	components: { Banner }
});
</script>

<style scoped lang="scss" src="./styles.scss" />
