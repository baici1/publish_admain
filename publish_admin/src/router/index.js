// 你写的页面添加路由
import Login from '@/views/login'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由配置地方
const routes = [
  {
    path: '/',
    redirect: '/login'// 重定向地址
  },
  {
    path: '/login', // 显示地址
    name: 'login',
    component: Login// 组件名称
  }
]

const router = new VueRouter({
  routes
})

export default router
