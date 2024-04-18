<template>
    <div class=" flip-card">
        <div class="flip-card-inner">
            <div id="cardImg" class="flip-card-front">
                <!--  this is our our cover -->
                <img :src="img" class="card-img img-fluid" :alt="name">
            </div>
            <div id="cardData" class=" flip-card-back h-100 align-content-center p-3">
                <!-- these are our data about the movie or series -->
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
                        Lingua Originale: {{ language }}
                    </span>
                    <br>
                    <span>
                        Valutazione utenti: {{ vote }}
                    </span>
                </div>
            </div>
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
// these classes are provvisory
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 270px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
img {
    width: 100%;
    height: 100%;
}


</style>