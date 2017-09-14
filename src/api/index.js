import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import axios from 'axios';
import Auth from '../package/auth/auth';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Auth);


// Add a request intercept r
axios.interceptors.request.use((request) => {
    request.headers = request.headers || { };

    if(Vue.auth.isAuthenticated()){
        request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken());
    }
    return request;
}, (error) => {
    console.error(error.msg);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    if(response.status === 401){
        Vue.auth.destroyToken();
        window.location.pathname = '/';
    }
    return response;
}, function (error) {
    console.error(error.msg);
    return Promise.reject(error);
});

export const api = axios.create({
    baseURL : 'http://localhost:8000/api/',
    // headers: {'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)}
});

// axios.defaults.baseURL = 'http://localhost:8000/api/';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2);
