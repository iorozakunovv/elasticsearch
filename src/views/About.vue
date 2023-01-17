<template>
  <Layout>
    <div class="text-blue-100 inline-block justify-center m-5">
      <h1> <strong>My GitHub: </strong>  https://github.com/iorozakunovv</h1>
      <h1> <strong>My Gmail: </strong>  iorozakunovv@gmail.com</h1>
      <h1> <strong>Telegram:</strong>   @iorozakunovv</h1>
      <h1> <strong>Contacts:</strong>   +996700440022</h1>

    </div>

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