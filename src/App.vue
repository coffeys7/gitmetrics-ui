<template>
  <div id="app">
    <Test msg="Hello World"></Test>
  </div>
</template>

<script>

import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style>

body, html {
	background-color: #dfe4ea;
	font-family: 'Lato', sans-serif;
}

#app {
  font-family: 'Lato', sans-serif;
  color: #2f3542;
}

</style>
