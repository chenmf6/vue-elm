import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import Ratings from '@/components/Ratings'
import Seller from '@/components/Seller'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/seller'
    }, {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }, {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
})

export default router
