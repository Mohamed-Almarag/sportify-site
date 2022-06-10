<template>
  <div class="main_home_section_wrapper">
    <div class="container-fluid">
      <SharedMainTitle title="About Us"></SharedMainTitle>
      <div class="main_about_wrapper">
        <div class="row">
          <div class="part_one col-lg-6">
            <p class="p_1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <p class="p_1 p_2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an has been the industry's standard
              dummy text ever since the 1500s, when an unkno printer took a
              galley of type and scrambled it to men book.book.
            </p>
            <div class="link_details">
              <nuxt-link class="route_link" to="/about">learn more </nuxt-link>
            </div>
          </div>
          <div class="part_two col-lg-6">
            <img
              src="@/assets/images/about/Group.png"
              draggable="false"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style lang="scss" scoped>
.main_home_section_wrapper {
  .main_about_wrapper {
    margin-top: 50px;
    margin-bottom: 50px;
    .part_one {
      padding-top: 50px;
      .p_1 {
        color: $text-color;
        line-height: $line-height;
        font-weight: 400;
        margin-bottom: 0;
        &.p_2 {
          margin-top: 30px;
        }
      }
      .link_details {
        margin-top: 40px;
        .route_link {
          background-color: $main-color;
          color: $white;
          padding: 10px 45px;
          border-radius: 20px;
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
