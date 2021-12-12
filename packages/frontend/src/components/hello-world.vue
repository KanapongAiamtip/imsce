<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>+
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>|
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <h3>count is: {{ count }}</h3>
  <button type="button" class="h-9 ring-2 ring-blue-500 mr-2 p-1" @click="decrement" :disabled="isDisabled">decrement</button>
  <button type="button" class="h-9 ring-2 ring-blue-500 p-1" @click="increment">increment</button>
  <p>Edit<code>components/hello-world.vue</code> to test hot module replacement.</p>
  <h3>{{ life }}</h3>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useCounter } from '@/composables'

export default defineComponent({
  name: 'hello-world',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const { count, increment, decrement, life } = useCounter()

    const isDisabled = computed(() => {
      return count.value === 0
    })

    return {
      count,
      life,
      isDisabled,
      increment,
      decrement
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
