<template>
  <div class="main_website_container" :class="{ is_arabic: arabic_lang }">
    <SharedScrollTopButton></SharedScrollTopButton>
    <!-- //? start hero section  -->
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
    <!-- //? start hero section  -->

    <div class="all_home_sections_wrapper">
      <!-- //? start sports section  -->
      <ModulesHomeSportsSection></ModulesHomeSportsSection>
      <!--//? end sports section  -->

      <!-- //? start Playground Section -->
      <div class="another_sections_wrapper">
        <ModulesHomePlaygroundsSection></ModulesHomePlaygroundsSection>
      </div>
      <!--//? end Playground Section -->

      <!-- //? start Reviews Section -->
      <div class="another_sections_wrapper">
        <ModulesHomeReviewsSection></ModulesHomeReviewsSection>
      </div>
      <!--//? end Reviews Section -->

      <!-- //? start Tournament Section -->
      <div class="another_sections_wrapper">
        <ModulesHomeTournamentSection></ModulesHomeTournamentSection>
      </div>
      <!--//? end Tournament Section -->

      <!-- //? start Contact Section -->
      <div class="another_sections_wrapper">
        <ModulesHomeContactSection></ModulesHomeContactSection>
      </div>
      <!--//? end Contact Section -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isArabic: false,
    }
  },
  mounted() {
    const lang_type = this.$cookiz.get('spotify_lang')
    let nuxt_app_container = document.getElementById('__nuxt')
    if (lang_type == 'ar') {
      // nuxt_app_container.setAttribute('dir', 'ltr')
      nuxt_app_container.classList.add('is_arabic')
      this.isArabic = true
    } else if (lang_type == 'en') {
      // nuxt_app_container.setAttribute('dir', 'rtl')
      nuxt_app_container.classList.remove('is_arabic')
      this.isArabic = false
    }
  },
  computed: {
    arabic_lang() {
      return this.isArabic
    },
  },
  async asyncData(context) {
    const home_data = await context.$axios.$get('/home')
    console.log(home_data)
    return {
      home_data,
    }
  },
}
</script>

<style lang="scss">
#__nuxt {
  // background: #eee;
  &.is_arabic {
    // direction: rtl;
    // text-align: right;
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
.all_home_sections_wrapper {
  padding: $main-padding 0;
  .another_sections_wrapper {
    padding-top: 130px;
  }
}
</style>
