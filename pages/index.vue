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

    <div class="container-fluid">
      <div class="main_slider_wrapper">
        <agile v-bind="myOptions">
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
          <!--//? slider custom arrows  -->
          <template slot="prevButton">
            <svg class="icon_product">
              <use xlink:href="~/static/svg/sprite.svg#arrow_left"></use>
            </svg>
          </template>
          <template slot="nextButton">
            <svg class="icon_product">
              <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
            </svg>
          </template>
        </agile>
      </div>
    </div>
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
      myOptions: {
        navButtons: true,
        slidesToShow: 3,
        dots: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
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
          title: 'football',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
        },
      ],
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

.main_slider_wrapper {
  margin-top: 50px;
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
</style>

<style lang="scss">
.slider {
  padding: 10px;
  .main_slider_details {
    // background: #eee;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(#64c4a4, 0.25);
  }
  .agile {
    // margin: auto;
    // width: 320px !important; //! test
    // overflow: hidden;
    .agile__slide {
      // height: 300px;
      // width: 320px; //! test
      // border-radius: 30px;
      // margin: auto;
      // background: #eee;
      .img_container {
        width: 100%;
        .img {
          widows: 100%;
        }
      }
    }
    .agile__track {
      gap: 10px;
    }
  }
}
// ! custom slider arrows
.agile__actions {
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  .agile__nav-button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: $main-color;
    border: none;
    .icon_product {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      fill: $white;
    }
  }
}
</style>
