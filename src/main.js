import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.interceptors.request.use(function(config){
  if (app.$store.state.credentials.token !== ''){
      config.headers['Authorization'] = `Bearer ${app.$store.state.credentials.token}`;
  }
  return config;
},function(error){
  return Promise.reject(error);
});

var app = new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
