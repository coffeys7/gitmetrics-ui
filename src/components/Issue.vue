<template>
  <el-card :class="classes" shadow="hover" v-loading="loading">
    <div @click="toggleExpanded" class="pad-2">
      <template v-if="commentsVisible">
        <div class="sm-text pad-1">
          <a href="#!" @click="hideComments">Hide Comments</a>
        </div>
        <Comment
          v-for="comment in comments"
          :key="comment.node_id"
          :resource="comment"
        />
      </template>
      <template v-else>
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
          <div class="mar-b2">
            <img width="20" height="20" :src="resource.user.avatar_url" />
            &nbsp;
            <a :href="resource.user.html_url" target="_blank">
              @{{resource.user.login}}
            </a>
          </div>
          <div class="sm-text pad-1">
            <a href="#!" @click="showComments">Comments</a>
          </div>
        </template>
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
import Comment from './Comment.vue';
import API from '../middleware/api';
import _ from 'lodash';

export default {
  name: 'Issue',
  data() {
    return {
      comments: [],
      commentsVisible: false
    };
  },
  mixins: [
    Mixins.loading,
    Mixins.resource,
    Mixins.markdown,
    Mixins.github
  ],
  components: {
    Label,
    Comment
  },
  props: {
    resource: Object
  },
  methods: {
    showComments() {
      const that = this;
      that.commentsVisible = true;
      if (_.isEmpty(that.comments)) {
        that.loadWhile(that.loadComments());
      }
    },
    hideComments() {
      const that = this;
      that.commentsVisible = false;
    },
    loadComments() {
      const that = this;
      return new Promise((resolve, reject) => {
        new API(that.resource.comments_url, {
          headers: {
            'Authorization': `token ${process.env.VUE_APP_GITHUB_ACCESS_TOKEN}`
          }
        }).get('').then((data) => {
          that.comments = data;
          resolve(data);
        }, reject);
      });
    }
  }
}

</script>
