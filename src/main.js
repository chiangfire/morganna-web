//import "babel-polyfill";
//按需引入，babel-polyfill 使用的就是 core.js
import 'core-js/es6/promise'         
import Vue from 'vue';
import App from './App';
import router from './router';

import Vuex from 'vuex';
import Axios from 'axios';

import Components from './components/index.js';
import "./components/theme-style/index.scss";


Vue.use(Vuex);
Vue.use(Components,{size:"small"});

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const axiosContext = Axios.create({
    baseURL: process.env.BASE_PATH,    // 读取 config 配置文件
    timeout: 5000                      // 请求超时时间
});

//request 拦截器
axiosContext.interceptors.request.use(config => {
    if (xxxx) {
        config.headers['xxxx'] = xxxx; // 每个请求头都携带一个自定义的值
    }
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
