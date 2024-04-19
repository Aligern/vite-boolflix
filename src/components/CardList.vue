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

                <button class="ls-btn-left" id="scrollLeftMovie" @click="scroll(-600, 'movieScrollContainer')">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <button class="ls-btn-right" id="scrollRightMovie" @click="scroll(600, 'movieScrollContainer')">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
    </div>

    <!-- this is our tvseries container -->
    <div id="tvCards" class="container pt-5 pb-5" v-if="store.movie.length > 0">
            <div>
                <h2>
                    Serie TV
                </h2>
            </div>
        <div ref="tvScrollContainer" class="dflex">
            <div class="ls-col" v-for="series in store.tv" :key="series.id">
                <CardComponent :img="store.ImageUrl + series.poster_path" :name="series.name" :originalName="series.original_name" :language="series.original_language" :vote="series.vote_average" :overview="series.overview"/>
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <button class="ls-btn-left"  id="scrollLeftTv" @click="scroll(-600, 'tvScrollContainer')">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="ls-btn-right" id="scrollRightTv" @click="scroll(600, 'tvScrollContainer')">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>

    <!-- this is our popular movies container -->
    <div id="popularMovies" class="container pt-5 pb-5"  v-if="store.movie.length < 1">
            <div>
                <h2>
                    Film Popolari
                </h2>
            </div>
        <div ref="popMovieScrollContainer" class="dflex">
            <div class=" ls-col" v-for="popularMovie in store.popularMovies" :key="popularMovie.id">
                <CardComponent :img="store.ImageUrl + popularMovie.poster_path" :name="popularMovie.title" :originalName="popularMovie.original_title" :language="popularMovie.original_language" :vote="popularMovie.vote_average" :overview="popularMovie.overview" />
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button class="ls-btn-left"  id="scrollLeftPopMovie" @click="scroll(-600, 'popMovieScrollContainer')">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="ls-btn-right" id="scrollRightPopMovie" @click="scroll(600, 'popMovieScrollContainer')">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>


    <!-- this is our popular tv series container -->
    <div id="popularTv" class="container pt-5 pb-5"  v-if="store.movie.length < 1">
            <div>
                <h2>
                    Serie TV Popolari
                </h2>
            </div>
        <div ref="popTvScrollContainer" class="dflex">
            <div class="ls-col" v-for="popularTv in store.popularTvs" :key="popularTv.id">
                <CardComponent :img="store.ImageUrl + popularTv.poster_path" :name="popularTv.name" :originalName="popularTv.original_name" :language="popularTv.original_language" :vote="popularTv.vote_average" :overview="popularTv.overview" />
            </div>
        </div>    
            <div class="d-flex justify-content-between">
                    <button class="ls-btn-left"  id="scrollLeftPopTv" @click="scroll(-600, 'popTvScrollContainer')">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="ls-btn-right" id="scrollRightPopTv" @click="scroll(600, 'popTvScrollContainer')">
                        <i class="fa-solid fa-chevron-right"></i>
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
           scroll(distance, id) {
            console.log('entrato'),
            console.log(distance),
            console.log(id),
            this.$refs[id].scrollBy({
                left: distance,
                behavior: 'smooth',
            })
           }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

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
.ls-btn-left {
    background-color: #0000005d;
    border: none;
    border-radius: 5px;
    color: $textcolor;
    padding: 30px 10px;
    transform: translate(10px, -210px);
}
.ls-btn-right {
    background-color: #0000005d;
    border: none;
    border-radius: 5px;
    color: $textcolor;
    padding: 30px 10px;
    transform: translate(-5px, -210px);
}
</style>