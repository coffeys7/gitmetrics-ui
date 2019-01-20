import API from './middleware/api.js';
import pluralize from 'pluralize';
import _ from 'lodash';
import showdown from 'showdown';

const Mixins = {

  loading: {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      /**
       * Set loading status to given value
       *
       * @param isLoading { Boolean }
       */
      setLoading(isLoading) {
        this.loading = isLoading;
      },

      /**
       * Helper to bind state of 'loading' with given promise
       *
       * @param promise { Promise } - promise to bound loading with
       * @param reject { Function } - called if promise errors
       */
      loadWhile(promise, reject) {
        const that = this;
        that.setLoading(true);
        promise.then(() => that.setLoading(false), reject);
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
    },
    methods: {
      /**
       * Load resource from github api
       *
       * @param resource { String }
       * @param opts { Object }
       *
       * @returns Promise
       */
      load(resource, opts = {}) {
        const that = this;
        return new Promise((resolve, reject) => {
          that.githubApi.get(`/${resource}`).then((data) => {
            resolve(data);
          }, reject);
        });
      },

      /**
       * Cleans query params from resource name
       * ==> Ex: ('pulls?state=closed') => 'pulls'
       *
       * @param resourceName { String }
       *
       * @returns String
       */
      cleanResourceName(resourceName) {
        return resourceName.split('?')[0];
      },

      /**
       * Get info from shortened resource path
       *
       * @param { String } i.e. 'commits', 'issues', 'pulls?state=all', etc.
       *
       * @returns Object
       * ==> fmt: { path:, name:, collection: }
       */
      resourceInfoFromPath(path) {
        const that = this;
        let cleanName = that.cleanResourceName(path);
        return {
          path: path,
          name: pluralize.singular(cleanName),
          collection: pluralize(cleanName)
        };
      },

      /**
       * Return component data values for given resources
       *
       * @param ...resourcePaths { ...Array } Ex: ('r1', 'r2', ..., 'rN')
       *
       * @returns Array<Object>
       * ==> fmt: [ { path:, name:, collection: }, ... ]
       * ==> ex: [ { path: 'pulls?state=all', name: 'pull', collection: 'pulls' }, ... ]
       */
      genResourceData(...resourcePaths) {
        const that = this;
        return _.reduce(resourcePaths, (data, resourcePath) => {
          let resource = that.resourceInfoFromPath(resourcePath);
          return {
            ...data,
            [resource.collection]: {
              ...resource,
              load: () => {
                return new Promise((resolve, reject) => {
                  that.load(resource.path).then((data) => {
                    that.resources[resource.collection].data = data;
                  }, reject);
                });
              },
              data: []
            }
          }
        }, {});
      },

      /**
       * Get promise for loading all resources
       *
       * NOTE: Expects 'resources' to be a data variable on the component
       *       in the format returned from 'genResourceData'
       *
       * @returns Promise
       */
      loadResources() {
        const that = this;
        return Promise.all(
          _.map(that.resources, (resource) => resource.load())
        );
      }
    }
  },

  stringHelpers: {
    methods: {
      capitalize: (str) => _.capitalize(str)
    }
  },

  resource: {
    data() {
      return {
        expanded: false
      };
    },
    computed: {
      classes() {
        const that = this;
        return {
          'resource-card': true,
          'expanded': that.expanded
        };
      }
    },
    methods: {
      toggleExpanded() {
        const that = this;
        that.expanded = !that.expanded;
      }
    }
  },

  markdown: {
    methods: {
      markdownToHtml(str) {
        const converter = new showdown.Converter();
        converter.setFlavor('github');
        return converter.makeHtml(str);
      }
    }
  }

};

export {
  Mixins
};
