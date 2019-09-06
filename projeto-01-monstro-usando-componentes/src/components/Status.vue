<template>
    <div class="status">
        <h1 class="status__name">{{ character.name }}</h1>
        <progressbar :progress="characterHpPercent"/>
        <div class="status__hp-percent">{{ character.hp}} / {{ character.maxHp}}</div>
    </div>
</template>

<script>
import Progressbar from '@/components/ProgressBar.vue'

export default {
    name: "Status",

    props: {
        character: {
            type: Object,
            default: undefined,
        }
    },

    components: {
        Progressbar,
    },

    computed: {
        characterHpPercent() {
            return 100 / this.character.maxHp * this.character.hp;
        }
    }
}
</script>

<style>
    /*Component*/
    .status {
        margin-bottom: 20px;
        padding: 20px;
        padding: 10px 5%;
        display: flex;
        flex-grow: 1;
        flex-wrap: nowrap;
        flex-direction: column;    
        align-items: center;
    }

    /*Element*/
    .status__name {
        font-size: 25px;
        font-weight: 100;
        margin: 20px 0;
    }

    /*Element*/
    .status__hp-percent {
        margin-top: 5px;
    }
</style>