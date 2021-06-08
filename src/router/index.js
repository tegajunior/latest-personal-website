import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Certifications from '../views/Certifications.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },

  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications
  },

  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
