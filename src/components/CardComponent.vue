<template>
    <div class=" flip-card">

        <div class="flip-card-inner">

            <div id="cardImg" class="flip-card-front">
                <!--  this is our our cover -->
                <img :src="img" class="card-img" :alt="name">

            </div>
            
            <div id="cardData" class=" flip-card-back">
                <!-- these are our data abput the movie or series -->
                <p>
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
                </p>
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
  width: 250px;
  height: 300px;
  perspective: 1000px;
  margin-top: 50px;
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
    height: 100%;
    display: block;
}
</style>