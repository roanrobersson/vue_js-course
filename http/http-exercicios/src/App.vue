<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
        <b-alert show dismisseble v-for="mensagem in mensagens"
            :key="mensagem.texto"
            :variant="mensagem.tipo">
            {{ mensagem.texto }}
            </b-alert>
        <b-card>
            <b-card-text class="text-center d-block bg-warning rounded" v-if="idUsuarioSelecionado">Editando usuário de ID:  &nbsp;&nbsp;&nbsp;{{ idUsuarioSelecionado }}</b-card-text><br>
            <b-form-group label="Nome:">
                <b-form-input type="text" size="lg"
                    v-model="usuario.nome"
                    placeholder="Informe o Nome"></b-form-input>
            </b-form-group>
            <b-form-group label="E-mail:">
                <b-form-input type="email" size="lg"
                    v-model="usuario.email"
                    placeholder="Informe o E-mail"></b-form-input>
            </b-form-group>
            <hr>
            <b-button @click="salvar" size="lg" 
                variant="primary">Salvar</b-button>
            <b-button @click="obterUsuarios" size="lg" 
                variant="success" class="ml-2">Obter Usuários</b-button>
        </b-card>
        
        <hr>

        <b-list-group>
            <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
                <strong>Nome: </strong> {{ usuario.nome }}<br>
                <strong>E-mail: </strong> {{ usuario.email }}<br>
                <strong>ID: </strong> {{ id }}<br>
                <b-button variant="warning" size="lg" @click="carregar(id)">
                    Editar
                </b-button>
                <b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">
                    Excluír
                </b-button>
            </b-list-group-item>
        </b-list-group>

        <div id="spinner-background" v-if="inLoading">
            <b-spinner variant="light" label="Loading..."  style="width: 5rem; height: 5rem;">fdf</b-spinner>
        </div>
	</div>
</template>

<script>

export default {
    data() {
        return {
            inLoading: false,
            mensagens: [],
            usuarios: [],
            idUsuarioSelecionado: null,
            usuario: {
                nome: '',
                email: '',
            }
        }
    },
    methods: {
        limpar() {
            this.usuario.nome = ''
            this.usuario.email = ''
            this.idUsuarioSelecionado = null
            this.mensagens = []
        },
        carregar(id) {
            this.idUsuarioSelecionado = id
            this.usuario = { ...this.usuarios[id] }
        },
        excluir(id) {
            this.inLoading = true;
            this.$http.delete(`/usuarios/${id}.json`)
                .then( () => {
                    this.limpar() 
                    this.obterUsuarios()
                    })
                .catch( () => {
                    this.mensagens.push({
                        texto: 'Problema aoexcluir!',
                        tipo: 'danger'
                    })
                })
                .then( () => {
                    this.inLoading = false;
                })
        },
        salvar() {
            const metodo = this.idUsuarioSelecionado ? 'patch' : 'post'
            const finalUrl = this.idUsuarioSelecionado ? `/${this.idUsuarioSelecionado}.json` : '.json'
            let promiseResponse
            this.inLoading = true

            this.$http({
                method: metodo,
                url: `/usuarios${finalUrl}`,
                data: this.usuario
            })
                .then( () => {
                    this.limpar()
                    this.obterUsuarios()
                    this.mensagens.push({
                        texto: 'Operação realizada com sucesso!',
                        tipo: 'success'
                    })
                })
                .catch( () => {
                    this.mensagens.push({
                        texto: 'Problema ao salvar!',
                        tipo: 'danger'
                    })
                })
                .then( () => {
                    this.inLoading = false;
                })
        },
        obterUsuarios() {
            this.limpar()
            this.inLoading = true
            this.$http.get('usuarios.json')
                .then(res => {
                    this.usuarios = res.data
                })
                .catch( () => {
                    this.mensagens.push({
                        texto: 'Problema ao obter usuários!',
                        tipo: 'danger'
                    })
                })
                .then( () => {
                    this.inLoading = false;
                }) 
        }
    }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}

#spinner-background{
    position: fixed !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.685);
}

</style>
