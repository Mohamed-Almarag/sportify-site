<template>
  <div class="main_contact_wrapper">
    <SharedHeroSection bgImage="contact">
      <template #sub_title>
        <h3 class="hero_sub_title">contact us</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
    <!-- //? start contact us  -->
    <div class="contact_us">
      <div class="container-fluid">
        <div class="contact_form_wrapping">
          <div class="texts text-center">
            <h5 class="title">GET IN TOUCH</h5>
            <p>
              We’re Here To Help And Answer Any Question You Might Have. We Look
              Forward To Hearing From You
            </p>
          </div>
          <!--//! start form validation  -->
          <ValidationObserver ref="form">
            <form @submit.prevent="submitForm">
              <div class="row">
                <!-- //? Name  -->
                <div class="col-md-6 mb-3">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppInput
                      :isLabel="false"
                      type="text"
                      placeholder="Name"
                      v-model="userInfo.name"
                    ></BaseAppInput>
                    <span v-if="errors[0]" class="validation-error">{{
                      errors[0]
                    }}</span>
                  </ValidationProvider>
                </div>
                <!--//?  Email  -->
                <div class="col-md-6 mb-3">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
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
                </div>
                <!--//?  Phone  -->
                <div class="col-md-6 mb-3">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppInput
                      :isLabel="false"
                      type="number"
                      placeholder="Phone"
                      v-model="userInfo.phone"
                    ></BaseAppInput>
                    <span v-if="errors[0]" class="validation-error">{{
                      errors[0]
                    }}</span>
                  </ValidationProvider>
                </div>
                <!--//?  Subject  -->
                <div class="col-md-6 mb-3">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppInput
                      :isLabel="false"
                      type="text"
                      placeholder="Subject"
                      v-model="userInfo.subject"
                    ></BaseAppInput>
                    <span v-if="errors[0]" class="validation-error">{{
                      errors[0]
                    }}</span>
                  </ValidationProvider>
                </div>
                <!--//?  Message  -->
                <div class="col-sm-12 mb-3">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppInput
                      :isLabel="false"
                      :isTextarea="true"
                      type="text"
                      placeholder="Message"
                      v-model="userInfo.message"
                    ></BaseAppInput>
                    <span v-if="errors[0]" class="validation-error">{{
                      errors[0]
                    }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-3"
              >
                <BaseAppButton>send now</BaseAppButton>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <!--//! end form validation  -->

        <!--//! start Contact Information  -->
        <div class="contact_information">
          <h5 class="title">Contact Information</h5>
          <div class="every_info mb-3">
            <h6>Address:</h6>
            <p>
              Lorem Ipsum is simply dummy text of theing and typesetting is
              industry.
            </p>
          </div>
          <div class="every_info mb-3">
            <h6>Email:</h6>
            <p>info@example.com</p>
          </div>
          <div class="every_info mb-3">
            <h6>Phone:</h6>
            <p>+1 - 123 - 456 - 7890</p>
          </div>
        </div>
        <!--//! end Contact Information  -->
      </div>
    </div>
    <!-- //? end contact us  -->
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
    }
  },
  methods: {
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
}
</script>

<style lang="scss" scoped>
.main_contact_wrapper {
  .contact_us {
    padding: $main-padding 0;
    .texts {
      margin-bottom: 30px;
      .title {
        color: $second-color;
        font-weight: 500;
        font-size: 25px;
        margin-bottom: 25px;
      }
      p {
        color: $text-color;
        line-height: $line-height;
        font-weight: 400;
        margin-bottom: 0;
      }
    }
    .contact_form_wrapping {
      max-width: 80%;
      margin: auto;
      background-color: #dffff4;
      padding: 70px;
    }
    // ! contact_information
    .contact_information {
      max-width: 80%;
      margin: 50px auto 0;

      .every_info {
        h6 {
          color: $second-color;
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          color: $text-color;
          line-height: $line-height;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
