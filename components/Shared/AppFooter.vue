<template>
  <footer class="app_footer_container">
    <div class="container-fluid">
      <div class="row">
        <!-- //? start part one  -->
        <div class="part_one col-lg-3">
          <h5>sportify</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting is
            industry. Lorem Ipsum has Ipsum is simply dummy text of the printing
            and typesetting is a type specimen book.
          </p>
        </div>
        <!-- //? start part one  -->

        <!-- //? start part two  -->
        <div class="part_two col-lg-3">
          <h5>Quick Links</h5>
          <ul class="list-unstyled links">
            <li>
              <nuxt-link to="/home">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">Home</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- //? end part two  -->
        <!-- //? start part two  -->
        <div class="part_two col-lg-3">
          <h5>sportify info</h5>
          <ul class="list-unstyled links">
            <li>
              <nuxt-link to="/home">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">Terms &amp; conditions</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">Cookie Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home">FAQ's</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- //? end part two  -->

        <!-- //? start contact  -->
        <div class="contacts col-lg-3">
          <h5>contact Us</h5>
          <ul class="list-unstyled info">
            <li>
              <span class="one d-block">address:</span>
              <span class="two d-block"
                >Lorem Ipsum is simply dummy text of theing
              </span>
            </li>
            <li>
              <span class="one d-block">Email:</span>
              <span class="two d-block">info@example.com </span>
            </li>
            <li>
              <span class="one d-block">Phone:</span>
              <span class="two d-block">+1 - 123 - 456 - 7890</span>
            </li>
          </ul>
        </div>
        <!-- //? end contact  -->
      </div>
      <!-- start right reserved  -->
      <div class="all_right_reserved text-center">
        <span class="d-block">
          Copyright &copy; 2021 - All Right Reserved
        </span>
      </div>
      <!-- end right reserved  -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.app_footer_container {
  background-color: $bg-footer;
  padding-top: 80px;
  color: $white;
  .part_one {
    p {
      font-size: 14px;
      margin-bottom: 0;
    }
  }
  .part_two {
    .links {
      li {
        margin-bottom: 10px;
        a {
          color: $white;
          text-decoration: none;
          transition: $transition;
          display: block;
          width: fit-content;
          font-size: 14px;
          &:hover {
            color: $main-color;
            transform: translateX(10px);
          }
        }
      }
    }
  }
  .contacts {
    .info {
      li {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        .one {
          color: $main-color;
          text-transform: capitalize;
        }
        .two {
          color: $white;
        }
      }
    }
  }
  h5 {
    position: relative;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-size: 20px;
    letter-spacing: 2px;
    &::first-letter {
      color: $main-color;
      font-size: 25px;
    }
  }

  .all_right_reserved {
    color: $white;
    padding: 20px 0;
    margin-top: 30px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background-color: rgba(#fff, 0.4);
    }
  }
}
</style>
