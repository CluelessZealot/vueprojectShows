<template>
    <div class="card" style="width: 18rem;">
    <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movieObj.poster_path" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">{{movieObj.name}}</h5>
    <p class="card-text">{{movieObj.overview}}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props:[
        'movieObj'
    ]
    
}
</script>

<style scoped>
    .card{
        background: lightblue;
        height: inherit;
        margin-left: 110px;
        margin-right: 110px;
    }
</style>