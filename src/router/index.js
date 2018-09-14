import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');
const user = r => require.ensure([], () => r(require('@/page/user/user')), 'user');
const goods = r => require.ensure([], () => r(require('@/page/goods/index')), 'goods');

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
        path: '/goods',
        component: goods,
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
