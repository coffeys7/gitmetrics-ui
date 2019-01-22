<template>
  <el-card :class="classes" shadow="hover" v-loading="loading">
    <div @click="toggleExpanded" class="pad-2">
      <template v-if="expanded">
        <div class="pad-4">
          <div v-html="markdownToHtml(resource.body)">
          </div>
        </div>
      </template>
      <template v-else>
        <div class="mar-b2">
          <strong>#{{resource.number}}</strong>
          &nbsp;&nbsp;
          <a :href="resource.html_url" target="_blank">
            {{resource.title}}
          </a>
          <span class="tag">
            <el-tag size="mini" v-if="resource.state === 'open'">{{resource.state}}</el-tag>
            <el-tag type="info" size="mini" v-if="resource.state === 'closed'">{{resource.state}}</el-tag>
          </span>
        </div>
        <div class="pad-2">
          <img width="20" height="20" :src="resource.user.avatar_url" />
          &nbsp;
          <a :href="resource.user.html_url" target="_blank">
            @{{resource.user.login}}
          </a>
        </div>
      </template>
    </div>
    <div class="labels abs-ll">
      <Label
        v-for="label in resource.labels"
        :key="label.node_id"
        :label="label"
      />
    </div>
    <span class="timestamp abs-lr-1">
      {{resource.created_at}}
    </span>
  </el-card>
</template>

<script>

import { Mixins } from '../mixins';
import Label from './Label.vue';

export default {
  name: 'Pull',
  mixins: [
    Mixins.loading,
    Mixins.resource,
    Mixins.markdown,
    Mixins.color
  ],
  components: {
    Label
  },
  props: {
    resource: Object
  }
}

</script>
