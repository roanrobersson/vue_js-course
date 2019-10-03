<template>
  <div>
      <span>{{ value.nome }} {{ value.sobrenome }}</span>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true,
        }

    }
}
</script>

<style>

</style>