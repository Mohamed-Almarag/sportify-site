<template>
  <div class="main_home_section_wrapper">
    <div class="container-fluid">
      <SharedMainTitle title="user reviews"></SharedMainTitle>
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
                  <p class="text">
                    {{ item.text }}
                  </p>
                  <h5 class="title text-center">{{ item.name }}</h5>
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
  name: 'ReviewsSection',
  data() {
    return {
      slider_items: [
        {
          img_src: require('@/assets/images/sliders/re-01.png'),
          name: 'Divid Mash',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/re-02.png'),
          name: 'Anna Levis',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/re-03.png'),
          name: 'Martin Louis',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/re-01.png'),
          name: 'Divid Mash',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/re-02.png'),
          name: 'Anna Levis',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
        {
          img_src: require('@/assets/images/sliders/re-03.png'),
          name: 'Martin Louis',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
      ],
      settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
  background-image: url('../../../assets/images/sliders/reviews.png');
  background-size: 100% 100%;
  padding: 80px 0 130px;
  position: relative;
  &::before {
    position: absolute;
    inset: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(#64c4a4, 0.3);
  }
  .main_slider_wrapper {
    margin-top: 50px;
    position: relative;
    z-index: 45;
    .slider {
      padding: 10px;
      .main_slider_details {
        cursor: grab;
        border-radius: 10px;
        background-color: #e6f2ee;
        padding: 20px;
        // box-shadow: 0px 3px 6px rgba(#64c4a4, 0.25);
      }
    }
    .img_container {
      width: 100%;
      .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: auto;
      }
    }
    .main_slider_content {
      .photo {
        width: 49px;
        height: 44px;
        margin: auto;
        display: block;
      }
      .title {
        margin: 0;
        color: $main-color;
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
      }
      .text {
        color: $text-color;
        line-height: $line-height;
        font-weight: 400;

        margin: 20px 0;
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
