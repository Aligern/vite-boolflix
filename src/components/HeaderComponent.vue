<template>
    <header class="d-flex justify-content-between p-3">
        <div class="d-flex align-items-center ">
            <div>
                <img id="logo" src="/images/Fakeflix.png" alt="Logo">
            </div>
            <div>
                <!-- this is our nav list (not working) -->
                <ul class="d-flex">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#tvCards">
                            Serie Tv
                        </a>
                    </li>
                    <li>
                        <a href="#movieCards">
                            Film
                        </a>
                    </li>
                    <li>
                        <a href="#popularMovies">
                            Popolari
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d-flex">
            <!-- this is the search bar that will work following the emit function -->
            <input class="form-control me-2" type="text" placeholder="Cosa vuoi guardare ?" aria-label="Search" id="searchBar" @keyup.enter="$emit('performSearch')" v-model="store.searchFilter">
            <a class="btn" type="submit" @click="$emit('performSearch')" id="searchButton">
                Cerca
            </a>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#searchButton {
    color: $textcolor;
    background-color: $titlecolor;
}
header {
    background-color: #0000005d;
    position: fixed;
    width: 100%;
    z-index: 4000;
    height: 70px;
}
#logo {
    width: 150px;
    padding-top: 10px;
}
ul { 
    li{
        padding: 0 5px;
    }
}
</style>