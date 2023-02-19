import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Layout from '@/layouts/Layout.vue'
import App from './App.vue'
import router from './router'
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css' 
import './assets/main.css'
import "swiper/css/navigation";

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'


import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.component('Layout', Layout)
app.mount('#app')
