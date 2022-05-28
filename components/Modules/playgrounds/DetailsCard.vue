<template>
  <div class="main_card_wrapper" v-if="item">
    <div class="photo_container">
      <img
        class="img"
        draggable="false"
        src="@/assets/images/cards/basketball.png"
        alt="basketball"
      />
    </div>
    <div class="content_container">
      <h5 class="title">{{ item.playground_name }}</h5>
      <p>
        {{ item.about | short_text(120, '....') }}
      </p>
      <div class="reviews">
        <img
          class="photo"
          draggable="false"
          src="@/assets/images/cards/review.png"
          alt=""
        />
        <span class="rev_value"
          ><span>{{ item.reviews ? item.reviews.length : 0 }}</span>
          Reviews</span
        >
      </div>
      <div class="rating">
        <div class="rating_value">
          <svg class="icon">
            <use xlink:href="@/static/svg/sprite.svg#star"></use>
          </svg>
          <span class="rat_value"> {{ item.rating ? item.rating : 0 }}</span>
        </div>
        <div class="link_details">
          <nuxt-link class="route_link" :to="`/playgrounds/${item.id}`"
            >Details</nuxt-link
          >
        </div>
        <!-- <div>{{ item }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsCard',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_card_wrapper {
  // box-shadow: 0px 3px 6px rgba(#64c4a4, 0.15);
  // background: #eee;
  display: flex;
  gap: 20px;
  .photo_container {
    border-radius: 25px;
    min-width: 30%;
    .img {
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 25px;
    }
  }
  .content_container {
    border-radius: 25px;
    flex-grow: 1;
    padding: 15px 30px;
    box-shadow: 0px 3px 6px rgba(#64c4a4, 0.25);
    .title {
      color: $second-color;
      font-weight: 500;
      font-size: 32px;
      margin-bottom: 10px;
    }
    p {
      color: $text-color;
      line-height: $line-height;
      font-weight: 400;
      margin-bottom: 0;
    }
    .reviews {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 25px 0;
      .photo {
      }
      .rev_value {
        color: $second-color;
        font-weight: 400;
      }
    }
    .rating {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      .rating_value {
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: $shadow;
        padding: 8px 25px;
        border-radius: 20px;
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
      .link_details {
        .route_link {
          background-color: $main-color;
          color: $white;
          padding: 8px 35px;
          border-radius: 20px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
