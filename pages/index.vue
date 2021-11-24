<template>
	<div class="container">
		<header>
			<Banner />

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
				<select name="" id="">
					<option value="1">Lançamento</option>
					<option value="2">Preço</option>
				</select>
			</div>

			<div class="services-content">
				<ServiceBox
					v-for="service in services"
					:key="service.id"
					:name="service.name"
					:description="service.description"
					:iconName="service.iconName"
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
			categorySelectedId: 0
		};
	},

	methods: {
		changeCategory(categoryId) {
			this.categorySelectedId = categoryId;
		}
	}
});
</script>

<style scoped lang="scss" src="./styles.scss" />
