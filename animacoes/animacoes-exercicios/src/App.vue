<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
        <hr>
        <!-- <b-button variant="primary" class="mb-4" 
            @click="exibir = !exibir">Mostrar Mensagem</b-button>
        
        <transition name="fade" appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <hr>

        <transition name="slide" appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <hr>

        <transition name="slide" 
            enter-active-class="animated bounce"
            leave-active-class="animated shake"
            appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>


        <hr>

        <b-select v-model="tipoAnimacao">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </b-select>

        <hr>

        <transition :name="tipoAnimacao" appear mode="out-in">
            <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
            <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
        </transition>

        <hr>

        <button @click="exibir2 = !exibir2">Alternar</button>

        <transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"

            @before-leave="beforeLeave"
            @leave="leave">
            <div v-if="exibir2" class="caixa"></div>
        </transition>

        <hr>
        <div class="mb-4">
            <b-button variant="primary" class="mr-2"
                @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
            <b-button variant="secondary" 
                @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
        </div>
       
       <transition name="fade" mode="out-in">
            <component :is="componenteSelecionado"></component>
        </transition> -->

        <hr>

        <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
        
        <transition-group name="slide" tag="div">
            <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
                <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
            </b-list-group>
        </transition-group>
    </div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {
    components: { AlertaAdvertencia, AlertaInfo },
    data() {
        return {
            alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
            msg: 'Uma mensagem de informação para usuário',
            exibir: true,
            exibir2: true,
            tipoAnimacao: 'fade',
            larguraBase: 0,
            componenteSelecionado: 'AlertaInfo'
        }
    },
    methods: {
        adicionarAluno() {
            const s = Math.random().toString(36).substring(2)
            this.alunos.push(s)
        },
        removerAluno(indice) {
            this.alunos.splice(indice, 1)
        },
        animar(el, done, negativo) {
            let rodada = 1
            const temporizador = setInterval(() => {
                const novaLargura = this.larguraBase + 
                    (negativo ? -rodada * 10 : rodada * 10)
                el.style.width = novaLargura + 'px'
                rodada++
                if (rodada > 30) {
                    clearInterval(temporizador)
                    done()
                }
            }, 20)
        },
        beforeEnter(el) {
            this.larguraBase = 0
            el.style.width = this.larguraBase + 'px'
        },
        enter(el, done) {
            this.animar(el, done, false)
        },

        /////////////////////////////////////
        beforeLeave(el) {
            this.larguraBase = 300
            el.style.width = this.larguraBase + 'px'
        },
        leave(el, done) {
            this.animar(el, done, true)
        },

    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
    height: 100px;
    width: 300px;
    margin: 30px auto;
    background-color: lightgreen; 
}

/*-----------------*/
/*       FADE      */
/*-----------------*/
.fade-enter {}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-enter-to {}

.fade-leave {}

.fade-leave-active {
    transition: opacity 1s;
}

.fade-leave-to {}


/*-----------------*/
/*      SLIDE      */
/*-----------------*/
@keyframes slide-in {
    from { 
        transform: translateY(40px); 
        opacity: 0;
    }
    to { 
        transform: translateY(0); 
        opacity: 1;
    }
}

@keyframes slide-out {
    from { 
        transform: translateY(0); 
        opacity: 1;
    }
    to { 
        transform: translateY(40px); 
        opacity: 0;
    }
}

.slide-enter-active {
    animation: slide-in 1s ease;
}

.slide-leave-active {
    position: absolute;
    width: 100%;
    animation: slide-out 1s ease;
}


.slide-move {
    transition: transform 1s;
}

</style>
