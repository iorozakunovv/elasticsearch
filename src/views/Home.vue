<template>
  <Layout>
    <div>
      <shows-slider :shows="thriller" title="Thriller" />
    </div>
    <div>
      <shows-slider :shows="horror" title="Horror" />
    </div>
    <div>
      <shows-slider :shows="crime" title="Crime" />
    </div>
  </Layout>
</template>
<script>
import ShowsSlider from "@/components/ShowsSlider.vue";

export default {
  data: () => ({
    thriller: [],
    horror: [],
    crime: [],
  }),
  components: {
    ShowsSlider
  },
  methods: {
    async getAllShows() {
      const URL = 'https://api.tvmaze.com/shows'
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      this.thriller = await data
        .filter(item => item.genres[2] === 'Thriller')
      this.horror = await data
        .filter(item => item.genres[1] === 'Horror')
      this.crime = await data
        .filter(item => item.genres[1] === 'Crime')
    }
  },
  mounted() {
    this.getAllShows()
  }
}
</script>