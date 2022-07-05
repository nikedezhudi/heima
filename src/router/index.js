import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.直接引入登录组件，同步加在路由（按需）
// 只要页面已刷新，所有的页面数据全部一次性加载

// import Login from '@views/Login'

Vue.use(VueRouter)
// 2.import这种引入的方法是懒加载
// 访问到某一个路由的时候再去加在当前路由文件
const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'Login'
  }

]

const router = new VueRouter({
  routes
})

export default router
