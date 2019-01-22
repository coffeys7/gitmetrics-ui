<template>
  <span class="label xsm-text" :style="style">
    {{label.name}}
  </span>
</template>

<script>

import { Mixins } from '../mixins';
import _ from 'lodash';

export default {
  name: 'Label',
  mixins: [
    Mixins.color
  ],
  props: {
    label: Object
  },
  methods: {
    style(label) {
      const that = this;
      let styles = {
        'background-color': `#${label.color}`,
        'color': that.getContrastText(label.color)
      };
      return _.reduce(_.keys(styles), (str, key) => {
        return `${str}${key}:${styles[key]};`;
      }, '');
    }
  }
}

</script>
