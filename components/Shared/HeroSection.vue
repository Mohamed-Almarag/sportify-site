<template>
  <div
    :class="[
      'hero_section_container text-center text-white',
      `hero_section_container_${bgImage}`,
    ]"
  >
    <div class="main_content tex-center">
      <slot name="title"></slot>
      <slot name="sub_title"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    sub_title: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    bgImage: {
      type: String,
      required: false,
      default: 'defaultImage',
      validator: function (value) {
        return (
          ['default', 'home', 'playground', 'tournament', 'contact'].indexOf(
            value
          ) !== -1
        )
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.hero_section_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    inset: 0;
  }
  &_home {
    background-image: url('@/assets/images/hero/home.png');
  }
  &_playground {
    background-image: url('@/assets/images/hero/playground.png');
  }
  &_tournament {
    background-image: url('@/assets/images/hero/tournament.png');
  }
  &_contact {
    background-image: url('@/assets/images/hero/contact.png');
  }
  .main_content {
    position: relative;
    z-index: 7;
    .hero_title {
      text-transform: capitalize;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 5px;
    }
    .hero_sub_title {
      text-transform: capitalize;
      margin-bottom: 1.5rem;
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 5px;
    }
    .hero_text {
      margin-bottom: 0;
      // background: #eee;
      width: 60%;
      margin: auto;
      line-height: $line-height;
      font-size: 18px;
    }
  }
}
</style>
