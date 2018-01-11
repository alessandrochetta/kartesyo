import Vue from 'vue'
import Router from 'vue-router'
import DataSource from '@/components/DataSource'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DataSource
    },
    {
      path: '/DataSource',
      component: DataSource
    }
  ]
})
