<template>
  <div>
    <swiper ref="swiper" @mouseover="swiperStop" @mouseout="swiperStart" :navigation="true" :modules="modules"
      :autoplay="{
        delay: 1500,
       
      }">
      <swiper-slide v-for="n in 4 ">
        <img
          src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=pexels-pixabay-220067.jpg&fm=jpg"
          alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Autoplay } from "swiper";
export default {
  components: {},
  data: () => ({
    modules: [Navigation, Autoplay]
  }),
  methods: {
    swiperStop() {
      this.$refs.swiper.autoplay.paused
    },
    swiperStart() {
      this.$refs.swiper.autoplay.running
    }
  }
}
</script>