<template>
    <v-app>
        <v-container fluid fill-height>
            <v-layout align-center justify-center row fill-height>
                <v-flex xs12 sm8 md4>
                    <form-register/>
                </v-flex>
            </v-layout> 
        </v-container>
    </v-app>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';

export default {
  components: {'form-register': FormRegister},
  data() {
      return {

      } 
  },

}
</script>

<style scoped>
</style>
