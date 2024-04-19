<template>
    <main class="vh-100  ">
        <!-- this is our jumbotron -->
        <div id="jumbotron" class="text-center align-content-center">
        </div>
        <div class="container">
            <CardList />
        </div>
    </main>
</template>

<script>
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main {
    padding: 100px 0;
}
#jumbotron {
    height: 500px;
    background-image: url(/public/images/cover-desktop@1x-e6d6aaa1.jpg);
    background-size: cover;
}
</style>