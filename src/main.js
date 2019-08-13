import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    view: 'None',
    user: null,
  },
  getters: {

  },
  mutations: {
    setView(state, view) {
      state.view = view
    }
  },
  actions: {

  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
