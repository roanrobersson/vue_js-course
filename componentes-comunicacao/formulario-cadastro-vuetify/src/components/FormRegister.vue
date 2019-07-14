<template>

    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nome"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-select
        v-model="countrySelect"
        :items="paises"
        :rules="[v => !!v || 'País é requerido']"
        label="País"
        item-text="nome"
        required
        return-object
        ></v-select>

        <v-select
        :disabled="!countrySelect"
        v-model="stateSelect"
        :items="estados"
        :rules="[v => !!v || 'Estado é requerido']"
        label="Estado"
        item-text="nome"
        required
        ></v-select>

        <v-select
        :disabled="!stateSelect"
        v-model="citySelect"
        :items="cidades"
        :rules="[v => !!v || 'Cidade é requerido']"
        label="Cidade"
        item-text="nome"
        required
        ></v-select>

        <v-btn
        :disabled="!valid"
        color="primary"
        @click="validate"
        >
        Submeter
        </v-btn>

    </v-form>

</template>

<script>
import paises from '@/paises.js';
import estados from '@/estados.js';
import cidades from '@/cidades.js';

  export default {
    data: () => ({
        paises: paises,
        estados: estados,
        cidades: cidades,

        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Nome é requerido',
            v => (v && v.length <= 10) || 'O nome deve ter no mínimo 5 caracteres'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail é requerido',
            v => /.+@.+/.test(v) || 'E-mail precisa ser válido'
        ],
        countrySelect: null,
        stateSelect: null,
        citySelect: null,
        checkbox: false
    }),

    watch: {
     countrySelect: function() {
        //console.log(this.countrySelect.nome);
     }   
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
  }
</script>