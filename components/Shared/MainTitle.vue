<template>
  <div class="main_sections_title" v-if="title">
    <h2 class="title text-uppercase">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.main_sections_title {
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 32px;
    color: $second-color;
    font-weight: 500;
    margin: 0;
    position: relative;
    z-index: 5;
  }
}
</style>
