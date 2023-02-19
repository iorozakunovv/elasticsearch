import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/people',
      name: 'people',
      component: HomeView
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/input',
      name: 'input',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Inputs.vue')
    },
    {
      path: '/',
      name: 'Main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/shows/:id',
      name: 'show-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MovieDes.vue')
    },
    {
      path: '/person/:id',
      name: 'person-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonDes.vue')
    },
    {
      path: '/list-chart',
      name: 'List',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    }
  ]
})

export default router
