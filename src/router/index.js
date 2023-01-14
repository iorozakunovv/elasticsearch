import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/people",
      name: "people",
      component: () => import("../views/People.vue"),
    },
    {
      path: "/shows",
      name: "shows",
      component: () => import("../views/Shows.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/shows/:id",
      name: "show-detail",
      component: () => import("../views/ShowDetail.vue"),
    },
    {
      path: "/person/:id",
      name: "person-detail",
      component: () => import("../views/PersonDetail.vue"),
    },
  ],
});

export default router;
