<template>
<div id="cardList" >
    <!-- this is our film container -->
    <div id="movieCards" class="container pt-3">
        <div class="dflex">
            <div v-if="store.movie.length > 0">
                <h2>
                    Film
                </h2>
            </div>
            <div class="ls-col" v-for="movie in store.movie" :key="movie.id">
                <CardComponent :img="store.ImageUrl + movie.poster_path" :name="movie.title" :originalName="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" :overview="movie.overview"/>
            </div>
        </div>
    </div>
    <!-- this is our tvseries container -->
    <div id="tvCards" class="container pt-5 pb-5">
        <div class="dflex">
            <h2 v-if="store.tv.length > 0">
                Serie TV
            </h2>
            <div class="ls-col" v-for="series in store.tv" :key="series.id">
                <CardComponent :img="store.ImageUrl + series.poster_path" :name="series.name" :originalName="series.original_name" :language="series.original_language" :vote="series.vote_average" :overview="series.overview"/>
            </div>
        </div>
    </div>
    <!-- this is our popular movies container -->
    <div id="popularMovies" class="container pt-5 pb-5">
        <div class="dflex">
            <h2>
                Film Popolari
            </h2>
            <div class="ls-col" v-for="popularMovie in store.popularMovies" :key="popularMovie.id">
                <CardComponent :img="store.ImageUrl + popularMovie.poster_path" :name="popularMovie.title" :originalName="popularMovie.original_title" :language="popularMovie.original_language" :vote="popularMovie.vote_average" :overview="popularMovie.overview" />
            </div>
        </div>
    </div>
    <!-- this is our popular tv series container -->
    <div id="popularTv" class="container pt-5 pb-5">
        <div class="dflex">
            <h2>
                Serie TV Popolari
            </h2>
            <div class="ls-col" v-for="popularTv in store.popularTvs" :key="popularTv.id">
                <CardComponent :img="store.ImageUrl + popularTv.poster_path" :name="popularTv.name" :originalName="popularTv.original_name" :language="popularTv.original_language" :vote="popularTv.vote_average" :overview="popularTv.overview" />
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
.ls-col {
    width: 200px;
    flex-shrink: 0;
    
}
.dflex{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
h2 {
    padding-right: 35px;
}

</style>