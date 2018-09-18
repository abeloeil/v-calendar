import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:year',
      name: 'year',
      component: () => import(/* webpackChunkName: "year" */ './views/Year.vue'),
    },
    {
      path: '/:year/:month',
      name: 'month',
      component: () => import(/* webpackChunkName: "month" */ './views/Month.vue'),
    },
    {
      path: '/:year/:month/:day',
      name: 'day',
      component: () => import(/* webpackChunkName: "day" */ './views/Day.vue'),
    },
  ]
})
