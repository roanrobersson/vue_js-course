<template>
    <div class="task-grid">
        <task />
        <task />
        <task />
        <task />
    </div>
</template>

<script>
import Task from "@/components/Task.vue"

export default {
    components: {Task, },
}
</script>

<style scoped>
    .task-grid {
        display: flex;
        flex-wrap: wrap;
        margin: 0 100px;
    }
</style>