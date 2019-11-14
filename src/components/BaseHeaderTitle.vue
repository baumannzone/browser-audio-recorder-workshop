<template>
  <div class="base-header-title">
    <h1 v-if="title" class="text-center font-weight-bold"> {{ title }} </h1>
    <h3 v-if="subtitle" class="text-center text-muted">{{ subtitle }}</h3>
    <hr class="my-5">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
