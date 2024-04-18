<template>
    <header class="d-flex justify-content-between align-items-center p-3">
        <div class="d-flex">
            <div>
                <img id="logo" src="/images/Netflix_2015_logo.svg" alt="Logo">
            </div>
            <div>
                <!-- this is our nav list (not working) -->
                <!-- <ul class="d-flex align-text-center">
                    <li>
                        <a href="/images/Netflix_2015_logo.svg">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Serie Tv
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Film
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Originali
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Aggiunti di recente
                        </a>
                    </li>
                    <li>
                        <a href="">
                            La mia lista
                        </a>
                    </li>
                </ul> -->
            </div>
        </div>
        <div class="d-flex">
            <!-- this is the search bar that will work following the emit function -->
            <input class="form-control me-2" type="text" placeholder="Cosa vuoi guardare ?" aria-label="Search" id="searchBar" @keyup.enter="$emit('performSearch')" v-model="store.searchFilter">
            <a class="btn btn-outline-success" type="submit" @click="$emit('performSearch')" id="searchButton">
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
header {
    background-color: #0000005d;
    position: fixed;
    width: 100%;
    z-index: 4000;
    height: 70px;
}
#logo {
    width: 150px;
    padding: 5px;
}
</style>