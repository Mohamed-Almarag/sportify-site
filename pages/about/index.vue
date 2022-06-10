<template>
  <div class="main_about_us_wrapper">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">{{ $t('playground') }}</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped></style>
