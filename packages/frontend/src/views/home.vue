<template>
  <img class="object-contain mx-auto mt-12" src="@/assets/logo.png" alt="Vue Logo">
  <hello-world :msg="message"></hello-world>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import HelloWorld from '@/components/hello-world.vue'

export default defineComponent({
  name: 'home',
  components: {
    'hello-world': HelloWorld
  },
  setup () {
    const message = ref('Vue 3 + TypeScript setup')

    return {
      message
    }
  }
})
</script>
