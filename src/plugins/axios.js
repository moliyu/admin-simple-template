"use strict";

import axios from "axios";
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_BASE,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const instance = axios.create(config);

instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data;
  },
  async function(error) {
    if (error.response.status === 403) {
      Message.warning('登录失效')
      await store.dispatch('user/resetLogin')
      router.push({ path: '/login' })
    }
    if (error.response.status === 401) {
      Message.error('没有访问权限')
      await store.dispatch('user/resetLogin')
      router.push({ path: '/login' })
    }
    // Do something with response error
    return Promise.reject(error.response.data);
  }
);


export default instance;
