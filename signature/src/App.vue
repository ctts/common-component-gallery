<template>
  <div id="app">
    <signature></signature>
  </div>
</template>

<script>
import Signature from './components/Signature.vue'

export default {
  name: 'app',
  components: {
    Signature
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
}
</style>
