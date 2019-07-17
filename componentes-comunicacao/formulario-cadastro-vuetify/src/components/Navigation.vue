<template>
    <v-navigation-drawer permanent >
        <v-list dense class="pt-0">
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click="vaca"
        >
            <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                {title: 'Opção1'},
                {title: 'Opção2'},
                {title: 'Opção3'},
                {title: 'Opção4'},
                {title: 'Opção5'},
            ]
        }
    },

}
</script>

<style scoped>

</style>
