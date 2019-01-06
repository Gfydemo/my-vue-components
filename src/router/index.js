import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const components = {
  Layout: () => import('@/components/HelloWorld'),
  ForgetPassword: () => import('@/page/forgetPassword')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.Layout
    },
    {
      path: '/forget-password',
      name: 'forgetPassword',
      component: components.ForgetPassword
    }
  ]
})
