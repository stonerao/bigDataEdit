import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/axios' 
import './style/reset.less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './components/index';
Vue.config.productionTip = false;

Vue.prototype.$http = http; // axios

Vue.use(Antd);

router.beforeEach((to, from, next) => {
  next();
})
// 路由结束之后执行
router.afterEach(() => { });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
