import { createRouter, createWebHistory } from 'vue-router'
import Dude from '@/components/Dude.vue'
import App from '@/App.vue'
// import HomeView from '@/components/HomeView.vue'
// import AboutView from '@/components/AboutView.vue'



const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: AboutView
  // },
  {
    path: '/dude',
    name: 'dude',
    component: Dude
  },
  {
    path: '/app',
    name: 'App',
    component: App
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
