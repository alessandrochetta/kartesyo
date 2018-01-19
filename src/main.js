// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import VueResource from 'vue-resource'
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(SuiVue);
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
