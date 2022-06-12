<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">
        Forget password
      </h3>
      <div class="row">
        <!-- Start Form  -->
        <div class="col-md-6">
          <div class="auth_text">
            <p>Enter Your Email To Receive A Link To Reset Your Password</p>
          </div>
          <ValidationObserver ref="form">
            <form class="main-form-wrapper" @submit.prevent="submitForm">
              <!--//? Email  -->
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  type="email"
                  placeholder="Email"
                  v-model="userInfo.email"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <div
                class="d-flex justify-content-center align-items-center mt-4"
              >
                <BaseAppButton>send</BaseAppButton>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <!-- Start Photo  -->
        <div class="photo-wrapper col-md-6">
          <img
            class="w-100"
            src="@/assets/images/register/forget.png"
            alt="signup-photo"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Forget-Password',
  layout: 'auth-layout',
  data() {
    return {
      passwordType: 'password',
      userInfo: {
        email: '',
      },
      genders: [
        { name: 'Male', value: 'Male' },
        { name: 'Female', value: 'Female' },
        { name: 'Other', value: 'Other' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      get_genders: ['get_genders'],
    }),
  },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          this.handleRequest()
        }
      })
    },
    handleRequest() {
      console.log('yes submit')
    },
  },
  mounted() {
    this.$store.dispatch('get_all_emirats')
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
    }
  }
}
</style>
