<template>
  <Layout>
    <div>
      <div class=" flex justify-center py-8">
        <input class="w-1/3 md:w-2/3 sm:w-full rounded-xl sm:mx-6 border border-solid border-gray-600 py-2 px-4"
          placeholder="search..." v-model="searchValue" @input="searchInput" type="text">
      </div>
      <div class="px-6" v-if="result.length">
        <p class="text-sm font-4xl text-gray-600 mb-10" v-if="searchValue.length">Результат запроса по
          <span class="text-blue-600">{{ searchValue }}</span>
        </p>
        <div v-for="item in result" :key="item">
          <card :item="item" type="shows" />
        </div>
      </div>
      <div class="px-6 font-xl" v-else>
        <p>Данных нет</p>
      </div>
    </div>
  </Layout>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  },
  data: () => ({
    searchValue: '',
    controller: new AbortController(),
    result: []
  }),
  methods: {
    searchInput() {
      this.controller.abort()
      this.controller = new AbortController()
      this.search()
    },
    async search() {
      if (this.searchValue.length) {
        const URL = 'https://api.tvmaze.com/search/shows?q='
        const response = await fetch(`${URL}${this.searchValue}`, {
          method: 'GET',
          signal: this.controller.signal
        })
        const data = await response.json()
        this.result = await data.map(item => ({
          ...item.show
        }))
      }
    },
    async getAllShows() {
      const URL = 'https://api.tvmaze.com/shows'
      const response = await fetch(URL)
      const data = await response.json()
      this.result = await data.filter(item => item.id < 50)
      console.log(this.result)
    }
  },
  mounted() {
    this.getAllShows()
  },
  watch: {
    searchValue() {
      if (!this.searchValue.length) {
        this.getAllShows()
      }
    }
  }
}
</script>