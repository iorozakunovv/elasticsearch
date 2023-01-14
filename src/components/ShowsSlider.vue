<template>
  <div class="py-6 px-4">
    <h2 v-if="title.length" class="mb-4 text-lg font-bold">{{ title }}</h2>
    <swiper v-if="shows.length" class="sm:hidden" :watchSlidesProgress="true" :slidesPerView="4">
      <swiper-slide v-for="item in shows" class="w-1/4 px-1">
        <router-link :to="`/shows/${item.id}`">
          <div>
            <img :src="item?.image?.medium" alt="">
          </div>
          <span class="text-sm">{{ item.name }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
    <swiper class="hidden sm:block" :watchSlidesProgress="true" :slidesPerView="2">
      <swiper-slide v-for="item in shows" class="w-1/2 px-1">
        <router-link :to="`/shows/${item.id}`">
          <div>
            <img :src="item?.image?.medium" alt="">
          </div>
          <span class="text-sm">{{ item.name }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
export default {
  props: {
    shows: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}

</script>