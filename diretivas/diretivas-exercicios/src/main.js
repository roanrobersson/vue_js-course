import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding) {

		let configs = binding.value;

		const cor1 = configs.cor1 || 'gray';
		const cor2 = configs.cor2 || 'black';
		let atraso = configs.atraso || 0;
		let intervalo = configs.intervalo || 0;
		let corAtual = cor1;

		//Aplica cor na fonte ou background
		const aplicarCor = cor => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = cor;
			} else{
				el.style.color = cor;
			}
		}
		
		//Atraso
		setTimeout(() => {
			if (binding.modifiers['alternar']) {

				//Intervalo
				setInterval(() => {
					corAtual = corAtual === cor1 ? cor2 : cor1;
					aplicarCor(corAtual)
				}, intervalo)
				
			} else {
				aplicarCor(cor1)
			}
		}, atraso);
		
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
