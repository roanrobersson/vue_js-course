<template>
    <div class="control">
            <template v-if="gameRunning">
                <btn class="button button--attack" @click="attack( $event, player )">Atacar</btn>
                <btn class="button button--special-attack" @click="specialAttack( $event, player )">Ataque especial</btn>
                <btn class="button button--heal" @click="heal( $event, player )">Curar</btn>
                <btn class="button button--quit" @click="quit">Desistir</btn>
            </template>  
            <btn class="button button--start" @click="start" v-else>Iniciar jogo</btn>  
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue';

export default {
    name: "Control",

    components: {
        Btn,
    },
}
</script>

<style scoped>
    /*Component*/
    .control { 
        display: flex;
        flex-wrap: nowrap;
        flex-grow: 1;
        justify-content: center;
    }
</style>