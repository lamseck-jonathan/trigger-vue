<template>
  <div class="wh-full d-flex">
    <the-side-bar></the-side-bar>
    <div class="wh-full">
      <the-nav-bar></the-nav-bar>
      <div class="container pt-2">
        <h1>Dashboard</h1>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from '../components/navigations/TheNavBar.vue'
import TheSideBar from '../components/navigations/TheSideBar.vue'

export default {
  components: {
    TheNavBar,
    TheSideBar
  }  
}
</script>

<style scoped>
.wh-full {
  width: 100%;
  height: 100%;
}
</style>