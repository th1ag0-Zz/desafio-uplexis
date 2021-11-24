<template>
	<div class="container">
		<header>
			<div class="slider-banner">
				<Banner />
			</div>

			<div class="categories-content">
				<button
					class="category-button"
					v-for="category in categories"
					:key="category.id"
					:name="category.name"
					@click="changeCategory(category.id)"
					:style="
						categorySelectedId === category.id && {
							backgroundColor: '#ff8739',
							color: '#fff'
						}
					"
				>
					<img
						v-if="categorySelectedId === category.id"
						:src="'assets/' + category.activeIconName + '.png'"
						:alt="category.name"
					/>
					<img
						v-else
						:src="'assets/' + category.iconName + '.png'"
						:alt="category.name"
					/>
					{{ category.name }}
				</button>
			</div>
		</header>

		<main>
			<div class="order-content">
				<p>ORDENAR</p>
				<select v-model="orderBy">
					<option value="Lançamento">Lançamento</option>
					<option value="Preço">Preço</option>
				</select>
			</div>

			<div class="services-content">
				<ServiceBox
					v-for="service in servicesFiltered"
					:key="service.id"
					:service="service"
				/>
			</div>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';

import categories from '~/utils/categories';
import services from '~/utils/services';
import ServiceBox from '~/components/ServiceBox';
import Banner from '~/components/Banner';

export default Vue.extend({
	head() {
		return {
			title: 'upMiner'
		};
	},

	components: {
		ServiceBox,
		Banner
	},

	data() {
		return {
			categories,
			services,
			orderBy: 'Lançamento',
			servicesFiltered: services,
			categorySelectedId: 0
		};
	},

	watch: {
		orderBy(newValue) {
			console.log(newValue);

			function compararPrecos(a, b) {
				return a.price - b.price;
			}

			// os IDs estão na ordem de crição
			function comparaIds(a, b) {
				return a.id - b.id;
			}

			if (newValue === 'Preço') {
				this.servicesFiltered = this.servicesFiltered.sort(compararPrecos);
			} else {
				this.servicesFiltered = this.servicesFiltered.sort(comparaIds);
			}
		}
	},

	methods: {
		changeCategory(categoryId) {
			this.categorySelectedId = categoryId;

			if (categoryId === 0) {
				this.servicesFiltered = this.services;
			} else {
				this.servicesFiltered = this.services.filter(
					item => item.categoryId === categoryId
				);
			}
		}
	}
});
</script>

<style scoped lang="scss" src="./styles.scss" />
