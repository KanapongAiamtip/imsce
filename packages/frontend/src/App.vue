<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Imsce logo" width="45" height="45" class="logo-image">
      </div>
    </div>
  </nav>
  <!--router-view></router-view-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style scoped lang="scss">
.navbar {
   @apply h-12 w-full bg-primary text-center flex justify-center;
 }
</style>
