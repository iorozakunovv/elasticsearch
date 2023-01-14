<template>
  <div class="overflow-hidden relative min-h-screen">
    <v-header />
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    'v-header': Header
  }
}
</script>