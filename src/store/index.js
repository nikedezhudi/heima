import { getLocal } from '@/utils/storage'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const tokenKey = 'toutiao_token'
export default new Vuex.Store({
  // 用于存储全局状态数据
  state: {
    user: getLocal(tokenKey)
  },
  getters: {
  },
  mutations: {
    // 修改state里面的user数据的方法
    setUser (state, user) {
      // 存储vuex中
      state.user = user
      // 存储本地存储
      localStorage.setItem(tokenKey, JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
