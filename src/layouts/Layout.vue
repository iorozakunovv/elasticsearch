<template>
  <div >
      <v-header>
      </v-header>
      <main>
          <slot/>                 
      </main>
      <footer>
          <v-footer></v-footer>
      </footer>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useInputStore } from '../stores/getdata';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
export default {
  components:{
      'v-header': Header,
      'v-footer': Footer
  },
  computed:{
      ...mapStores(useInputStore),
      heightValue(){
          if (this.inputStore.headerHeight) {
              return this.inputStore.headerHeight
          }
      }
  }
}
</script>
<style lang="css">
  
</style>