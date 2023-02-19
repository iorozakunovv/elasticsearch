<script>
import { useHeaderStore } from '../stores/header'
import { mapStores } from 'pinia'
export default {
  data() {
    return {
      inChart: false,
    }
  },
  props: {
    dataB: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    ...mapStores(useHeaderStore),
    detailUrl(){
      const type = this.$route.name
      if (type === 'shows') {
        return 'shows'
      }else{
        return 'person'
      }
    },
    status(){
      if (this.headerStore.favourite) {
        return this.headerStore.favourite.find(item => item.id === this.dataB.id) || null
      }
    }
  },
  methods: {
    addFavourite() {
      if (this.status) {
        this.$emit('deleteFavourite', this.dataB)  
      }else{
        this.$emit('addFavourite', this.dataB)
      }
    },
  },
}
</script>

<template>
  <router-link :to="`/${detailUrl}/${dataB.id}`">
    <div class="card">
      <div>
        <div class="btnOfChart">
          <v-btn
          @click.prevent="addFavourite"
          variant="plain" class="button_of_like">
          <v-icon size="25" color="white" v-if="!status" class="icon___vtfy" dark>mdi-heart</v-icon>
          <v-icon size="25" color="red" v-if="status" class="icon___vtfy" dark>mdi-heart</v-icon>
          </v-btn>
        </div>
      </div>
      <img class="image" :src="dataB?.image?.medium || dataB?.image?.original || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' ">
      <div class="intro">
        <h2 class="movieName">{{ dataB.name }}</h2>
        <p v-if="dataB?.rating?.average" class="movieDes">rating : {{ dataB?.rating?.average }} <v-icon dark>mdi-star</v-icon> </p>
        <div v-if="dataB?.rating" class="chip_wrapper">
        <v-chip class="movieRating" v-for="genre in dataB.genres" draggable>{{ genre }}</v-chip>
        </div>
        <div v-else>
          <div>
            <p class="movieDes">Birthday: {{ dataB?.birthday }}</p>
            <p class="movieDes">Country: {{ dataB?.country?.name }}</p>
            <p class="movieDes">Gender: {{ dataB?.gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style>
.card{
  box-shadow: 5px 5px 20px black ;
  width: 230px;
  box-sizing: border-box;
}
.image{
  border-radius: 3px;
  width: 100%;
  transition: 1s ;
}
.intro{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  background: rgb(27,27,27,.5);
  color: white;
  bottom: 5px;
  transition: .5s;
}
.movieName {
  margin: 10px;
  font-weight: 600;
  /* font-size: 40px ; */
}
.movieDes{
  font-size: 14px;
  margin: 20px;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
.chip_wrapper{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 5px;
}
.movieRating{
  /* margin: 5px; */
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.card:hover .movieRating{
  opacity: 1;
  visibility: visible;
}
.card:hover .intro{
  height: 220px;
  width: 100%;
  bottom: 5px;
  background: #000;
}
.card:hover .movieDes{
  opacity: 1;
  visibility: visible;
}
.card:hover .image{
  transform: scale(1.1);
}
.btnOfChart{
  position: relative;
  width: 100%;
}
.v-btn.button_of_like{
  position: absolute;
  z-index: 2;
  right: 0px;
  top: 5px;
}
.card:hover .v-btn.button_of_like .v-icon{
  transform: scale(1.3) rotate(-360deg);
}
.v-btn.button_of_like .v-icon{
  transition: 1s;
}
</style>
