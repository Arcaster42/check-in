<template>
    <div class="page">
        <transition name="fade" mode="out-in">
            <input v-if="getActiveAlarm" type="button" class="checkin-btn" value="Check In">
            <input v-if="!getActiveAlarm" type="button" class="checkin-btn" value="New Check-In" @click="newCheckInClick">
            <CheckIn v-if="getShowCheckIn"/>
        </transition>
    </div>    
</template>

<script>
import CheckIn from './CheckIn'
export default {
    components: {
        CheckIn
    },
    computed: {
        getActiveAlarm() {
            return this.$store.state.user.alarm_active
        },
        getShowCheckIn() {
            return this.$store.state.showCheckIn
        }
    },
    methods: {
        checkInClick() {

            },
        newCheckInClick() {
            this.$store.commit('setShowCheckIn', true)
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