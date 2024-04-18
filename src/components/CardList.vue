<template>
<div id="cardList" >
    <!-- this is our film container -->
    <div id="movieCards" class="container pt-3">
        <div class="row p-0">
            <div v-if="store.movie.length > 0">
                <h2>
                    Film
                </h2>
            </div>
            <div class="col-12 col-md-6 col-lg-3 p-0" v-for="movie in store.movie" :key="movie.id">
                <CardComponent :img="store.ImageUrl + movie.poster_path" :name="movie.title" :originalName="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" :overview="movie.overview"/>
            </div>
        </div>
    </div>

    <!-- this is our tvseries container -->
    <div id="tvCards" class="container pt-5 pb-5">
        <div class="row">
            <h2 v-if="store.tv.length > 0">
                Serie TV
            </h2>
            <div class="col-12 col-md-6 col-lg-3 p-0" v-for="series in store.tv" :key="series.id">
                <CardComponent :img="store.ImageUrl + series.poster_path" :name="series.name" :originalName="series.original_name" :language="series.original_language" :vote="series.vote_average" :overview="series.overview"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>