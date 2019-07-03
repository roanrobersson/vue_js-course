<template>
	<v-app>

		<main-menu />

		<toolbar />

		<v-content>
			<carousel />
		</v-content>

		<main-footer />
		
	</v-app>
</template>

<script>
import MainFooter from './components/MainFooter.vue';
import Carousel from './components/Carousel.vue';
import Toolbar from './components/Toolbar.vue';;
import MainMenu from './components/MainMenu.vue';

export default {
	data() {
		return {

		}
	},
	components: {
		'main-footer': MainFooter,
		'carousel': Carousel,
		'toolbar': Toolbar,
		'main-menu': MainMenu,
	},
}






</script>
