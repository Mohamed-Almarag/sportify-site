<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">
        Check your email
      </h3>
      <div class="auth_text text-center">
        <p>
          We sent a password reset code to <span>{{ email }}</span>
        </p>

        <!-- //? open email  -->
        <a :href="`mailto:${email}`" target="_blank" class="open_email">
          Open email
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Check-Email',
  layout: 'auth-layout',
  data() {
    return {
      processing: false,
      email: null,
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    this.email = this.$route.params.id
  },
  methods: {
    // handleRedirect() {
    //   setTimeout(() => {
    //     this.$router.replace(
    //       this.localePath({
    //         name: 'auth/new-password',
    //       })
    //     )
    //   }, 2000)
    // },
  },
}
</script>

<style lang="scss" scoped>
.main-auth-wrapper {
  // padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .auth-form-modal {
    background-color: $white;
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    // border-radius: $radius;
    .main-form-wrapper {
    }
  }
  .auth_text {
    p {
      color: $second-color;
      font-weight: 400;
      line-height: $line-height;
      font-size: 17px;
      margin-bottom: 1rem;
      span {
        color: $main-color;
      }
    }
  }
  .open_email {
    background-color: $main-color;
    color: $white;
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    width: 170px;
    text-transform: capitalize;
    text-decoration: none;
    display: block;
    margin: 2rem auto 0;
  }
}
</style>
