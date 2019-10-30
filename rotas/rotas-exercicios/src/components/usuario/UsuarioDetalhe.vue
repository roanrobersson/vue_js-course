<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong>{{ id }}</p>
        <router-link tag="button" primario 
                :to="{
                    name: 'editarUsuario',
                    params: { id },
                    query: { completo: false, lingua: 'en'},
                    hash: '#rodape',
                    }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
}
</script>

<style>

</style>