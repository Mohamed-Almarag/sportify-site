<template>
  <div class="main_tournaments_wrapper">
    <SharedHeroSection bgImage="tournament">
      <template #sub_title>
        <h3 class="hero_sub_title">tournaments</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
    <!-- //? start all  tournaments -->
    <div class="all_tournaments">
      <div class="container-fluid">
        <div class="mb-5" v-for="i in 5" :key="i">
          <div class="main_card_wrapper">
            <div class="photo_container">
              <img
                class="img"
                draggable="false"
                src="@/assets/images/tournaments/01.png"
                alt="basketball"
              />
            </div>
            <div class="content_container">
              <h5 class="title text-capitalize">football</h5>
              <p>
                {{ text | short_text(120, '....') }}
              </p>
              <h6>Aktiv Nation, Al Quoz</h6>
              <span class="dates"> 31-05-2022 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tournaments',
  data() {
    return {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. er took a  is this book my specimen book.',
    }
  },
}
</script>

<style lang="scss" scoped>
.main_tournaments_wrapper {
  .all_tournaments {
    padding: $main-padding 0;
    // ! start card style
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
        h6 {
          color: $second-color;
          font-weight: 500;
          font-size: 20px;

          margin: 25px 0;
        }
      }
      .dates {
        background-color: #dffff4;
        color: $second-color;
        padding: 10px 35px;
        border-radius: 20px;
        text-decoration: none;
        display: block;
        width: fit-content;
        font-size: 14px;
      }
    }
  }
}
</style>
