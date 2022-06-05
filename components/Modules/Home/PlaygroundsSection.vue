<template>
  <div class="main_home_section_wrapper">
    <div class="container-fluid">
      <SharedMainTitle title="Playgrounds"></SharedMainTitle>
      <div class="main_slider_wrapper">
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div
              class="slider"
              v-for="(item, index) in slider_items"
              :key="index"
            >
              <div class="main_slider_details">
                <div class="img_container">
                  <img class="img" :src="item.img_src" alt="img" />
                </div>
                <div class="main_slider_content">
                  <img class="photo" :src="item.img_src2" alt="img" />
                  <h5 class="title text-center">{{ item.title }}</h5>
                  <p class="text">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaygroundsSection',
  data() {
    return {
      slider_items: [
        {
          img_src: require('@/assets/images/sliders/01.png'),
          img_src2: require('@/assets/images/sliders/001.png'),
          title: 'football',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/02.png'),
          img_src2: require('@/assets/images/sliders/002.png'),
          title: 'basketball',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/03.png'),
          img_src2: require('@/assets/images/sliders/003.png'),
          title: 'cricket',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/04.png'),
          img_src2: require('@/assets/images/sliders/004.png'),
          title: 'tennis',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/01.png'),
          img_src2: require('@/assets/images/sliders/001.png'),
          title: 'basketball',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
      ],
      settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main_home_section_wrapper {
  .main_slider_wrapper {
    margin-top: 50px;

    .slider {
      padding: 10px;
      .main_slider_details {
        cursor: grab;
        border-radius: 20px;
        box-shadow: 0px 3px 6px rgba(#64c4a4, 0.25);
      }
    }
    .img_container {
      width: 100%;
      .img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .main_slider_content {
      padding: 20px;
      .photo {
        width: 49px;
        height: 44px;
        margin: auto;
        display: block;
      }
      .title {
        margin: 20px 0;
        color: $second-color;
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
      }
      .text {
        color: $text-color;
        line-height: $line-height;
        font-weight: 400;
        margin-bottom: 0;
        font-size: 15px;
      }
    }
  }
}
</style>

<style lang="scss">
.slick-arrow {
  background: $main-color !important;
  // background: $white !important;
  color: $white !important;
  top: auto !important;
  bottom: -60px !important;
  width: 30px !important;
  height: 30px !important;
  border-radius: 50% !important;
  transform: translate(0) !important;
  border: 1px solid $main-color !important;
  &.slick-prev {
    left: 50% !important;
  }
  &.slick-next {
    left: 55% !important;
  }
}

.slick-prev:before,
.slick-next:before {
  color: $white !important;
  opacity: 1 !important;
}
</style>
