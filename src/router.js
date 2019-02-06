import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tabs from './views/Tabs.vue'
import Content1 from './components/Content1.vue'
import Content2 from './components/Content2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/tabs',
      component: Tabs,
      children: [
        {
          path: '',
          component: Content1
        },
        {
          path: 'tab1',
          component: Content1
        },
        {
          path: 'tab2',
          component: Content2
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
