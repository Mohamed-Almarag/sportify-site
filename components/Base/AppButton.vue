<template>
  <button
    class="btn main_app_button"
    v-if="!isLink"
    @click="emitClick"
    :type="type"
  >
    <slot></slot>
  </button>
  <NuxtLink :to="toRoute" class="btn" v-else>
    <slot name="link"></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['emit-click'],
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    toRoute: {
      type: Object,
    },
    type: {
      type: String,
      default: 'btn',
    },
  },
  methods: {
    emitClick() {
      this.$emit('emit-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.main_app_button {
  background-color: $main-color;
  color: $white;
  padding: 10px 25px;
  border-radius: 25px;
  border: none;
  min-width: 170px;
  text-transform: capitalize;
  &:focus {
    box-shadow: none;
  }
}
</style>
