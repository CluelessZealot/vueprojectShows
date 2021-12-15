<!--
dev: Shane Parenteau
project: tv shows
class: CIS 131
date: 12/15/21
-->

<template>
  <div id="app">
   
   <Header theTitle = "Popular TV Shows"/>
   
    <div id ="app" class = "row justify-content-md-between">
        <card v-for = "movie in movies" v-bind:movieObj=movie v-bind:key="movie.id"/>
        
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios'
import card from './components/card.vue'

export default {
  name: 'App',
  components: {
    Header,
    card
  },
  data(){
    return{
     movies: [],
    }
  },
  mounted(){
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=8087d190320d397a65275f06876bcc36&language=en-US&page=1')
                .then((response) => {
                    this.movies = response.data.results;
                    
                    this.movies.splice(3,17);
                    console.log(this.movies);
                })
  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  #app{
    background: black;
  }
</style>
