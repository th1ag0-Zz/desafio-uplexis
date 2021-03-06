export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'desafio-uplexis',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: 'https://uplexis.com.br/wp-content/themes/tema/vendor/favicon/favicon-32x32.png'
			},
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
			},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/static/css/global.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
