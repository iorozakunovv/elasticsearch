<template>
  <Layout>
    <div>
      <div class="input_search">
        <!-- <input type="text" @input="searchInput" placeholder="search..." v-model="searchValue"> -->
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchValue"
          @input="searchInput"
          label="Search... "
          prepend-inner-icon="mdi-magnify"
          hide-details="auto"
        ></v-text-field>
      </div>
      <div v-if="resulty.length" class="item-wrapper">
        <div class="test" v-for="item in resulty">
          <card :dataB="item"/>
        </div>
      </div>
      <div v-else>
        <div>
          <p>not found</p>
        </div>
      </div>
    </div>
  </Layout>
  <!-- <card :dataB="resulty"/> -->
</template>

<script>
import Card from '../components/card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValue: '',
    controller: new AbortController(),
    resulty:'',
  }),
  methods: {
    async defaultDatt(){
      const url = 'https://api.tvmaze.com/people'
      const res = await fetch(url)
      const data = await res.json()
      this.resulty = await data.filter(item => item.id <= 50 )
    },
    async search() {
      const url = 'https://api.tvmaze.com/search/people?q='
      const response = await fetch(`${url}${this.searchValue}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      const data = await response.json()
      this.resulty = await data.map(item => ({
        ...item.person
      }))
    },
    searchInput(){
      this.controller.abort()
      this.controller = new AbortController()
      this.search()
    }
  },
  mounted() {
    this.defaultDatt()
  },
  watch: {
    searchValue() {
      console.log('fsdfsd');
      if(!this.searchValue.length) {
        this.defaultDatt()
      }
    } 
  }
}
</script>

<style lang="css">
.item-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin:  4% 4% 4%;
  row-gap: 50px;
}
.nav-inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1250px;  
}
.links-nav{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
}
nav{
padding: 50px 0 ;
padding: 50px 0 ;
 padding: 50px 0 ;
  padding: 50px 0 ;
     padding: 50px 0 ;
}
</style>
