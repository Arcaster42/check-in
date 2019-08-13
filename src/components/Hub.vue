<template>
    <div class="page">
        <input v-if="getActiveAlarm" type="button" class="checkin-btn" value="Check In">
        <input v-if="!getActiveAlarm" type="button" class="checkin-btn" value="New Check-In" @click="newCheckInClick">
        <CheckIn v-if="showCheckIn"/>
    </div>    
</template>

<script>
import CheckIn from './CheckIn'
export default {
    components: {
        CheckIn
    },
    data: () => ({
        showCheckIn: false
    }),
    computed: {
        getActiveAlarm() {
            return this.$store.state.user.active_alarm
        }
    },
    methods: {
        checkInClick() {
            
            },
        newCheckInClick() {
            this.showCheckIn = true
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
</style>