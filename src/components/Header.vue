<template>
  <header class="px-6 py-4 flex justify-end bg-purple-100" v-if="header.length">
    <div class="flex sm:hidden items-center">
      <div v-for="item in header" class="ml-4">
        <router-link :to="item.link" :class="{ 'text-blue-500 underline': $route.path === item.link }"
          class="text-base font-medium">{{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="hidden sm:flex">
      <button class="w-6 h-6 flex flex-col justify-between" @click="menu = !menu">
        <span class="w-full h-1 bg-black"></span>
        <span class="w-full h-1 bg-black"></span>
        <span class="w-full h-1 bg-black"></span>
      </button>
    </div>
    <div :class="menu ? 'right-0' : 'right-[-100%]'" class="w-[80%] h-screen bg-white absolute top-0 duration-200 z-10">
      <div class="p-6 relative">
        <button @click="menu = false" class="absolute right-0 top-0 w-6 h-6 z-10 flex mt-2 mr-2">
          <span class="w-full h-1 bg-black absolute inset-0 m-auto -rotate-45"></span>
          <span class="w-full h-1 bg-black absolute inset-0 m-auto rotate-45"></span>
        </button>
        <div v-for="item in header" class="ml-4 mb-6">
          <router-link :to="item.link" :class="{ 'text-blue-500 underline': $route.path === item.link }"
            class="text-base font-medium">{{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div @click="menu = false" v-if="menu" class="w-full h-full absolute bg-gray-500 left-0 top-0 opacity-50" />
  </header>
</template>
<script>
export default {
  data: () => ({
    header: [],
    menu: false
  }),
  methods: {
    async getHeader() {
      const res = await fetch('http://localhost:3000/header')
      this.header = await res.json()

    }
  },
  mounted() {
    this.getHeader()
  }
}
</script>
