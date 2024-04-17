<template>
    <div class="bg-black d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between">
            <h1>
                Boolflix
            </h1>
                <ul class="d-flex align-items-center">
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
        <div>
            <form class="d-flex" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                 <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>

</style>