import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Layout from "@/layouts/Layout.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "./assets/main.css";
import "swiper/css";
import "swiper/css/navigation";

const app = createApp(App);

app.use(router);
app.component("Layout", Layout);
app.component("swiper", Swiper);
app.component("swiper-slide", SwiperSlide);

app.mount("#app");
