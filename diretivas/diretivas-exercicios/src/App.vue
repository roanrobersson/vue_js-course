<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-destaque-local:fundo="'red'">v-destaque-local:fundo="'red'"</p>
		<p v-destaque="'lightblue'">v-destaque="'lightblue'"</p>
		<p v-destaque:fundo.atrasar="{cor1: 'green', atraso: 5000}">v-destaque:fundo.atrasar="{cor1: 'green', atraso: 5000}"</p>
		<p v-destaque:fundo.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">v-destaque:fundo.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}"</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding) {
			//el.style.backgroundColor =  'lightgreen';

			let atraso = 0;
			if(binding.modifiers['atrasar']) atraso = 3000;

			setTimeout(() => {
				if(binding.arg === 'fundo') {
					el.style.backgroundColor = binding.value;
				} else{
					el.style.color= binding.value;
				}
			}, atraso);
		}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
