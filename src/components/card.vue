<template>
    <div class="card" style="width: 18rem;">
    <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movieobj.poster_path" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">{{}}</h5>
    <p class="card-text">{{}}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props:[
        'Title',
        'text',
        'path'
    ]
    
}
</script>

<style scoped>

</style>