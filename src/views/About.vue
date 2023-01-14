<template>
  <Layout>
    about
  </Layout>
</template>
<script>
export default {
  methods: {
    async getShow() {
      const res = await fetch('https://api.tvmaze.com/shows/19')
      const data = await res.json()
      console.log(data)
    }
  },
  mounted() {
    this.getShow()
  }
}
</script>