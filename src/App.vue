<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Splash v-if="getView==='Splash'"/>
      <Login v-if="getView==='Login'"/>
      <Register v-if="getView==='Register'"/>
      <Hub v-if="getView==='Hub'"/>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Splash from './components/Splash'
import Login from './components/Login'
import Register from './components/Register'
import Hub from './components/Hub'

export default {
  name: 'app',
  components: {
    Splash,
    Login,
    Register,
    Hub
  },
  computed: {
    getView() {
      return this.$store.state.view
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('setView', 'Splash')
    }, 1000)
    setTimeout(() => {
      this.$store.commit('setView', 'Login')
    }, 2500)
    // fetch('http://localhost:3000/api').then((result) => {return result.json()}).then((reply) => console.log(reply))
    // axios.get('http://localhost:3000/api').then((query) => {console.log(query.data)})
    // axios.post('http://localhost:3000/api/account', {username: 'test'}).then((response) => console.log(response))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
