<template>
  <div>
    <el-row>
      <el-col :sm="24" :md="12" :lg="6" class="resource-col" v-for="resource in resources" :key="resource.name">
        <h1>
          {{ capitalize(resource.collection) }}
          <span class="resource-count">
            {{ resource.data.length }}
          </span>
        </h1>
        <component
          v-for="node in resource.data"
          :is="capitalize(resource.name)"
          :key="node.node_id"
          :resource="node"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { Mixins } from '../mixins';
import Commit from './Commit.vue';
import Issue from './Issue.vue';
import Pull from './Pull.vue';

export default {
  name: 'ResourceGrid',
  mixins: [
    Mixins.loading,
    Mixins.github,
    Mixins.stringHelpers
  ],
  components: {
    Commit,
    Issue,
    Pull
  },
  data() {
    const that = this;
    return {
      resources: that.genResourceData(
        'commits',
        'issues',
        'pulls?state=all'
      )
    };
  },
  created() {
    const that = this;
    that.loadWhile(that.loadResources());
  },
  methods: {}
}
</script>

<style scoped>

.resource-col {
  padding: 1em 1.5em
}

.resource-col .resource-count {
  float: right;
  color: #2980b9;
  font-size: 0.5em;
  padding: 1em 1.5em 0 0;
}

div {
  padding: 0.5em;
}

</style>
