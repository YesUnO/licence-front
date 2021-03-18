import Vue from 'vue'
import VueRouter from 'vue-router'
import NewLicence from '../views/NewLicence.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewLicence',
    component: NewLicence
  },
  {
    path: '/licences',
    name: 'Licences',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LicencesInSystem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
