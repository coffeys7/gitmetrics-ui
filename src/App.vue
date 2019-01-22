<template>
  <div id="app">
    <ResourceGrid></ResourceGrid>
  </div>
</template>

<script>

import ResourceGrid from './components/ResourceGrid.vue'

export default {
  name: 'app',
  components: {
    ResourceGrid
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

.abs-tl {
  position: absolute;
  top: 0;
  left: 0;
}

.abs-tr {
  position: absolute;
  top: 0;
  right: 0;
}

.abs-ll {
  position: absolute;
  bottom: 0;
  left: 0;
}

.abs-lr {
  position: absolute;
  bottom: 0;
  right: 0;
}

.abs-tl-1 {
  position: absolute;
  top: 10px;
  left: 10px;
}

.abs-tr-1 {
  position: absolute;
  top: 10px;
  right: 10px;
}

.abs-ll-1 {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.abs-lr-1 {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.timestamp {
  font-size: 0.7em;
  color: #a4b0be;
}

.labels {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.labels .label {
  margin: 0.25em;
}

.label {
  padding: 0.25em 0.5em;
  border-radius: 0.3em;
  opacity: 0.8;
  transition: opacity 0.2s;
  text-align: center;
  padding: 0.25em;
}

.label:hover {
  opacity: 1.0;
}

.resource-card .labels {
  position: absolute;
  bottom: 0;
  left: 0;
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
  transition: color 0.25s;
}

a:hover {
  color: #2980b9;
}

.resource-card {
  margin-bottom: 0.5em;
  padding: 0;
  padding-bottom: 3em !important;
  cursor: pointer;
  position: relative;
  max-height: 500px;
  overflow: auto;
}

</style>
