<template>
    <div class="page">
        <transition name="fade" mode="out-in">
            <div v-if="getActiveAlarm">
                <p>{{getRemainingTime}}</p>
                <p v-if="showMessage===true">{{getMessage}}</p>
                <p v-if="showMessage===true">{{getPhone}}</p>
                <input type="button" class="checkin-btn" value="Check In" @click="checkInClick">
                <input type="button" class="checkin-btn" value="Safe" @click="safeClick">
            </div>
            <div v-if="!getActiveAlarm">
                <input type="button" class="checkin-btn" value="New Check-In" @click="newCheckInClick">
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <CheckIn v-if="getShowCheckIn"/>
        </transition>
    </div>    
</template>

<script>
import CheckIn from './CheckIn'
import axios from 'axios'
export default {
    components: {
        CheckIn
    },
    created () {
        setInterval(() => {
            if (this.$store.state.user) {
                axios.post('http://localhost:3000/api/user', { user: this.$store.state.user })
                        .then((result) => {
                            console.log(result)
                            this.$store.commit('setUser', result.data[0])
                        })
            }
        }, 60000)
    }
    ,
    data: () => ({
        showMessage: false,
        checkIns: 0
    }),
    computed: {
        getActiveAlarm() {
            return this.$store.state.user.alarm_active
        },
        getShowCheckIn() {
            return this.$store.state.showCheckIn
        },
        getRemainingTime() {
            const start = Date.now()
            const end = parseInt(this.$store.state.user.alarm_deadline)
            const remainder = Math.round((end - start) / 1000 / 60)
            if (remainder < 1) {
                this.showMessage = true
                return 'Check-In Missed!'
            }
            if (remainder === 1) return remainder + ' Minute Remaining'
            return remainder + ' Minutes Remaining'
        },
        getMessage() {
            return this.$store.state.user.alarm_message
        },
        getPhone() {
            return this.$store.state.user.phone
        }
    },
    methods: {
        checkInClick() {
            axios.patch('http://localhost:3000/api/timer', { user: this.$store.state.user })
                .then((result) => {
                    console.log(result)
                    this.checkIns++
                    axios.post('http://localhost:3000/api/user', { user: this.$store.state.user })
                        .then((result) => {
                            console.log(result)
                            this.$store.commit('setUser', result.data[0])
                            this.showMessage = false
                        })
                })
            },
        newCheckInClick() {
            this.$store.commit('setShowCheckIn', true)
        },
        safeClick() {
            axios.post('http://localhost:3000/api/timer/safe', { user: this.$store.state.user })
                .then((result) => {
                    console.log(result)
                    axios.post('http://localhost:3000/api/user', { user: this.$store.state.user })
                        .then((result) => {
                            console.log(result)
                            this.$store.commit('setUser', result.data[0])
                            this.showMessage = false
                        })
                })
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

.checkin-btn {
    width: 10%;
    min-height: 100px;
    margin: auto;
    border-radius: 25%;
    font-size: 20px;
    background-color: steelblue;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>