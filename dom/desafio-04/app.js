new Vue({
	el: '#desafio',
	data: {
        destacar: false,
        entradaExercicio3: 'backgroundRed',
        entradaExercicio5: 'green',
        progress: 0,
        intervalProgressBar: null
	},
	methods: {
		iniciarEfeito() {
            setInterval(() => {
                this.destacar = !this.destacar;
            },  1000);
		},
		iniciarProgresso() {
            this.progress = 0;
            clearInterval(this.intervalProgressBar);
            this.intervalProgressBar = setInterval(() => {
                (this.progress < 100) ? 
                    this.progress++ : clearInterval(this.intervalProgressBar); //Se terminou, destrói o setInterval
            }, 20);
		}
	}
})
