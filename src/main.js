import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Header from '@/components/Header.vue';
import Header1 from '@/components/Header1.vue';
import Search from '@/components/Search.vue';
import Bjcondition from '@/components/bjcondition.vue';
import Shcondition from '@/components/shcondition.vue';

Vue.component('my-header',Header);
Vue.component('my-header1',Header1);
Vue.component('my-search',Search);
Vue.component('my-bjcondition',Bjcondition);
Vue.component('my-shcondition',Shcondition);

axios.defaults.baseURL = "http://localhost:81";

Vue.prototype.axios=axios;
//
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
