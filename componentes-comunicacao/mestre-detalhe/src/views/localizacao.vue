<template>
    <div class="lists-container">
        <list class='list' :paises='paises' />
        <list class='list' :estados='estados' />
        <list class='list' :cidades='cidades' />
    </div>
</template>

<script>
import list from '@/components/list.vue';
import paises from '@/paises.js';
import estados from '@/estados.js';
import cidades from '@/cidades.js';

export default {
  components: {list},
  data() {
      return {
        paises: paises,
        estados: estados,
        cidades: cidades,
      } 
  },

}
</script>

<style scoped>
.lists-container {
    display: flex;
    justify-content: space-evenly;
}

.list { 
    min-height: 250px; 
    min-width: 150px;
    max-height: 300px;
}
</style>
