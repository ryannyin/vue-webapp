/*
** Created by scent0330 on 6/21/2019.
** Last updated by scent0330 on 7/1/2019.
*/

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'

import Loading from '@/components/lib/loading'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/style/main.scss';

import GoogleAuth from 'vue-google-oauth2'
Vue.use(GoogleAuth, { client_id: '833706975830-5s0vot6n0mjpr93vmjhvq4056a55de3q.apps.googleusercontent.com' })

const token = localStorage.getItem('my-token-info')

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

Vue.component('loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
