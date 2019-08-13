<template>
    <div class="mini-page">
        <form>
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
            <input type="submit" value="Create" @click="createClick">
        </form>
    </div>    
</template>

<script>
export default {
    data: () => ({
        value: null,
        message: null
    }),
    methods: {
        createClick(event) {
            event.preventDefault()
        }
    }
}
</script>

<style scoped>
.mini-page {
    border: 2px solid black;
    width: 30%;
    margin: auto;
    margin-top: 20px;
}

.textarea {
    width: 200px;
    height: 100px;
}
</style>