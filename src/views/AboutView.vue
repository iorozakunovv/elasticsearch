<template>
  <Layout>
    <div class="about">
      <div>
        <!-- <input type="text" @input="searchInputValue" placeholder="search..." v-model="searchValueAbout"> -->
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchValueAbout"
          @input="searchInputValue"
          label="Search... "
          prepend-inner-icon="mdi-magnify"
          hide-details="auto"
        ></v-text-field>
        <v-select
            v-model="value"
            :items="items"
            @click:append="testing"
            chips
            label="Chips"
            multiple
        ></v-select>
      </div>
      <div v-if="result.length">
        <div v-if="result.length" class="item-wrapper">
          <div v-for="item in result">
            <card @deleteFavourite="deleteFavourite" @addFavourite="addFavourite" :dataB="item"/>
          </div>
        </div>
        <div v-else>
          <div>
            <p>not found</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import { useHeaderStore } from '../stores/header'
import { mapStores } from 'pinia'
import Card from '../components/Card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValueAbout: '' ,
    result: '',
    controller: new AbortController(),
    options: [
        { text: 'all', value: 'all' },
        { text: 'Romance', value: 'Romance' },
        { text: 'Drama', value: 'Drama' },
        { text: 'Science', value: 'Science' },
        { text: 'Thriller', value: 'Thriller' },
        { text: 'Action', value: 'Action' },
        { text: 'Crime', value: 'Crime' },
        { text: 'Horror', value: 'Horror' },
        { text: 'Mystery', value: 'Mystery' },
        { text: 'History', value: 'History' },
        { text: 'War', value: 'War' },
        { text: 'Adventure', value: 'Adventure' }
    ],
    items: ['all','Romance','Drama','Science','Thriller','Action','Crime','Horror','Mystery','History','War','Adventure'],
    value: [],
  }),
  methods: {
    async defaultData(){
      const url = "https://api.tvmaze.com/shows"
      const res = await fetch(url)

      const data = await res.json()
      this.result = data.filter(item => item.id <= 51)

    },
    async getData() {
      const url = 'https://api.tvmaze.com/search/shows?q='
      const response = await fetch(`${url}${this.searchValueAbout}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      const data = await response.json()
      this.result = await data.map(item => ({
        ...item.show
      }))
    },
    searchInputValue(){
      this.controller.abort()
      this.controller = new AbortController()
      this.getData()
    },
    async addFavourite(show){
      const options = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(show)
      }
      const URL = 'http://localhost:3000/favourite'
      const response = await fetch(URL, options)
      if (response.ok) {
        this.headerStore.getFavourite()
      }
      const data = await response.json()
    },
    async deleteFavourite(show){
      const options = {
        method: 'DELETE'
      }
      const URL = `http://localhost:3000/favourite/${show.id}`
      const response = await fetch(URL, options)
      if (response.ok) {
        this.headerStore.getFavourite()
      }
      const data = await response.json()
    },
    testing(){
      console.log(this.value + "hello world");
    }
  },
  mounted(){
    this.defaultData()
    // console.log(this.getDataStore);
  },
  computed: {
    ...mapStores(useHeaderStore)
  },
  watch: {
    searchValueAbout() {
      if(!this.searchValueAbout.length) {
        this.defaultData()
      }
    } 
  }
}
</script>

<style>
</style>
