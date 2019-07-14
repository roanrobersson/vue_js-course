<template>
    <div class='list-container'>
        <ol class="list">
            <li class="list-item"
            v-for="pais in paises" 
            :key="pais.id"
            @click="listItemClick">
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

<style scoped>
.list-container {
    background-color: lightcoral;
    border: 2px solid black;
}

.list {
    padding: 0;
    margin: 0;
    overflow: scroll;
}

.list-item {
    list-style-type: none;
    border-bottom: 1px solid black;
    padding: 0;
}

.list-item:hover {
    background-color: red;
}
</style>
