<template>
    <div class="mini-page">
        <form class="form">
            <p>CheckIn</p>
            <label for="interval">Interval</label>
            <select name="interval" v-model="value">
                <option value="1">1 Minute</option>
                <option value="30">30 Minutes</option>
                <option value="60">1 Hour</option>
                <option value="120">2 Hours</option>
                <option value="240">4 Hours</option>
                <option value="1440">24 Hours</option>
            </select><br>
            <label for="message">Emergency Message</label><br>
            <textarea class="textarea" name="message" v-model="message"></textarea><br>
            <input class="btn" type="submit" value="Create" @click="createClick">
        </form>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        value: null,
        message: null
    }),
    methods: {
        createClick(event) {
            event.preventDefault()
            axios.post('http://localhost:3000/api/timer', { user: this.$store.state.user, time: parseInt(this.value), message: this.message })
                .then((result) => {
                    console.log(result)
                    this.$store.commit('setAlarm', true)
                    this.$store.commit('setShowCheckIn', false)
                    axios.post('http://localhost:3000/api/user', { user: this.$store.state.user })
                        .then((result) => {
                            this.$store.commit('setUser', result.data[0])
                        })
                })
        },
        checkInClick(event) {
            event.preventDefault()
            axios.post('http://localhost:3000/api/timer', { user: this.$store.state.user })
                .then((result => {
                    console.log(result)
                    axios.post('http://localhost:3000/api/user', { user: this.$store.state.user })
                        .then((result) => {
                            this.$store.commit('setUser', result.data)
                        })
                }))
        }
    }
}
</script>

<style scoped>
.textarea {
    width: 100%;
    height: 100px;
}

.form {
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: auto;
    margin-top: 10px;
    border: 2px solid steelblue;
    padding: 20px;
    background-color: steelblue;
}

p {
    font-size: 24px;
    color: white;
}

label {
    font-size: 16px;
    color: white;
}

input, select {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
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