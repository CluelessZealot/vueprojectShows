import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
var movieTickets = [];

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8087d190320d397a65275f06876bcc36&language=en-US&page=1')
        .then((response) => {
            movies = response.data.results;

            tempArray = movies;
            // gets the array, splices it and changes its variables pushing it into the movieTickets array
            tempArray.splice(3,17);
            tempArray.forEach(movieTickets => {
                var newMovie =  {
                    title: movieTickets.title,
                    overview: movieTickets.overview,
                    poster_path: movieTickets.poster_path,
                    childTickets: 0,
                    adultTickets: 0
                }
                this.movieTickets.push(newMovie)
            })
            

            console.log(this.movieTickets);
        })
 }
  
}).$mount('#app')
