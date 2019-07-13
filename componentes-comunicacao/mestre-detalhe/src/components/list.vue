<template>
    <div class='list' @click="listClick">
        <table>
            
        </table>
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
        listClick: function() {
            console.log(this.paises);
        }
    }


}
</script>

<style>
.list {

    background-color: lightcoral;
    border: 2px solid black;

}

</style>
