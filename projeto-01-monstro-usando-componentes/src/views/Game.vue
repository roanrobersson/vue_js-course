<template>
    <div>
        <panel> 
            <status :character="player"/>
            <status :character="monster"/>
        </panel>
        
        <panel> 
            <alert text="Monstro ganhou!!"/>
        </panel>
       
        <panel> 
            <control />
        </panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel.vue';
import Status from '@/components/Status.vue';
import Alert from '@/components/Alert.vue';
import Control from '@/components/Control.vue';


export default {
    name: "Game",
    data() {
        return {
            player: {
                name: 'Jogador',
                hp: 75,
                maxHp: 100,
                target: null,
                color: 'blue',
                physicalAttack: 10,
            },

            monster: {
                name: 'Monstro',
                hp: 25,
                maxHp: 150,
                target: null,
                color: 'red',
                physicalAttack: 20,
            },

        }
    },
    props: {

    },
    components: {
        Panel,
        Status,
        Alert,
        Control,
    }
    
}
</script>>

<style scoped>

</style>>