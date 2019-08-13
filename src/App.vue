<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  components: {

  },
  mounted() {
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
  margin-top: 60px;
}
</style>
