<template>
  <router-link v-if="type.length" :to="`/${type}/${item.id}`" class="flex mb-5 items-center justify-between">
    <div class="flex items-center">
      <div class="w-20 h-20 mr-4">
        <img class="w-full h-full object-contain"
          :src="item?.image?.medium || 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'"
          :alt="item.name">
      </div>
      <p class="first-letter:text-blue-500 first-letter:font-semibold">{{ item.name }}</p>
    </div>
    <button class="border border-solid border-gray-400">Favorite</button>
  </router-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>