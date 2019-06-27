<template>
  <div id="app">
    <div>Calculadora</div>
    <tela/>
    <botao/>
  </div>
</template>

<script>
  import Botao from './components/Botao.vue';
  import Tela from './components/Tela.vue';

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      botao: Botao,
      tela: Tela,
    }
  }
</script>

<style>

</style>
