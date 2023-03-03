<template>
  <Layout>
    <div v-if="person" class="main-wrapper">
      <div class="image-wrapper">
        <img
          :src="person?.image?.original || 'https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg'">
      </div>
      <div class="item-wrapper">
        k
      </div>
    </div>
  </Layout>
</template>
<script>

import Layout from '../layouts/Layout.vue'

export default {
  data() {
    return {
      person: null,
    };
  },
  methods: {
    async getShow() {
      const URL = "https://api.tvmaze.com/people/";
      const res = await fetch(`${URL}${this.$route.params.id}`);
      const data = await res.json();
      this.person = await data;
      console.log(data);
    },
  },
  mounted() {
    this.getShow();
  },
  components: { Layout }
}
</script>
<style lang="css">
.main-wrapper {
  display: flex;
  gap: 20px;
}

.image-wrapper {
  width: 300px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image-wrapper img {
  width: 100%;
}</style>