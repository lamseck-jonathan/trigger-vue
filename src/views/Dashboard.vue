<template>
  <div class="wh-full">
    <the-nav-bar></the-nav-bar>
    <div class="container pt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavBar from '../components/navigations/TheNavBar.vue'

export default {
  components: {
    TheNavBar
  }  
}
</script>

<style scoped>
.wh-full {
  width: 100%;
  height: 100%;
}
</style>