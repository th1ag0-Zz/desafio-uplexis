<template>
	<div class="service-box-content">
		<div class="service-info">
			<img :src="'assets/' + iconName + '.png'" :alt="name" />

			<p class="service-name">{{ name }}</p>

			<p class="service-description">{{ description }}</p>
		</div>

		<div class="service-footer-info">
			<button @click="goToDetailsPage">
				<p>R$ 29,99</p>

				<p>Saiba mais</p>
			</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	props: {
		name: { type: String, required: true },
		description: { type: String, required: true },
		iconName: { type: String, required: true }
	},

	methods: {
		goToDetailsPage() {
			this.$router.push('/Details');
		}
	}
});
</script>

<style scoped lang="scss" src="./styles.scss" />
