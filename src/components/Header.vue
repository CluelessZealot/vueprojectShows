<template>
    <div class = "Header">
        <h1>{{theTitle}}</h1>
    </div>
</template>

<script>
export default {
    name: "Header",
    props:['theTitle']
}
</script>

<style scoped>
    .Header
    {
        background: #333;
        color: white;
        text-align: center;
        padding: 10px;
        margin: 0px;
    }
</style>