<template>
  <Layout>
    <div>
      <div>
        <v-banner/>
      </div>
      <div>
        <showsSlider/>
      </div>
    </div>
  </Layout>
</template>
<script>
import ShowsSlider from '../components/ShowSlider.vue';
import banner from '../components/Banner.vue';
import { mapStores } from 'pinia';
import { useGenreStore } from '../stores/genres'
import 'vuetify/styles'
// import { createVuetify } from 'vuetify'

export default {
    data() {
        return {
 
        };
    },
    components:{
      ShowsSlider,
      'v-banner': banner
    },
    mounted() {
      this.genreStore.getGenres()
      console.log(this.genreStore.genres);
    },
    computed:{
      ...mapStores(useGenreStore)
    }
}
</script>
<style>
</style>