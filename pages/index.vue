<template>
  <div class="main_website_container" :class="{ is_arabic: arabic_lang }">
    <SharedHeroSection bgImage="home">
      <template #title>
        <h3 class="hero_title">{{ $t('title') }}</h3>
      </template>
      <template #sub_title>
        <h3 class="hero_sub_title">{{ $t('sub_title') }}</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isArabic: false,
      // title: 'sporting club',
      // sub_title: 'sporting ',
      // text: ' club',
    }
  },
  mounted() {
    const lang_type = this.$cookiz.get('lang')
    let nuxt_app_container = document.getElementById('__nuxt')
    if (lang_type == 'ar') {
      // nuxt_app_container.setAttribute('dir', 'ltr')
      nuxt_app_container.classList.add('is_arabic')
      this.isArabic = false
    } else if (lang_type == 'en') {
      // nuxt_app_container.setAttribute('dir', 'rtl')
      nuxt_app_container.classList.remove('is_arabic')
      this.isArabic = true
    }
  },
  computed: {
    arabic_lang() {
      return this.isArabic
    },
  },
}
</script>

<style lang="scss">
#__nuxt {
  // background: #eee;
  &.is_arabic {
    direction: rtl;
    text-align: right;
  }
}
.main_website_container {
  // background-color: red;
  // color: $color;
  // &.is_arabic {
  //   direction: rtl;
  //   text-align: right;
  // }
}
</style>
