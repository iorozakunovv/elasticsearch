<template>
  <div class="flex justify-between items-center mb-4">
    <div class="w-1/2">
      <div class="flex items-center">
        <div class="w-1/2">
        <img :src="cast?.character?.image?.medium" alt="">
        </div>
        <div class="w-1/2 pl-2">
          <span>{{ cast?.character?.name }}</span>
        </div>
      </div>
    </div>
    <div>
<!--      <span>-></span>-->
    </div>
    <div class="w-1/2">
      <div class="flex items-center">
        <div class="w-1/2">
          <img :src="cast?.person?.image?.medium" alt="">
        </div>
        <div class="w-1/2 pl-2">
          <span>{{ cast?.person?.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cast: {
      type: Object,
      default: null
    }
  }
}
</script>