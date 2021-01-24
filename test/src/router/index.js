import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: Login,
    name: 'login'
  },
  {
    path: '/Home',
    component: Home,
    name: 'Home'
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/Login')
  next()
})

export default router
