<template>

    <v-app>

        <app-toolbar />

        <v-layout>

            <app-navigation />

            <v-container fluid>
                <v-layout align-center justify-center row fill-height>
                    <v-flex xs5 sm5 md5>
                        <app-form-register />
                    </v-flex>
                </v-layout>
            </v-container>

        </v-layout>
            
        

        <app-footer />

    </v-app>

</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import FormRegister from '@/components/FormRegister.vue';
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
      'app-toolbar': Toolbar,
      'app-navigation': Navigation,
      'app-form-register': FormRegister,
      'app-footer' : Footer,
      },
  data() {
      return {

      } 
  },

}
</script>

<style scoped>
</style>
