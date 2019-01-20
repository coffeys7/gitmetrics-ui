<template>
  <el-card :class="classes" shadow="hover" v-loading="loading">
    <div @click="toggleExpanded">
      <template v-if="expanded">
        <div class="pad-1 center">
          {{resource.sha}}
        </div>
      </template>
      <template v-else>
        <p class="mar-0">
          <img width="20" height="20" :src="resource.author.avatar_url" />
          &nbsp;
          <a :href="resource.author.html_url" target="_blank">
            @{{resource.author.login}}
          </a>
          <span class="tag">
            <el-tag size="mini">
              <a :href="resource.html_url" target="_blank" class="push-right">
                {{shaShortened}}
              </a>
            </el-tag>
          </span>
        </p>
        <p class="mar-b0 sm-text pad-4">
          {{resource.commit.message}}
        </p>
      </template>
    </div>
    <span class="timestamp">
      {{resource.commit.author.date}}
    </span>
  </el-card>
</template>

<script>

import _ from 'lodash';
import { Mixins } from '../mixins';

export default {
  name: 'Commit',
  mixins: [
    Mixins.loading,
    Mixins.resource
  ],
  props: {
    resource: Object
  },
  data() {
    return {};
  },
  computed: {
    shaShortened() {
      return _.truncate(this.resource.sha, {
        length: 7,
        omission: ''
      });
    }
  }
}

</script>
