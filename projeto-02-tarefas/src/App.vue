<template>
	<div id="app">
		<h1>Tarefas</h1>
        <TaskProgress :progress="progress"/>
        <NewTask @create-new-task="createNewTask($event)"/>
        <TaskGrid />
	</div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue"
import NewTask from "@/components/NewTask.vue"
import TaskGrid from "@/components/TaskGrid"

export default {
    components: {TaskProgress, NewTask, TaskGrid},

    data() {
        return {
            //Somente para teste...
            total: 10,
            done: 5,
        }

    },

    computed: {
        progress() { return Math.round( 100 / this.total * this.done) }
    },

    methods: {
        createNewTask(e) { console.log(e); },
    }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
