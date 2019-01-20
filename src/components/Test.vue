<template>
  <div v-loading="loading" element-loading-background="transparent">
    <h1>{{msg}}</h1>
    <el-button type="primary" @click="loadCommits">
      Load commits
    </el-button>
  </div>
</template>

<script>

import { Mixins } from '../mixins';

export default {
  name: 'Test',
  mixins: [
    Mixins.loading,
    Mixins.github
  ],
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {
    const that = this;
    that.setLoading(true);
    that.loadCommits().then((commits) => {
      that.setLoading(false);
    });
  },
  methods: {

    loadCommits() {
      const that = this;
      return new Promise((resolve, reject) => {
        that.githubApi.get('/commits').then((data) => {
          resolve(data);
        }, reject);
      });
    }

  }
}
</script>

<style scoped>

div {
  padding: 0.5em;
}

</style>
