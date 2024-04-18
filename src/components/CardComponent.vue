<template>
    <div class=" flip-card">
        <div class="flip-card-inner">
            <div id="cardImg" class="flip-card-front">
                <!--  this is our our cover -->
                <img :src="img" @error="setDefaultImage" class="card-img img-fluid" :alt="name">
            </div>
            <div id="cardData" class=" flip-card-back h-100 align-content-center p-3">
                <!-- here we have our data about the movie or series -->
                <div>
                    <h6>
                        Titolo: {{ name }}
                    </h6>
                    <br>
                    <span>
                        Titolo Originale: {{ originalName }}
                    </span>
                    <br>
                    <span>
                        Lingua Originale:
                        <img id="flag" @error="setDefaultFlag" :src="`/images/${language}.png`" :alt="language">
                    </span>
                    <br>
                    <div class="star">
                        <i :class="{'fa-solid': n <= voteStars, 'fa-regular': n > voteStars}" class="fa-star" v-for="n in 5"></i>
                    </div>
                    <br>
                    <h6>
                        {{ overview }}
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'name',
            'originalName',
            'img',
            'language',
            'vote',
            'overview'
        ],
        computed: {
            voteStars() {
                return Math.ceil(this.vote / 2);
            }
        },
        methods: {
            // this function set the default image in case of error for the cover
            setDefaultImage(event) {
                event.target.src = '/images/default.png';
            },
            // this function set the default image in case of error for the flag
            setDefaultFlag(event) {
                event.target.src = '/images/default_flag.png';
            }
        },
}
</script>

<style lang="scss" scoped>
#flag {
    border-radius: 50%;
    height: 25px;
    width: 35px;
}
.fa-solid {
    color: gold;
}
.flip-card {
    cursor: pointer;
    background-color: transparent;
    aspect-ratio: 1/1.3;
    perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
    overflow-y: auto;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
img {
    width: 100%;
    height: 100%;
}
</style>