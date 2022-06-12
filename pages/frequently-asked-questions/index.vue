<template>
  <div class="main_privacy_wrapper">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">Frequently asked questions (FAQs)</h3>
      </template>
    </SharedHeroSection>
    <div class="container-fluid">
      <div class="faq_questions_wrapper">
        <div class="texts">
          <h5 class="title">How Can We Help?</h5>
          <p>
            Lorem Ipsum is simply dummy text of theing and typesetting is
            industry. Lorem Ipsum is simply dummy text of theing and typesetting
            is industry.
          </p>
        </div>
        <Modules-contact-FaqQuestions></Modules-contact-FaqQuestions>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frequently Asked Questions',
}
</script>

<style lang="scss" scoped>
.main_privacy_wrapper {
  .faq_questions_wrapper {
    padding: $main-padding 0;
    max-width: 80%;
    margin: auto;
    .title {
      color: $second-color;
      font-weight: 500;
      font-size: 25px;
      margin-bottom: 25px;
    }
    p {
      color: $text-color;
      line-height: $line-height;
      font-weight: 400;
      margin-bottom: 25px;
    }
  }
}
</style>
