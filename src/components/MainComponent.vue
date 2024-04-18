<template>
    <main class="container vh-100  ">
        <div>
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
main {
    padding: 100px 0;
}


</style>