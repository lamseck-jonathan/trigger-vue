<template>
  <router-view></router-view>
</template>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}

body {
  background-color: #fcfcfc;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
