<template>
  <div class="overflow-hidden"
       :style="`height: calc(100vh - ${headerStore.headerHeight}px)`">
    <swiper ref="swiper"
            class="h-full"
            @mouseover="swiperStop"
            @mouseout="swiperStart"
            :loop="true"
            :navigation="true"
            :modules="modules" :autoplay="{
      delay: 2000,
      disableOnInteraction,
      pauseOnMouseEnter: true
    }">
      <swiper-slide v-for="(image, i) in images" class="h-full">
        <router-link :to="`/shows/${random[i]}`" class="h-full w-full flex">
          <div class="w-1/2 h-full p-4">
            <img class="h-full w-full object-cover" :src="image?.first?.resolutions?.original?.url" alt="">
          </div>
          <div class="w-1/2 h-full p-4">
            <img class="h-full w-full object-cover" :src="image?.second?.resolutions?.original?.url" alt="">
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Autoplay } from "swiper";
import { mapStores } from 'pinia'
import { useHeaderStore } from '@/stores/header.js'
export default {
  props: {
    images: {
      type: Array,
      default: []
    },
    random: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapStores(useHeaderStore)
  },
  data: () => ({
    disableOnInteraction: false,
    modules: [Navigation, Autoplay]
  }),
  methods: {
    swiperStop() {
      this.$refs.swiper.autoplay.paused
    },
    swiperStart() {
      this.$refs.swiper.autoplay.running
    }
  },
}
</script>