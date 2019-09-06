<template>
    <div class="progress-bar">
        <div class="progress-bar__progress" :style="{ width: progress + '%' }" :class="{ 'progress-bar__progress--green': progress > 25, 'progress-bar__progress--red': progress < 26 }"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 100,
        },
    },
}
</script>

<style>
    /*Component*/
    .progress-bar {
        height: 20px;
        border: 1px solid gray;
        background-color: lightgrey;
        display: flex;
        width: 100%;
    }

    /*Element*/
    .progress-bar__progress {
        width: 100%;
    }

    /*Modifier*/
    .progress-bar__progress--green {
        background-color: green;
    }

    /*Modifier*/
    .progress-bar__progress--red {
        background-color: red;
    }
</style>