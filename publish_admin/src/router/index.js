// 你写的页面添加路由
import Home from '@/views/home'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由配置地方
const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'// 重定向地址
  // },
  {
    path: '/login', // 显示地址
    name: 'login',
    component: Login// 组件名称
  },
  // layout有顶部导航栏和侧边导航栏,在其他的页面是不动那么就是一级,剩下会改变的页面就是二级 形成嵌套路由
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
