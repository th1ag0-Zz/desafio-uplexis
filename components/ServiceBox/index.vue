<template>
	<div class="service-box-content">
		<div class="service-info">
			<img :src="'assets/' + service.iconName + '.png'" :alt="service.name" />

			<p class="service-name">{{ service.name }}</p>

			<p class="service-description">{{ service.description }}</p>
		</div>

		<div class="service-footer-info">
			<button @click="goToDetailsPage">
				<p>R$ {{ service.price }},00</p>

				<p>Saiba mais</p>
			</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	props: {
		service: { type: Object, required: true }
	},

	methods: {
		goToDetailsPage() {
			this.$router.push('/Details');
		}
	}
});
</script>

<style scoped lang="scss" src="./styles.scss" />
