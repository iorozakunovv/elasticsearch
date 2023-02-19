<template>
  <Layout>
      <div>
          <!-- here rendering bg of movie image -->
          <div v-if="showImages && showImages.length> 0">
              <div class="background__wrapper">
                  <img :src="showImages[0]?.resolutions?.original?.url" :style="`height: calc(100vh - ${this.inputStore.headerHeight}px)`">
              </div>               
          </div>
          <div v-if="show" class="film-wrapper">
              <div class="item-image">
                  <img :src="show?.image?.original || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' " alt="">
              </div>
              <div class="item-summary">
                  <h2>{{ show.name }}</h2>
                  <div class="row_content">
                      <span>{{ show.premiered }}</span>
                      <span> | {{ show.language }}</span>
                      <span> | runtime -  {{ show.runtime }}</span>
                  </div>
                  <div class="chips_wrap">
                      <span> Genres: </span>
                      <v-chip v-for="genre in show.genres" draggable>
                          {{ genre }}
                      </v-chip>
                  </div>
                  <div v-if="show?.rating?.average" class="rating_wrap">
                      <v-icon dark> mdi-star</v-icon><span>{{ show?.rating?.average }}</span>
                  </div>
                  <div class="summary" v-html="show.summary">
                  </div>
              </div>
          </div>
          <div v-for="item in cast">
              <v-cast :cast="item"/>
          </div>
      </div>
  </Layout>
</template>
<script>
import castShow from '../components/CastShow.vue'
import Layout from '../layouts/Layout.vue'
import { useInputStore } from '../stores/getdata';
import { mapStores } from 'pinia';
export default {
  data() {
      return {
          show:null,
          season:null,
          cast:null,
          showImages:null,
          sum:null
      }
  },
  components:{
  "v-cast": castShow,
  Layout
},
  methods:{
      async getShow(){
          const URL = 'https://api.tvmaze.com/shows/'
          const res = await fetch(`${URL}${this.$route.params.id}`)
          const data = await res.json()
          this.show = await data
      },
      async getCasts(){
          const URL = `https://api.tvmaze.com/shows/${this.$route.params.id}/cast`
          const res = await fetch(`${URL}`)
          const data = await res.json()
          this.cast = await data
      },
      async getMovieImages(){
          const URL = `https://api.tvmaze.com/shows/${this.$route.params.id}/images`
          const res = await fetch(URL)
          const data = await res.json()
          this.showImages = await data.filter(item => item.type === 'background')
      },
  },
  beforeMount(){
  },
  mounted() {
      this.getShow()
      this.getCasts()
      this.getMovieImages()
  },
  computed:{
      ...mapStores(useInputStore)
  }

}
</script>
<style lang="css">
.item-image{
  width: 30%;
  height: auto;
}
.item-image img{
  width: 100%;
  object-fit: cover;
}
.film-wrapper{
  width: 80%;
  margin-left: 10%;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 3%;
  background: linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0));
}
.item-summary{
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item-summary h2{
  font-weight: 600;
  font-size: 48px ;
}
.background__wrapper{
  position: relative;
}
.background__wrapper img {
  position: absolute;
  height: 100%;
  object-fit: cover;
  right: 0;
  background: linear-gradient(0deg,#181818 0,hsla(0,0%,9%,.987) 1.62%,hsla(0,0%,9%,.951) 3.1%,hsla(0,0%,9%,.896) 4.5%,hsla(0,0%,9%,.825) 5.8%,hsla(0,0%,9%,.741) 7.06%,hsla(0,0%,9%,.648) 8.24%,hsla(0,0%,9%,.55) 9.42%,hsla(0,0%,9%,.45) 10.58%,hsla(0,0%,9%,.352) 11.76%,hsla(0,0%,9%,.259) 12.94%,hsla(0,0%,9%,.175) 14.2%,hsla(0,0%,9%,.104) 15.5%,hsla(0,0%,9%,.049) 16.9%,hsla(0,0%,9%,.013) 18.38%,hsla(0,0%,9%,0) 20%);;

}
.summary{
  width: 70%;
}
.chips_wrap{
  margin: 10px 0;
}
.summary p{
  color: white;
  font-weight: 350;
  font-size: 16px;
}
.rating_wrap{
  margin: 0 0 10px 0 ;
  display: flex;
  align-items: center;
}
.row_content{
  color: rgb(175, 173, 173);
}
</style>