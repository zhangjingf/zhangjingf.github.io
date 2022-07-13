import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './express.vue';
import viewport from '../../utils/viewport';
import './mobile.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
viewport.init(1);
let tid = null;
window.addEventListener(
  'resize',
  () => {
    clearTimeout(tid);
    tid = setTimeout(viewport.init(1), 300);
  },
  false
);
window.addEventListener(
  'pageshow',
  (e) => {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(viewport.init(1), 300);
    }
  },
  false
);
new Vue({
  render: (h) => h(App)
}).$mount('#app');
