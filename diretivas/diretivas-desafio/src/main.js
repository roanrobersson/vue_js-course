import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('quando', {
	bind(el, binding) {
		if (binding.arg === 'click') {
			el.onclick = function(e) {
				binding.value();
			}
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
