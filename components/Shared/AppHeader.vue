<template>
  <header class="main_header_container">
    <b-navbar toggleable="lg" type="" fixed="top">
      <div class="container-fluid">
        <!-- //? start logo  -->
        <!-- <b-navbar-brand href="#">
          <nuxt-link to="/">Sportify</nuxt-link>
        </b-navbar-brand> -->
        <li class="navbar-brand">
          <nuxt-link to="/">Sportify</nuxt-link>
        </li>
        <!-- //? end logo  -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- //? start navbar  -->
        <b-collapse id="nav-collapse" is-nav>
          <!-- //? start navbar routes  -->
          <b-navbar-nav class="m-auto main_links">
            <!-- <b-nav-item href="#" v-for="(link, index) in links" :key="index">
              <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
            </b-nav-item> -->

            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </b-navbar-nav>
          <!-- //? end navbar routes  -->

          <!-- //?  start navbar lang && signup && authentication -->
          <div class="main_user_container">
            <b-dropdown id="dropdown-1" text="Lang" class="main_dropdown">
              <!-- <b-dropdown-item @click="switch_lang('en')">En</b-dropdown-item>
              <b-dropdown-item @click="switch_lang('ar')">ع</b-dropdown-item> -->
              <li @click="switch_lang('en')" class="dropdown-item">En</li>
              <li @click="switch_lang('ar')" class="dropdown-item">ع</li>
            </b-dropdown>
            <!-- //? user auth  -->
            <b-dropdown id="dropdown-1" class="main_dropdown">
              <template #button-content>
                <b-avatar size="sm"></b-avatar>
              </template>
              <!-- <b-dropdown-item>
                <nuxt-link to="/profile">Profile</nuxt-link>
              </b-dropdown-item> -->
              <li class="dropdown-item">
                <nuxt-link to="/profile">Profile</nuxt-link>
              </li>
            </b-dropdown>
          </div>
          <!-- //? end navbar lang && signup && authentication -->
        </b-collapse>
        <!-- //? end navbar  -->
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isAuth: false,
      links: [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About Us' },
        { path: '/playgrounds', name: 'Playgrounds' },
        { path: '/contact', name: 'Contact Us' },
        { path: '/auth/register', name: 'Sign Up' },
      ],
    }
  },

  mounted() {
    console.log(this.$i18n.locale)
    this.$cookiz.get('spotify_lang')
    console.log(this.$cookiz.get('spotify_lang'))
    // setCookie
    if (this.$cookiz.get('spotify_lang') == 'ar') {
      this.$i18n.locale = 'ar'
    } else {
      this.$i18n.locale = 'en'
    }
    console.log(this.$i18n.locale)
  },
  methods: {
    switch_lang(local) {
      this.$i18n.locale = local
      this.$cookiz.set('spotify_lang', local)
    },
    handleScroll() {
      let navbar = document.querySelector('.main_header_container .navbar')
      if (process.browser && window.scrollY >= 10) {
        navbar.classList.add('nav-scroll')
      } else {
        navbar.classList.remove('nav-scroll')
      }
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style lang="scss" scoped>
.main_header_container {
  a {
    text-decoration: none;
  }
  .navbar {
    padding: 1rem;
    transition: $transition;
    &.nav-scroll {
      background-color: $bg-footer;
    }
    //? start logo
    .navbar-brand {
      a {
        position: relative;
        color: $white;
        font-weight: 500;
        display: block;
        &::first-letter {
          color: $main-color !important;
          font-size: 25px;
          font-weight: 600;
        }
      }
    }
    //? navbar collapse
    .navbar-collapse {
      .navbar-nav {
        &.main_links {
          justify-content: center;
          flex-grow: 1;
        }
        .nav-item {
          margin: 0 0.6rem;
          a {
            color: $white;
          }
          .nuxt-link-exact-active {
            &.nuxt-link-active {
              color: $main-color;
            }
          }
          // .nav-link {
          // }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.main_header_container {
  //? user && lang && dropdown
  .main_user_container {
    flex-grow: 0.1;
    justify-content: space-between;
    .dropdown {
      .btn-secondary.dropdown-toggle {
        color: $white;
        background: transparent !important;
        border: none;
        &::after {
          display: none !important;
        }
      }
      .dropdown-menu {
        min-width: auto;
        .dropdown-item {
          color: $text-color;
          transition: $transition;
          &:hover {
            color: $white;
            background-color: $main-color;
          }
        }
      }
    }
  }
}
</style>
