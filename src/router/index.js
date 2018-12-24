import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloForm from '@/components/HelloForm'
import HelloDashboard from '@/components/HelloDashboard'
import Login from '@/components/login'
import Body from '@/components/body'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'HelloForm',
      component: HelloForm
    },
    {
      path: '/dashboard',
      name: 'HelloDashboard',
      component: HelloDashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/body',
      name: 'Body',
      component: Body
    }
  ]
})
