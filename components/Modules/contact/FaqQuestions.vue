<template>
  <div class="main_faq_wrapper">
    <div class="accordion" role="tablist">
      <!-- //? Start Accordion  -->
      <div v-for="(item, index) in items" v-bind:key="index">
        <b-card no-body class="mb-4">
          <b-card-header header-tag="header" role="tab">
            <b-button
              class="tabs_button d-flex justify-content-between align-items-center"
              v-b-toggle="'accordion-' + index"
              role="button"
            >
              <span class="d-block">{{ item.name }}</span>
              <div>
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#plus"></use>
                </svg>
              </div>
            </b-button>
          </b-card-header>
          <b-collapse
            accordion="my-accordion"
            role="tabpanel"
            :id="'accordion-' + index"
            visible
          >
            <b-card-body>
              <b-card-text>{{ item.texts }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <!-- //? End Accordion  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqQuestions',
  data() {
    return {
      text: `
          Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.
        `,
      items: [
        {
          name: 'Which cancer types is covered?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'Are there any age limit?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'How %25 cash back payment works?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'How I use 3 year freemium option?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'What is the process to get lump sum payment when risk is realized?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'Which cancer types is covered?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'What is the process to get lump sum payment when risk is realized?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'Which cancer types is covered?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
        {
          name: 'What is the process to get lump sum payment when risk is realized?',
          texts:
            'Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main_faq_wrapper {
  .accordion {
    // max-width: 60%;
    // margin: auto;
    // max-height: 512px;
    // overflow-y: auto;
    // padding-right: 3rem;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      border-radius: 10px;
    }
    .card {
      border: 1px solid rgba(0, 139, 120, 0.39);
    }
    .card-header {
      padding: 0;
      border: none;
      .tabs_button {
        width: 100%;
        background: none;
        border: none;
        background: $white;
        border-radius: 8px;
        color: $main-color;
        padding: 0.8rem;
        &:focus {
          box-shadow: none;
        }
        span {
          font-weight: 500;
          font-size: 16px;
        }
        .icon {
          width: 20px;
          height: 20px;
          fill: $main-color;
          &.icon_minus {
            fill: $second-color;
          }
        }
      }
    }
    .card-body {
      background: rgba(196, 196, 196, 0.03);
      color: $text-color;
      span {
        font-weight: 600;
        font-size: 16px;
        color: $main-color;
      }
    }
  }
}
</style>
