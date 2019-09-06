<template>
  <div id="app">
    <game />
  </div>
</template>

<script>
import Game from './views/Game.vue'

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style>
#app {
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
}
</style>
