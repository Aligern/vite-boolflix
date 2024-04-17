<template>
    <header class="d-flex justify-content-between align-items-center p-3">
        <div class="d-flex">
            <div>
                <img id="logo" src="/images/Netflix_2015_logo.svg" alt="Logo">
            </div>
            <div>
                <ul class="d-flex align-text-center">
                    <li>
                        <a href="">
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
                </ul>
            </div>
        </div>
        <div>
            <form class="d-flex" role="search">

                 <input class="form-control me-2" type="search" placeholder="Cosa vuoi guardare ?" aria-label="Search" id="searchBar" @keyup.enter="$emit('performSearch')" v-model="store.options.params.query">

                 <button class="btn btn-outline-success" type="submit" @click="$emit('performSearch')" id="searchButton">
                    Cerca
                </button>
            </form>
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
}
#logo {
    width: 150px;
    padding: 5px;
}

</style>