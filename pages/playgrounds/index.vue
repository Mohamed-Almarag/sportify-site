<template>
  <div class="main_playground_wrapper">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">{{ $t('playground') }}</h3>
      </template>
      <template #text>
        <p class="hero_text">{{ $t('text') }}</p>
      </template>
    </SharedHeroSection>
    <!-- //? start all  playground -->
    <div class="all_playground">
      <div class="container-fluid">
        <div class="mb-5" v-for="i in 5" :key="i">
          <ModulesPlaygroundsDetailsCard
            :item="play"
          ></ModulesPlaygroundsDetailsCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playgrounds',
  data() {
    return {
      play: {
        id: '1',
        playground_name: 'skh',
        playground_cat: [
          {
            id: '3',
            name: 'cricket',
            image: 'uploads/5ilyUQwGWuPn3jivwPjlmrd6KSegCuP1wK3oKeXf.jpg',
          },
        ],
        about:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        rating: '5.00',
        lat: '31.59',
        long: '74.16',
        cost: '100',
        playground_gallery: [
          'http://offsideapi.anamuslim.co/public/storage/uploads/cfl43CbFPxXanmPGAVkmlgReSCcjV8AJ1TG8eb22.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/42r488V5I1OFpWXRSigA8BxW8OeJ7vzf3HCAzSah.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/G0unAqtBHSn3KzF2aHhlYSkiRVqDPbq0kMV68yXI.jpg',
          'http://offsideapi.anamuslim.co/public/storage/uploads/gtOrndVJHPtRNKA8fQv4ESkffLrdNgpYFTj6GWN2.jpg',
        ],
        working_hours: [
          {
            day: 'Wednesday',
            from: '20:00',
            to: '21:00',
          },
          {
            day: 'Thursday',
            from: '22:00',
            to: '23:00',
          },
          {
            day: 'Thursday',
            from: '13:00',
            to: '14:00',
          },
          {
            day: 'Friday',
            from: '15:00',
            to: '16:00',
          },
        ],
        reviews: [
          {
            value: '5',
            review: 'nvjvjvjvjc',
            name: 'Abu Salah',
            avatar:
              'http://offsideapi.anamuslim.co/public/img/user_placeholder.jpg',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main_playground_wrapper {
  .all_playground {
    padding: $main-padding 0;
  }
}
</style>
