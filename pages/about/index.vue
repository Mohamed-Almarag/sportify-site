<template>
  <div class="main_about_us_wrapper">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">{{ $t('about') }}</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
    <!-- //! start about details  -->
    <div class="main_about_details_wrapper">
      <div class="container-fluid">
        <!-- //? start part one  -->
        <div class="part_one">
          <div class="row">
            <div class="photo_part col-md-6">
              <img
                draggable="false"
                src="@/assets/images/about/05.png"
                alt=""
              />
            </div>
            <div class="texts_part col-md-6">
              <h4 class="title_one">WE ARE KNOW FOR</h4>
              <h4 class="title_one two">TOP FEATURES FOR YOUR CONVENIENCE</h4>
              <div
                class="text_one"
                v-for="(item, index) in text_items"
                :key="index"
              >
                <h6 class="text_title">{{ item.title }}</h6>
                <p class="text_text">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- //? start part one -->
      </div>
    </div>
    <!-- //! end about details  -->
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      text_items: [
        {
          title: 'Simple and Clean Interface',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: 'Affordable Prices',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: 'Very Friendly Services',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main_about_details_wrapper {
  padding: $main-padding 0;
  .part_one {
    .photo_part {
    }
    .texts_part {
      .title_one {
        font-size: 32px;
        color: $second-color;
        font-weight: 500;
        margin: 0;
        position: relative;
        &.two {
          margin-top: 2rem;
        }
      }
      .text_one {
        margin-top: 2rem;
        .text_title {
          color: $second-color;
          font-weight: 500;
        }
        .text_text {
          color: $text-color;
          line-height: $line-height;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
