import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Device from '@/components/device'
import Log from '@/components/log'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/device',
      name: 'Device',
      component: Device
    },{
      path: '/log',
      name: 'Log',
      component: Log
    }
  ]
})
