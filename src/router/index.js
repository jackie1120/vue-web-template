import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })
Vue.use(Router)
let routes = []

const requireContext = require.context(
  './',
  true,
  /\.js$/
)
requireContext.keys().forEach(filename => {
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  routes
})
router.addRoutes([
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }
])

router.beforeEach((to, from, next) => {
  NProgress.start()
  let requireAuth = to.matched.some(item => item.meta.auth)
  if (requireAuth && !store.state.user.isLogin) {
    Message.error({
      message: '请先登陆再访问该页面'
    })
    NProgress.done()
    return
  }
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
