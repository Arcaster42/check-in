<template>
    <div class="page">
        <form class="form">
            <label for="username">Username</label><br>
            <input class="textbox" type="text" v-model="username"><br>
            <label for="password">Password</label><br>
            <input class="textbox" type="password" v-model="password"><br>
            <input class="btn" type="submit" value="Login" @click="loginClick"><br>
            <button class="btn" @click="registerClick">Register</button><br>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
const baseURL = process.env.HOST || 'http://localhost:3000'
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
            axios.post(baseURL + '/api/login', user)
            .then((result) => {
                if (result.data && !result.data.err) {
                    this.$store.commit('setUser', result.data)
                    this.$store.commit('setView', 'Hub')
                }
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

.form {
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: auto;
    border: 2px solid steelblue;
    padding: 20px;
    background-color: steelblue;
}

label {
    font-size: 20px;
    color: white;
}

input {
    margin-top: 10px;
    margin-bottom: 10px;
}

.btn {
    background-color: white;
    border: none;
    font-size: 16px;
    padding: 8px;
}

.btn:hover {
    background-color: lightblue;
}
</style>