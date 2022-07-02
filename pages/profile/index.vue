<template>
  <div class="main_profile_wrapper">
    <div class="container">
      <div class="info_profile_container">
        <!--//? start profile tabs  -->
        <div>
          <b-tabs content-class="mt-3">
            <!-- //? start  tab one  -->
            <b-tab title="PROFILE INFO" active>
              <div class="main_info_wrapper">
                <!-- user name  -- job -- img  -->
                <div class="main_details text-center">
                  <img
                    src="@/assets/images/register/profile.png"
                    alt="user_img"
                    class="user_img d-block"
                  />
                  <h5 class="user_name text-capitalize">mohamed alshorbaji</h5>
                  <span class="user_job d-block text-capitalize"
                    >TENNIS PLAYER</span
                  >
                </div>
                <!-- user email -- phone -- address  -->
                <div class="user_contacts">
                  <div class="parts">
                    <span class="part_a d-block">icon</span>
                    <span class="part_b d-block">example@gmail.com</span>
                  </div>
                  <div class="parts">
                    <span class="part_a d-block">icon</span>
                    <span class="part_b d-block">+971 50 1234567</span>
                  </div>
                  <div class="parts">
                    <span class="part_a d-block">icon</span>
                    <span class="part_b d-block">Business Bay, Dubai, uae</span>
                  </div>
                </div>
                <div class="user_about_us text-center">
                  <h5>About</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
              </div>
            </b-tab>
            <!-- //? end  tab one  -->

            <!-- //? start  tab two  -->
            <b-tab title="EDIT PROFILE "><p>I'm the second tab</p></b-tab>
            <!-- //? end  tab two  -->
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style lang="scss" scoped>
.main_profile_wrapper {
  padding: 130px 0 $main-padding;
  // padding-bottom: $main-padding;
  background-color: #effcf7;
  .info_profile_container {
    background-color: $white;
    .main_info_wrapper {
      padding: 1rem 1.5rem;
      .main_details {
        .user_img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: auto;
        }
        .user_name {
          color: $second-color;
          font-weight: 500;
          margin: 1rem 0;
        }
        .user_job {
          font-weight: 500;
          color: $text-color;
        }
      }
      .user_contacts {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem 0;
        .parts {
          display: flex;
          gap: 10px;
          .part_a {
            color: $main-color;
          }
          .part_b {
            color: $second-color;
          }
        }
      }
      .user_about_us {
        h6 {
          color: $second-color;
          font-weight: 500;
        }
        p {
          margin: 0;
          color: $text-color;
          font-weight: 400;
          line-height: $line-height;
        }
      }
    }
  }
}
</style>
