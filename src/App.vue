<template>
  <HeaderComponent @performSearch="searchMovie"/>
  <MainComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    data() {
      return {
        store
      }
    },
    components: {
      HeaderComponent,
      MainComponent
    },
    methods: {
      // this is our search function
      searchMovie() {
      if (this.store.searchFilter){
        this.store.options.params.query = this.store.searchFilter,
        console.log(this.store.options.params.query);
      } else {
        this.store.options.params.query = '';
      }
      //this.getMovies();
      //this.getTvSeries();
      //this.getPopular();
    },
    // this is our ajax call for movies
      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movie = res.data.results;
          console.log(res.data.results);
        })
      },
      // this is our ajax call for tv series
      getTvSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.tv = res.data.results;
          console.log(res.data.results);
        })
      },
      // this is our ajax call for popular movies and tv series
      getPopular()  {
        axios.get(this.store.apiUrl + this.store.endPoint.popular, this.store.options).then((res) => {
          this.store.mostPopular = res.data.results;
          console.log(res.data.results);
        })
      }
    },
    created() {
      this.getMovies();
      this.getTvSeries();
      this.getPopular();
    }
  }
</script>

<style lang="scss" scoped>

</style>