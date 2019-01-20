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

.resource-card .el-card__body {
  padding: 0 !important;
}

.center { text-align: center; }

.xsm-text { font-size: 0.75em !important; }
.sm-text { font-size: 0.85em !important; }
.md-text { font-size: 1.1em !important; }
.lg-text { font-size: 1.25em !important; }

.push-right { float: right !important; }

.mar-0 { margin: 0 !important; }
.mar-1 { margin: 0.25em !important; }
.mar-2 { margin: 0.5em !important; }
.mar-3 { margin: 0.75em !important; }
.mar-4 { margin: 1em !important; }

.mar-b0 { margin-bottom: 0 !important; }
.mar-b1 { margin-bottom: 0.25em !important; }
.mar-b2 { margin-bottom: 0.5em !important; }
.mar-b3 { margin-bottom: 0.75em !important; }
.mar-b4 { margin-bottom: 1em !important; }

.pad-0 { padding: 0 !important; }
.pad-1 { padding: 0.25em !important; }
.pad-2 { padding: 0.5em !important; }
.pad-3 { padding: 0.75em !important; }
.pad-4 { padding: 1em !important; }

.resource-card .timestamp {
  font-size: 0.7em;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #a4b0be;
}

.resource-card pre {
  background-color: #f1f2f6;
  padding: 0.5em;
  border-radius: 0.3em;
}

.resource-card .tag {
  font-size: 0.7em;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #a4b0be;
}

a {
  text-decoration: none;
  transition: color 1s;
}

a:hover {
  color: #2980b9;
}

.resource-card {
  margin-bottom: 0.5em;
  padding: 0;
  cursor: pointer;
  border-width: 0;
  border-color: #3498db;
  border-style: solid;
  transition: border 0.15s ease;
  position: relative;
  max-height: 500px;
  overflow: auto;
}

.resource-card:hover {
  border-width: 0 0 0 6px;
}

</style>
