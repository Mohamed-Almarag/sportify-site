<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">Login</h3>
      <div class="row">
        <!-- Start Form  -->
        <div class="col-md-6">
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
              <!-- //? Password  -->
              <ValidationProvider rules="required|min:8" v-slot="{ errors }">
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Password"
                  @show-password="showPassword"
                  v-model="userInfo.password"
                ></BaseAppInput>
                <span v-if="errors[0]" class="validation-error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <!-- //? start remember me checkbox -->
              <div
                class="form-group d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="remember_me">
                  <input type="checkbox" id="rememberMe" />
                  <label for="rememberMe">Remember me</label>
                </div>
                <div class="forgetPass">
                  <nuxt-link to="/auth/forget-password">
                    Forget Password ?
                  </nuxt-link>
                </div>
              </div>
              <!-- //? end  remember me checkbox -->

              <div
                class="d-flex justify-content-center align-items-center mt-4"
              >
                <BaseAppButton>login</BaseAppButton>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <!-- Start Photo  -->
        <div class="photo-wrapper col-md-6">
          <img
            class="w-100"
            src="@/assets/images/register/login.png"
            alt="signup-photo"
            draggable="false"
          />
        </div>
      </div>
      <div class="register_question">
        <span class="ask_text">Don't have an account? </span>
        <nuxt-link class="ask_link" to="/auth/register">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  layout: 'auth-layout',
  data() {
    return {
      passwordType: 'password',
      userInfo: {
        email: '',
        password: '',
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
  .register_question {
    margin-top: 30px;
    .ask_text {
      color: $second-color;
      font-weight: 400;
    }
    .ask_link {
      color: $second-color;
      font-weight: 500;
      margin: 0 8px;
      text-decoration: none;
      transition: $transition;
      &:hover {
        color: $main-color;
      }
    }
  }
  //? remember me
  .remember_me {
    margin: 15px 0 0;
    input {
      display: none;
    }
    label {
      position: relative;
      padding-left: 30px;
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 0;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3px;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px solid #ddd;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 6px;
        width: 12px;
        height: 12px;
        border-radius: 4px;
        background-color: $main-color;
        opacity: 0;
        transition: all 0.15s;
      }
    }
    input[type='checkbox']:checked + label::after {
      opacity: 1;
    }
  }
  //? forget password
  .forgetPass {
    a {
      font-weight: 400;
      font-size: 15px;
      color: $second-color;
      text-decoration: none;
    }
  }
}
</style>
