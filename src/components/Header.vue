<template>
  <div class="nav-wrapper">
    <div ref="myHeader" class="nav-inner container" >
      <router-link class="icons" to="/">
        Vue Movies
      </router-link>
      <div class="links-nav">
        <router-link :class="routePath" to="/shows">MOVIES</router-link>
        <router-link :class="routePath" to="/people">PEOPLE</router-link>
        <Chart/>
        <router-link  :class="routePath" to="/input">SIGN IN</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from './Chart.vue';
import { mapStores } from 'pinia';
import { useInputStore } from '../stores/getdata.js'
import { useHeaderStore } from '../stores/header';
export default {
  data() {
    return {

      dialog: false,
    }
  },
  components:{
    // 'v-card':Card
    Chart
  },
  methods: {
    searchInput(){
      console.log(this.movieInput.movieInputs)  
    },

  },
  async  mounted() {
    this.inputStore.headerHeight = this.$refs.myHeader.clientHeight
    await this.headerStore.getFavourite()
  },
  computed: {
      ...mapStores(useHeaderStore, useInputStore)
  },
}
</script>
<style lang="css">
.nav-inner {
  display: flex !important;
  justify-content: space-around !important;
}
.nav-wrapper{
  background: #000;
}
.listttt{
  margin-right: 3px;
}

.nav-wrapper{
  z-index: 10;
  width: 100%;
}
.v-overlay__scrim {
  opacity: 60% !important;
}
.routePath{
  color: white ;

}
.links-nav{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
a{
  padding: 0;
  margin: 0 ;
}
.icons{
  font-size: 28px;
  display: flex;
}
</style>