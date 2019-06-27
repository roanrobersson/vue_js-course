import Vue from 'vue'
import Calculadora from './Calculadora.vue'
import Botao from './components/Botao.vue'

Vue.config.productionTip = false
//Vue.component('teste', Teste);

new Vue({
  render: h => h(Calculadora),
}).$mount('#app')
