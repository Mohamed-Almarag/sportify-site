<template>
  <div class="single_playground_wrapper" v-if="playground">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">{{ playground.playground_name }}</h3>
      </template>
      <!-- <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template> -->
    </SharedHeroSection>
    <!-- //? start details  -->
    <div class="playground_details">
      <div class="container-fluid">
        <!-- //? start main details  -->
        <div class="main_details">
          <div class="row">
            <div class="part_one col-md-7">
              <h5 class="title text-capitalize">
                {{ playground.playground_cat[0].name }}
              </h5>
              <p>{{ playground.about }}</p>
              <!-- //? start  rating_cost_container etc  -->
              <div class="rating_cost_container">
                <div class="rating_value">
                  <svg class="icon">
                    <use xlink:href="@/static/svg/sprite.svg#star"></use>
                  </svg>
                  <span class="rat_value">
                    {{ playground.rating ? playground.rating : 0 }}</span
                  >
                </div>
                <div class="rating_value">
                  <svg class="icon">
                    <use xlink:href="@/static/svg/sprite.svg#star"></use>
                  </svg>
                  <span class="rat_value">
                    {{ playground.cost ? playground.cost : 0 }}</span
                  >
                </div>
              </div>

              <div class="rating_cost_container">
                <div class="rating_value">
                  <svg class="icon">
                    <use xlink:href="@/static/svg/sprite.svg#star"></use>
                  </svg>
                  <span class="rat_value">
                    {{ playground.lat ? playground.lat : 0 }}</span
                  >
                </div>
                <div class="rating_value">
                  <svg class="icon">
                    <use xlink:href="@/static/svg/sprite.svg#star"></use>
                  </svg>
                  <span class="rat_value">
                    {{ playground.long ? playground.long : 0 }}</span
                  >
                </div>
              </div>
              <!-- //? end rating_cost_container etc  -->
            </div>
            <div class="part_two col-md-5">
              <div class="cover_photo shadow-sm">
                <!-- <img
                class="img d-block w-100"
                :src="playground.playground_cat[0].image"
                alt="playground_cat"
              /> -->
                <img
                  class="img d-block w-100"
                  src="@/assets/images/cards/01.png"
                  alt="playground_cat"
                />
              </div>
            </div>
          </div>
          <!-- // ! start playground gallery  -->
          <div class="playground_gallery">
            <h5 class="title text-capitalize">playground gallery</h5>
            <div class="all_photos">
              <div
                class="every_item"
                v-for="(img, index) in playground.playground_gallery"
                :key="index"
              >
                <img class="photo" :src="img" alt="img" />
              </div>
            </div>
          </div>
          <!-- // ! end playground gallery  -->
          <!-- //! start working hours  -->
          <div class="working_hours">
            <h5 class="title text-capitalize">working hours</h5>
            <div class="all_hours">
              <div class="row">
                <div
                  class="every_work col-md-3"
                  v-for="(work, index) in playground.working_hours"
                  :key="index"
                >
                  <div class="every_work_wrapping text-capitalize">
                    <h6 class="">{{ work.day }}</h6>
                    <div class="from_to_hours">
                      <div class="span_container">
                        <span class="d-block form"> form</span>
                        <span class="d-block"> {{ work.from }} </span>
                      </div>
                      <div class="span_container">
                        <span class="d-block form"> to</span>
                        <span class="d-block"> {{ work.to }} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //! end working hours  -->
        </div>
        <!-- //! start playground reviews -->
        <div class="playground_reviews">
          <h5 class="title text-capitalize">users reviews</h5>
          <div class="all_reviews_container">
            <div
              class="every_review_card"
              v-for="(review, index) in playground.reviews"
              :key="index"
            >
              <img class="review_img" :src="review.avatar" :alt="review.name" />
              <h6 class="review_name">{{ review.name }}</h6>
              <p class="review_words">{{ review.review }}</p>
              <b-form-rating
                v-model="review.value"
                variant="warning"
                readonly
                precision="2"
                class="review_rate_value"
              ></b-form-rating>
            </div>
          </div>
        </div>
        <!-- //! end playground reviews  -->
        <!-- //? end main details  -->
      </div>
    </div>
    <!-- //? end details  -->
  </div>
</template>

<script>
export default {
  name: 'SinglePlayground',
  data() {
    return {
      playground: {
        id: '1',
        playground_name: 'skh',
        playground_cat: [
          {
            id: '3',
            name: 'cricket',
            image: 'uploads/5ilyUQwGWuPn3jivwPjlmrd6KSegCuP1wK3oKeXf.jpg',
          },
        ],
        about:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        rating: '5.00',
        lat: '31.59',
        long: '74.16',
        cost: '100',
        playground_gallery: [
          'http://offsideapi.anamuslim.co/public/storage/uploads/cfl43CbFPxXanmPGAVkmlgReSCcjV8AJ1TG8eb22.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/42r488V5I1OFpWXRSigA8BxW8OeJ7vzf3HCAzSah.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/G0unAqtBHSn3KzF2aHhlYSkiRVqDPbq0kMV68yXI.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/gtOrndVJHPtRNKA8fQv4ESkffLrdNgpYFTj6GWN2.jpg',
        ],
        working_hours: [
          {
            day: 'Wednesday',
            from: '20:00',
            to: '21:00',
          },
          {
            day: 'Thursday',
            from: '22:00',
            to: '23:00',
          },
          {
            day: 'Thursday',
            from: '13:00',
            to: '14:00',
          },
          {
            day: 'Friday',
            from: '15:00',
            to: '16:00',
          },
        ],
        reviews: [
          {
            value: '4.55',
            review: 'nvjvjvjvjc',
            name: 'Abu Salah',
            avatar:
              'http://offsideapi.anamuslim.co/public/img/user_placeholder.jpg',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.single_playground_wrapper {
  .playground_details {
    padding: $main-padding 0;
    .title {
      color: $second-color;
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 25px;
    }
    // !part one details
    .main_details {
      .part_one {
        p {
          color: $text-color;
          line-height: $line-height;
          font-weight: 400;
          margin-bottom: 0;
        }
        .rating_cost_container {
          margin: 25px 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          .rating_value {
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: $shadow;
            padding: 10px 25px;
            border-radius: 20px;
            width: fit-content;
            min-width: 120px;
            .icon {
              width: 17px;
              height: 17px;
              fill: $star-color;
            }
            .rat_value {
              color: $main-color;
              font-weight: 500;
            }
          }
        }
      }
      // ! part two img
      .part_two {
        .cover_photo {
          overflow: hidden;
          transition: $transition;
          .img {
            transition: $transition;
            object-fit: cover;
          }
          &:hover {
            .img {
              transform: scale(1.2);
              filter: brightness(0.8);
            }
          }
        }
      }
    }
    // ! playground_gallery
    .playground_gallery {
      margin-top: 50px;
      .all_photos {
        display: flex;
        justify-content: space-between;
        gap: 2%;
        flex-wrap: wrap;
        .every_item {
          width: 48%;
          min-height: 370px;
          max-height: 370px;
          margin-bottom: 30px;
          .photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }
    }

    // ! working_hours
    .working_hours {
      margin-top: 70px;
      .all_hours {
        .every_work {
          .every_work_wrapping {
            box-shadow: $shadow;
            padding: 25px 10px;
            border-radius: 10px;
            text-align: center;
            margin-top: 25px;
            h6 {
              font-weight: 400;
              color: $main-color;
            }
            .from_to_hours {
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-wrap: wrap;
              margin-top: 20px;
              .span_container {
                color: $text-color;
                .form {
                  margin-bottom: 8px;
                }
              }
            }
          }
        }
      }
    }
    .playground_reviews {
      margin-top: 70px;
      .all_reviews_container {
        .every_review_card {
          text-align: center;
          box-shadow: $shadow;
          width: 300px;
          padding: 15px;
          border-radius: 10px;
          .review_img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: block;
            margin: auto;
          }
          .review_name {
            margin-top: 15px;
          }
          .review_words {
            margin-bottom: 15px;
          }
          .review_rate_value {
            margin: 0;
            border: none;
            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
}
</style>
