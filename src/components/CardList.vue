<template>
<div id="cardList" >
    <!-- this is our film container -->
    <div id="movieCards" class="container pt-5 pb-5" v-if="store.movie.length > 0">
            <div>
                <h2>
                    Film
                </h2>
            </div>
            <div ref="movieScrollContainer" class="dflex">
                <div class="ls-col" v-for="movie in store.movie" :key="movie.id">
                    <CardComponent :img="store.ImageUrl + movie.poster_path" :name="movie.title" :originalName="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" :overview="movie.overview"/>
                </div>
            </div>
            <div class="d-flex justify-content-between ">

                <button id="scrollLeft" @click="scroll(-600, 'movie')">
                 scroll left
                </button>

                <button id="scrollRight" @click="scroll(600, 'movie')">
                 scroll right
                </button>
            </div>
    </div>
    <!-- this is our tvseries container -->
    <div ref="tvScrollContainer" id="tvCards" class="container pt-5 pb-5" v-if="store.movie.length > 0">
            <div>
                <h2>
                    Serie TV
                </h2>
            </div>
        <div class="dflex">
            <div class="ls-col" v-for="series in store.tv" :key="series.id">
                <CardComponent :img="store.ImageUrl + series.poster_path" :name="series.name" :originalName="series.original_name" :language="series.original_language" :vote="series.vote_average" :overview="series.overview"/>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button id="scrollLeft" @click="scroll(-450, 'tv')">
                scroll left
            </button>
            <button id="scrollRight" @click="scroll(450, 'tv')">
                scroll right
            </button>
        </div>
    </div>
    <!-- this is our popular movies container -->
    <div ref="popMovieScrollContainer" id="popularMovies" class="container pt-5 pb-5"  v-if="store.movie.length < 1">
            <div>
                <h2>
                    Film Popolari
                </h2>
            </div>
        <div class="dflex">
            <div class="ls-col" v-for="popularMovie in store.popularMovies" :key="popularMovie.id">
                <CardComponent :img="store.ImageUrl + popularMovie.poster_path" :name="popularMovie.title" :originalName="popularMovie.original_title" :language="popularMovie.original_language" :vote="popularMovie.vote_average" :overview="popularMovie.overview" />
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button id="scrollLeft" @click="scroll(-450, 'popMovie')">
                scroll left
            </button>
            <button id="scrollRight" @click="scroll(450, 'popMovie')">
                scroll right
            </button>
        </div>
    </div>
    <!-- this is our popular tv series container -->
    <div ref="popTvScrollContainer" id="popularTv" class="container pt-5 pb-5"  v-if="store.movie.length < 1">
            <div>
                <h2>
                    Serie TV Popolari
                </h2>
            </div>
        <div class="dflex">
            <div class="ls-col" v-for="popularTv in store.popularTvs" :key="popularTv.id">
                <CardComponent :img="store.ImageUrl + popularTv.poster_path" :name="popularTv.name" :originalName="popularTv.original_name" :language="popularTv.original_language" :vote="popularTv.vote_average" :overview="popularTv.overview" />
            </div>
        </div>    
            <div class="d-flex justify-content-between">
                    <button id="scrollLeft" @click="scroll(-450, 'popTv')">
                        scroll left
                    </button>
                    <button id="scrollRight" @click="scroll(450, 'popTv')">
                        scroll right
                    </button>
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
        methods: {
           scroll(distance ) {
            this.$refs.movieScrollContainer.scrollBy({
                left: distance,
                behavior: 'smooth'
            })
           }
        }
    }
</script>

<style lang="scss" scoped>

.dflex{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 300px;

    .ls-col {
    width: 190px;
    flex-shrink: 0;
    padding: 0px 5px;
}

}


</style>