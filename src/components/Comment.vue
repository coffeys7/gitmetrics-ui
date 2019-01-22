<template>
  <div :class="classes">
    <a :href="resource.user.html_url" target="_blank" class="sm-text abs-tl-1">
      @{{resource.user.login}}
    </a>
    <div class="pad-2">
      <div v-html="markdownToHtml(resource.body)"></div>
    </div>
    <div class="timestamp abs-lr-1">
      {{resource.created_at}}
    </div>
  </div>
</template>

<script>

import { Mixins } from '../mixins';

export default {
  name: 'Comment',
  mixins: [
    Mixins.loading,
    Mixins.resource,
    Mixins.markdown
  ],
  components: {},
  props: {
    resource: Object
  }
};

</script>
