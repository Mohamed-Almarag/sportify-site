<template>
  <div class="main-auth-wrapper">
    <div class="auth-form-modal">
      <h3 class="auth-title text-capitalize text-center mb-5">
        create new password
      </h3>
      <div class="row">
        <!-- Start Form  -->
        <div class="col-md-6 new_pass_form">
          <ValidationObserver ref="form">
            <form class="main-form-wrapper" @submit.prevent="submitForm">
              <!--//? Password  -->
              <ValidationProvider
                rules="required|min:8|confirmed:confirm_password"
                vid="confirm_password"
                v-slot="{ errors }"
              >
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
              <!--//? Confirm Password  -->
              <ValidationProvider
                rules="required|confirmed:confirm_password"
                v-slot="{ errors }"
              >
                <BaseAppInput
                  :isLabel="false"
                  :isPassword="true"
                  :type="passwordType"
                  placeholder="Confirm Password"
                  @show-password="showPassword"
                  v-model="userInfo.c_password"
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
            src="@/assets/images/register/new-pass.png"
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
  name: 'New-Password',
  layout: 'auth-layout',
  data() {
    return {
      passwordType: 'password',
      userInfo: {
        password: null,
        c_password: null,
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

  // ? new_pass_form
  .new_pass_form {
    display: flex;
    align-items: center;
    span {
      width: 100%;
    }
  }
}
</style>
