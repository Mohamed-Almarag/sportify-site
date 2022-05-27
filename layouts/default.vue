<template>
  <div class="main_website_layout">
    <SharedAppHeader></SharedAppHeader>
    <div>
      <Nuxt />
    </div>
    <SharedAppFooter></SharedAppFooter>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   const lang_type = this.$cookiz.get('lang')
  //   let nuxt_app_container = document.getElementById('__layout')
  //   if (lang_type == 'en') {
  //     nuxt_app_container.setAttribute('dir', 'ltr')
  //   } else if (lang_type == 'ar') {
  //     nuxt_app_container.setAttribute('dir', 'rtl')
  //   }
  // },
}
</script>

<style lang="scss" scoped></style>
