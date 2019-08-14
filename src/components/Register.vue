<template>
    <div class="page">
        <p>Registration</p>
        <form class="form">
            <label for="username">Username</label><br>
            <input class="textbox" type="text" v-model="username"><br>
            <label for="email">E-Mail</label><br>
            <input class="textbox" type="email" v-model="email"><br>
            <label for="firstname">First Name</label><br>
            <input class="textbox" type="text" v-model="firstName"><br>
            <label for="lastname">Last Name</label><br>
            <input class="textbox" type="text" v-model="lastName"><br>
            <label for="phone">Phone Number</label><br>
            <input class="textbox" type="text" v-model="phone"><br>
            <label for="password">Password</label><br>
            <input class="textbox" type="password" v-model="password"><br>
            <label for="password2">Password</label><br>
            <input class="textbox" type="password" v-model="password2"><br>
            <input class="btn" type="submit" value="Register" @click="registerClick"><br>
            <button class="btn" @click="cancelClick">Cancel</button><br>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        username: null,
        email: null,
        firstName: null,
        lastName: null,
        phone: null,
        password: null,
        password2: null,
        code: null
    }),
    methods: {
        registerClick(event) {
            event.preventDefault()
            const user = {
                username: this.username,
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                password: this.password
            }
            axios.post('http://localhost:3000/api/account', user)
                .then((result) => {
                    console.log(result)
                    if (result.data) this.$store.commit('setView', 'Login')
                    if (result.data.err || !result.data) this.$store.commit('setView', 'Splash')
                })
        },
        cancelClick(event) {
            event.preventDefault()
            this.$store.commit('setView', 'Login')
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: auto;
    border: 2px solid steelblue;
    padding: 20px;
    background-color: steelblue;
}

p {
    font-size: 24px;
    color: black;
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