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
      searchMovie() {
      if (this.store.searchFilter){
        this.store.options.params.query = this.store.searchFilter,
        console.log(this.store.options.params.query);
      } else {
        this.store.options.params.query = '';
      }
      this.getMovies();
      this.getTvSeries();
    },
      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movie = res.data.results;
          console.log(res.data.results);
        })
      },
      getTvSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.tv = res.data.results;
          console.log(res.data.results);
        })
      }
    },
    created() {
      //this.getMovies();
      //this.getTvSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>