<template>
  <Layout>
    <div v-if="show" class="mb-8  flex">
      <div class="w-full h-auto flex">
        <img class="w-full h-auto"
          :src="show?.image?.original || 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'"
          alt="">
      </div>
      <div class="px-4 py-4 flex" v-html="show.summary" />
    </div>
    <h4 class="text-6xl py-6 px-4">Seasons</h4>
    <swiper v-if="seasons" :slidesPerView="1" class=w-2/4>
      <swiper-slide v-for="season in seasons" class="relative">
        <div>
          <img v-if="season.image" class="w-full"
            :src="season?.image?.original || 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'"
            alt="">
          <div v-if="season.image"
            class="absolute w-50 h-50 left-0 top-0 bg-gray-900/50 flex items-center justify-center">
            <p class="text-8xl text-white font-bold">{{ season.number }}</p>
          </div>
        </div>

      </swiper-slide>

    </swiper>
    <h4 class="text-6xl py-6 px-4">Cast</h4>
    <div v-for="cast in casts">
      <cast-show :cast="cast" />
    </div>
  </Layout>
</template>
<script>

import CastShow from '../components/CastShow.vue'
// import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/css';
export default {
  data: () => ({
    show: null,
    seasons: null,
    casts: null
  }),
  components: {
    CastShow,
    // Swiper,
    // SwiperSlide,
  },
  methods: {
    async getShow() {
      const URL = 'https://api.tvmaze.com/shows/'
      const response = await fetch(`${URL}${this.$route.params.id}`)
      const data = await response.json()
      this.show = await data
    },
    async getSeason() {
      const URL = `https://api.tvmaze.com/shows/${this.$route.params.id}/seasons`
      const response = await fetch(`${URL}`)
      const data = await response.json()
      this.seasons = await data
    },
    async getCasts() {
      const URL = `https://api.tvmaze.com/shows/${this.$route.params.id}/cast`
      const response = await fetch(`${URL}`)
      const data = await response.json()
      this.casts = await data
    }
  },
  mounted() {
    this.getShow()
    this.getSeason()
    this.getCasts()
  }
}

</script>