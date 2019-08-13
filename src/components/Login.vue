<template>
    <div class="page">
        <form class="form">
            <label for="username">Username</label><br>
            <input class="textbox" type="text" v-model="username"><br>
            <label for="password">Password</label><br>
            <input class="textbox" type="password" v-model="password"><br>
            <input type="submit" value="Login" @click="loginClick"><br>
            <button @click="registerClick">Register</button><br>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        username: '',
        password: ''
    }),
    methods: {
        loginClick(event) {
            event.preventDefault()
            const user = {
                username: this.username,
                password: this.password
            }
            axios.post('http://localhost:3000/api/login', user)
            .then((result) => {
                if (result.data && !result.data.err) this.$store.commit('setView', 'Check')
                if (result.data.err) console.log(result.data.err)
                })
        },
        registerClick(event) {
            event.preventDefault()
            this.$store.commit('setView', 'Register')
        }
    }
}
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    height: 100%;
    width: 100%;
}
</style>