<template>
  <div>
    <!-- //? start contact us  -->
    <div class="contact_us">
      <div class="container-fluid">
        <div class="contact_form_wrapping">
          <div class="mb-5">
            <SharedMainTitle title="contact us"></SharedMainTitle>
          </div>
          <!--//* start form validation  -->
          <client-only>
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
          </client-only>
        </div>
        <!--//* end form validation  -->
      </div>
    </div>
    <!-- //? end contact us  -->
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
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
.contact_us {
  .contact_form_wrapping {
    max-width: 80%;
    margin: auto;
    background-color: #dffff4;
    padding: 70px;
  }
}
</style>
