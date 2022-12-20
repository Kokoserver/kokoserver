import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import ContactView from "@/views/ContactView.vue"
import NotFound from "@/views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",

      component: ContactView,
    },
    { path: "*", name: "not-found", component: NotFound },
  ],
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, y: 0 }
    }
  },
})

export default router
