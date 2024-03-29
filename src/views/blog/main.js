import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from '../../store';
import App from './blog.vue';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
