<template>
<button class="button button--attack">Atacar</button>
</template>

<script>
export default {

}
</script>

<style scoped>
    /*Component*/
    .button {
        background-color: transparent;
        color: white;
        font-size: 20px;
        font-weight: 500;
        margin: 0 5px;
        padding: 5px;
        border-radius: 5px;

    }

    /*Modifier*/
    .button--attack {
        background-color: #e51c23;
    }

    /*Modifier*/
    .button--special-attack{
        background-color: #ff9800;
    }

    /*Modifier*/
    .button--heal {
        background-color: #259b24;
    }

    /*Modifier*/
    .button--quit {
        background-color: rgb(179, 179, 2);
    }

    /*Modifier*/
    .button--start {
        background-color: #4253af; 
    }
</style>