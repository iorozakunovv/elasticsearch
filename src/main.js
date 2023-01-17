import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Layout from '@/layouts/Layout.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { createPinia } from 'pinia'

import 'swiper/css'
import "swiper/css/navigation"
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('Layout', Layout)
app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)

app.mount('#app')