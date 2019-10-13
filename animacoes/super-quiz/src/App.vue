<template>
	<div id="app">
		<h1>Super Quiz</h1>
        <transition name="flip" mode="out-in">
            <Question 
                v-if="waitingAnswer" 
                :question="questions[currentQuestion]"
                @answerClick="answerClick($event)"
                :key="'question'">
            </Question>
            <Result v-else 
                :result="result" 
                @nextAnswer="nextAnswer()"
                :key="'result'"></Result>
        </transition>

        <Score class="score" :score="score"></Score>

	</div>
</template>

<script>
import Questions from '@/util/questions.js'
import Question from '@/components/Question.vue'
import Result from '@/components/Result.vue'
import Score from '@/components/Score.vue'

export default {
    components: { Question, Result, Score },
    data () {
        return {
            questions: Questions,
            waitingAnswer: true,
            result: false,
            currentQuestion: 0,
            score: {
                correct: 0,
                wrong: 0,
            }
        }
    },
    methods: {
        answerClick: function(i) {
            this.waitingAnswer = false;
            this.result = this.questions[this.currentQuestion].answers[i].correct;
            this.result ? this.score.correct++ : this.score.wrong++;
        },
        nextAnswer: function() {
            (this.currentQuestion < this.questions.length-1) ? this.currentQuestion++ : this.currentQuestion = 0;
            this.waitingAnswer = true;
        },
    },

}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

.score {
    margin-top: 25px;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}

</style>
