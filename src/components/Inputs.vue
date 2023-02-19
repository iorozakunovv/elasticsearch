<template>
  <!-- <div>
      <input type="text" v-model="value" ><button @click="send">send</button>
  </div>
  <div v-for="item in header">
      <router-link :to="item.link">{{ item.name }}</router-link>
  </div> -->
  <div>

  </div>
</template>

<script>

import { mapStores } from 'pinia';
// import { useValueStore } from '../stores/getdata.js'
export default {
  data: () => ({
      value: '',
      header: [
          {
              name:'Main',
              link: '/'
          },
          {
              name:'Movies',
              link: '/about'
          },
          {
              name:'People',
              link: '/home'
          },
          {
              name:'Main',
              link: '/'
          },
      ]
  }),
  computed: {
      // ...mapStores(useValueStore)
  },
  mounted() {
      console.log(this.header);
      console.log(this.vContainer);
  },
  methods: {
      send() {
          this.valueStore.value = this.value
      },
  }
}
</script>

<style scoped>
</style>