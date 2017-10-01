import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/User'
//import sidebar from '@/components/sidebar'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: [],
      },{
        path: '/user',
        component: user,
        meta: ['数据管理', '用户管理'],
      }/* ,{
        path: '/shop',
        component: shop,
        meta: ['数据管理', '商家管理'],
      },{
        path: '/food',
        component: food,
        meta: ['数据管理', '货物管理'],
      },{
        path: '/order',
        component: order,
        meta: ['数据管理', '订单管理'],
      },{
        path: '/admin',
        component: admin,
        meta: ['数据管理', '管理员管理'],
      } */
      ]
    }
  ]
})
