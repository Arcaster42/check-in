import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    view: 'None',
    user: null,
    showCheckIn: false
  },
  getters: {

  },
  mutations: {
    setView(state, view) {
      state.view = view
    },
    setUser(state, user) {
      state.user = user
    },
    setAlarm(state, flag) {
      state.user.alarm_active = flag
    },
    setShowCheckIn(state, flag) {
      state.showCheckIn = flag
    }
  },
  actions: {

  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
