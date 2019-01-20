import API from './middleware/api.js';

const Mixins = {

  loading: {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      setLoading(isLoading) {
        this.loading = isLoading;
      }
    }
  },

  github: {
    data() {
      return {
        githubApi: new API('https://api.github.com/repos/coffeys7/gitmetrics-test', {
          headers: {
            'Authorization': `token ${process.env.VUE_APP_GITHUB_ACCESS_TOKEN}`
          }
        })
      };
    }
  }

};

export {
  Mixins
};
