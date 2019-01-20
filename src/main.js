import Vue from 'vue'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource/dist/vue-resource';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, { locale });
Vue.use(VueResource);
import App from './App.vue'
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
