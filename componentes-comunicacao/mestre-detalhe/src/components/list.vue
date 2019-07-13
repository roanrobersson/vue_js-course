<template>
    <div class='list'>
        <ol>
            <li class="list-item"
            v-for="pais in paises" 
            :key="pais.id"
            @click="listItemClick"
            >
                {{pais.nome}}
            </li>
        </ol>
    </div>
</template>

<script>


export default {
    props: {
        paises: Array,
    },
    data() {
        return {

        }
    },
    methods: {
        listItemClick: function() {
           
        }
    }


}
</script>

<style>
.list {
    background-color: lightcoral;
    border: 2px solid black;
}
.list-item {
    list-style-type: none;
    border: 1px solid black;
    padding: 0;

}
</style>
