import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 注册组件
import Vant from 'vant'
// 引入vant样式
import 'vant/lib/index.less'
// 引入flexible插件
import 'amfe-flexible'

//
import request from '@/utils/request'

// 引入组件
import ToutiaoIcon from '@/components/ToutiaoIcon'
request.get('/v1_0/channels').then((res) => {
  console.log(res.data.data.channels)
})
// 使用组件
Vue.use(Vant)

// 注册全局组件
Vue.component('ToutiaoIcon', ToutiaoIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
