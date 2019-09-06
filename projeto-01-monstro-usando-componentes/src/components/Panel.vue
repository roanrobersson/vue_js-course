<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .panel {
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(125, 125, 125, 0.2), 0 6px 20px 0 rgba(125, 125, 125, 0.19);
        margin-bottom: 20px;
        padding: 20px;
        display: flex;
    }
</style>