<template>
  <div id="app">
   
   <Header theTitle = "Popular TV Shows"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
</style>
