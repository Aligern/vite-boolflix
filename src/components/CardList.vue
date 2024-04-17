<template>
    <div class="container">
        <div class="row">

            <div class="col-12 col-md-4 col-lg-3" v-for="movie in store.movie" :key="movie.id">
                <CardComponent :img="store.ImageUrl + movie.poster_path" :name="movie.title" :originalName="movie.original_title" :language="movie.original_language" :vote="movie.vote_average"/>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>