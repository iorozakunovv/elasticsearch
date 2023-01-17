<template>
  <Layout>
    <div v-if="person">
      <div class="w-full h-auto">
        <img class="w-full h-auto"
          :src="person?.image?.original || 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'"
          :alt="person.name">
      </div>
      <div class="px-4 py-6">
        <h4 class="font-bold text-4xl text-blue-100" v-if="person.name.length">{{ person.name }}</h4>
      </div>
      <div class="px-4 py-6">
        <p class="text-blue-100 " v-if="person?.country?.code && person?.country?.name">
          {{ `${person.country.code} - ${person.country.name}` }}
        </p>
        <p  class="text-blue-100 " v-if="person.birthday && person.birthday.length">Age - {{ age }} <span class="text-xs text-blue-100 ">({{
          person.birthday
        }})</span></p>
      </div>
    </div>
  </Layout>
</template>
<script>

import moment from 'moment';
export default {
  data: () => ({
    person: null
  }),
  methods: {
    async getPerson() {
      const URL = `https://api.tvmaze.com/people/${this.$route.params.id}`
      const response = await fetch(URL)
      const data = await response.json()
      this.person = await data
    }
  },
  mounted() {
    this.getPerson()

  },
  computed: {
    age() {
      return moment().format('YYYY') - moment(this.person.birthday).format('YYYY')
    }
  }
}
</script>