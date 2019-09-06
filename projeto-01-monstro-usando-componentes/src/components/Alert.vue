<template>
    <div class="alert">
        <div class="alert__text alert__text--victory">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: "Alert",

    props: {
        text: {
            type: String,
            default: undefined,
        }
    }
}
</script>

<style scoped>
    /*Component*/
    .alert {
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }

    /*Element*/
    .alert__text {
        font-size: 20px;
        font-weight: bold;
    }

    /*Modifier*/
    .alert__text--victory{
        color: #008000;
    }

    /*Modifier*/
    .alert__text--defeat{
        color: #ff0000;
    }
</style>