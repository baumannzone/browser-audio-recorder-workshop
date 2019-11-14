import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routeOptions = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' }
]

const routes = routeOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
