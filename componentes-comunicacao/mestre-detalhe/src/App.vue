<template>
  <div id="app">
      <localizacao />
  </div>
</template>

<script>
import localizacao from './views/localizacao.vue';

export default {
  name: 'app',
  components: {localizacao},

}
</script>

<style>
body {
    margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightgray;
  color: black;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
}
</style>
