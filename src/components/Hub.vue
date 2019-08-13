<template>
    <div class="page">
        <input type="button" class="checkin-btn" value="CHECK IN">
    </div>    
</template>

<script>
export default {
    methods: {

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
    width: 30%;
    min-height: 300px;
    margin: auto;
    border-radius: 50%;
    font-size: 60px;
    background-color: steelblue;
}
</style>