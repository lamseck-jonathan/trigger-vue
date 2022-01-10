<template>
  <div class="hello p-5">
    <h1>{{ msg }}</h1>
    <base-input></base-input>
    <base-button class="mt-3">our button</base-button>
  </div>
</template>

<script>
import BaseButton from './base/BaseButton.vue'
import BaseInput from './base/BaseInput.vue'

export default {
  name: 'HelloWorld',
  components: {
    BaseButton,
    BaseInput
  },

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 50vw;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
