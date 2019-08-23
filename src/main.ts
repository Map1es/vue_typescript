import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import '@/assets/css/index.scss'; // 引入全局的css部分
import './plugins/vant.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // axios,
  render: (h) => h(App),
}).$mount('#app');
