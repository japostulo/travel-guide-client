import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;

if(localStorage.token != null){
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
}

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
