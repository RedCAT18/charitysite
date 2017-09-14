import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { api } from '../api';

Vue.use(Vuex);
Vue.use(VueRouter);

export const store = new Vuex.Store({
    state: {
        register_fail: false,
        register_fail_msg: '',
        login_fail: false,
        login_fail_msg: '',

        login_status : false
        },
    actions: {
        duplicationCheck: function({commit}, payload){
            let formdata = new FormData();
            formdata.append('login_id', payload);

            return new Promise((resolve, reject)=> {
                api.post('duplication', formdata).then(response=>{
                   // console.log(response);
                    if(response.data.success === 1){
                        return resolve(response);
                    }
                }).catch(error=>{
                    return reject(error);
                });
            });
        },
       register : function({commit, state},payload){
           //                validation
           //판별할 사용자 정보
           let data = payload;
           let validateInput = (()=>{
//                   1. 비밀번호
//                    1.1 최소 6자리 이상,
//                    1.2 영어와 숫자가 모두 포함되었는가
               let password = data.password;
               if(!(password.match(/^(?=\w{6,}$)(?=.*\d)(?=.*[a-zA-Z]).*/))) {
                   state.register_fail_msg = '비밀번호는 6자리 이상이며 숫자와 영문을 모두 포함해야 합니다.';
                   state.register_fail = true;

                   return false;
               }
               if(data.password !== data.password_check) {
                   state.register_fail_msg = '확인용 비밀번호 입력이 올바르지 않습니다.';
                   state.register_fail = true;
                   return false;
               }
//                    2.이메일
               let email = data.email;
               if(!(email.match(/^[0-9a-zA-Z]([\-.\w]*[0-9a-zA-Z\-_+])*@([0-9a-zA-Z][\-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/))) {
                   state.register_fail_msg = '이메일 주소를 올바르게 입력해주세요.';
                   state.register_fail = true;
                   return false;
               }

               // 3. 파일타입, 사이즈 체크

               function checkType(file){
                   return !(file.type !== 'image/jpeg' && file.type !== 'image/png');
               }
               function checkSize(file){
                   return (file.size <= (2 * 1024 * 1024));

               }

               if(data.stamp) {
                   if (!checkType(data.stamp)) {
                       state.register_fail_msg = '직인 이미지가 잘못된 파일형식입니다. jpg 또는 png 파일을 올려주세요.';
                       state.register_fail = true;
                       return false;
                   } else if (!checkSize(data.stamp)){
                       state.register_fail_msg = '직인 이미지 파일의 크기가 2MB를 초과합니다.';
                       state.register_fail = true;
                       return false;
                   }
               }
               if(data.logo){
                   if(!checkType(data.logo)){
                        state.register_fail_msg = '로고 이미지가 잘못된 파일형식입니다. jpg 또는 png 파일을 올려주세요.';
                        state.register_fail = true;
                        return false;
                   } else if (!checkSize(data.logo)){
                       state.register_fail_msg = '로고 이미지 파일의 크기가 2MB를 초과합니다.';
                       state.register_fail = true;
                       return false;
                   }
               }

                return true;
           });

           if(validateInput()){
               let formdata = new FormData();

               for(let d in data) {
                   formdata.append(d, data[d]);
               }
               // let config = {'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)};
               // axios에선 헤더를 따로 바꿔줄 필요가 없다고...롸?
               api.post('register', formdata)
                   .then((response)=>{
                   if(response.data.success === 1) {
                        return response;
                   }
                   // console.log(response);
               }).catch((error)=>{
                   console.log(error);
               });
           }
       },
        login: ({commit, state}, payload)=>{
           let formdata = new FormData();
           for(let d in payload){
               formdata.append(d, payload[d]);
           }
           // console.log(formdata);
            return new Promise((resolve, reject)=> {
                api.post('login', formdata).then((response)=>{

                    if(response.data.token){
                        Vue.auth.setToken(response.data.token);
                        state.login_status = true;
                        return resolve(response);
                    }
                }).catch((error)=>{
                    console.log(error);
                    return reject(error);
                });
            })
        },
        logout: ({commit, status})=>{
          Vue.auth.destroyToken();
          state.login_status = false;
        },
        closeError: ({commit})=>{
           commit('CLOSE_ERROR');
        },
    },
    mutations: {
        CLOSE_ERROR: (state)=>{
            state.register_fail = false;
            state.login_fail = false;
        },

    },
    getters : {
        register_status : (state)=>{
            return state.register_fail;
        },
        register_fail_msg: (state)=>{
            return state.register_fail_msg;
        },
        login_status : (state)=>{
            return state.login_fail;
        },
        login_fail_msg: (state)=>{
            return state.login_fail_msg;
        }
    }
});