<template>
    <div class="card">
        <img :src="img" class="card-img" :alt="name">
        <div class="card-body">
            <p>
                <h6>
                    {{ name }}
                </h6>
                <br>
                <span>
                    {{ originalName }}
                </span>
                <br>
                <span>
                    {{ language }}
                </span>
                <br>
                <span>
                    {{ vote }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'img',
            'name',
            'originalName',
            'language',
            'vote'
    ]
}
</script>

<style lang="scss" scoped>

</style>