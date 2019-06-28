<template>
	<v-app>
		<v-navigation-drawer app>
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-list-tile-title class="title">
							Menu
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>

			<v-divider></v-divider>

			<v-list dense class="pt-0">
				<v-list-tile v-for="item in itensMenu" :key="item.titulo">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>

		<toolbar />

		<carousel />

		<main-footer />
		
	</v-app>
</template>

<script>
import MainFooter from './components/MainFooter.vue';
import Carousel from './components/Carousel.vue';
import Toolbar from './components/Toolbar.vue';

export default {
	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
		}
	},
	components: {
		'main-footer': MainFooter,
		'carousel': Carousel,
		'toolbar': Toolbar,
	},
}






</script>
