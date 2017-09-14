<template>
    <div>
        <app-header :page="{name : 'register'}"></app-header>

        <div class="register-body">
            <div class="register-title">
                <h1>Register Form</h1>
            </div>
            <div class="register-form">
                <div class="register-error" v-if="register_fail">
                    <div class="error-msg">
                        <p>{{register_fail_msg}}</p>
                    </div>
                    <div class="error-close" @click="close_error()">
                        닫기 <i class="icon ion-close-round"></i>
                    </div>
                </div>
                <div class="register-id-check" v-if="check_id">
                    <div class="check-msg">
                        <p>{{check_id_msg}}</p>
                    </div>
                    <div class="error-close" @click="closeMsg()">
                        닫기 <i class="icon ion-close-round"></i>
                    </div>
                </div>
                <div class="register-form-table">
                    <p class="form-notice"><i class="icon ion-asterisk"></i> 표시는 필수입력. </p>
                    <form method="POST" enctype="multipart/form-data">
                        <table>
                            <tr>
                                <td class="form-question">기관명 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="text" v-model="register_info.organization_name" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">사업자 등록번호  <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer">
                                    <input type="text" id="business_num_first" class="input-num required">
                                    <input type="text" id="business_num_second" class="input-num required">
                                    <input type="text" id="business_num_third" class="input-num required">
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">아이디  <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer">
                                    <input type="text" v-model="register_info.user_id" required>
                                    <button type="button" @click="duplicationCheck()">중복체크</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">비밀번호 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer">
                                    <input type="password" v-model="register_info.password" required>
                                    <p>(6자리 숫자, 영문 혼합)</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">비밀번호 확인 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="password" v-model="register_info.password_check" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">이름 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="text" v-model="register_info.username" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">별명 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="text" v-model="register_info.nickname" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">연락처 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer">
                                    <select name="landline" id="local_num" required>
                                        <app-phone v-for="num in numbers" :phone="num"></app-phone>
                                    </select> -
                                    <input type="text" id="phone_first" class="input-num" required> - <input type="text" id="phone_second" class="input-num" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">휴대폰 번호 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer">
                                    <select name="mobile" id="mobile_code" required>
                                        <app-phone v-for="num in mobiles" :phone="num"></app-phone>
                                    </select> -
                                    <input type="text" id="mobile_first" class="input-num" required> - <input type="text" id="mobile_second" class="input-num" required>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">이메일 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="text" v-model="register_info.email" required></td>
                            </tr>
                            <tr>
                                <td class="form-question">고객주소</td>
                                <td class="form-answer">
                                    <span>우편번호</span><input type="text" v-model="register_info.postcode" class="input-zipcode">
                                    <input type="text" id="address_first" class="address-input" placeholder="시, 구, 읍">
                                    <input type="text" id="address_second" class="address-input" placeholder="나머지 주소">
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">웹진 수신여부 <i class="icon ion-asterisk"></i></td>
                                <td class="form-answer"><input type="checkbox" v-model="register_info.webzine" required> 수신 동의</td>
                            </tr>
                            <tr>
                                <td class="form-question">직인</td>
                                <td class="form-answer">
                                    <input type="file" accept=".jpg, .png" ref="stamp" id="stamp" class="upload-file" @change="onFileChange">
                                    <p>2MB 이하 jpg, png 파일만 가능합니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="form-question">재단로고</td>
                                <td class="form-answer">
                                    <input type="file" accept=".jpg, .png" ref="logo" id="logo" class="upload-file" @change="onFileChange">
                                    <p>2MB 이하 jpg, png 파일만 가능합니다.</p>
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div class="register-submit">
                        <div class="register-submit-btn">
                            <button type="submit" @click="register()">회원 가입</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="go-login">
                <router-link :to="{name:'login'}">로그인 하시겠습니까?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../MainHead.vue';
    import Phone from './Phone.vue';

    export default {
        components: {
            appHeader : Header,
            appPhone: Phone
        },
        data: function () {
            return {
                numbers: ['02', '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064'],
                mobiles: ['010', '011', '016', '018', '019'],
                register_info: {
                    organization_name: '',
                    business_number: '',
                    user_id: '',
                    password: '',
                    password_check: '',
                    username: '',
                    nickname: '',
                    phone: '',
                    mobile: '',
                    email: '',
                    address: '',
                    postcode: '',
                    webzine: true,
                    stamp: '',
                    logo: ''
                },
                check_status : false, // 아이디 체크가 완료되었는지 여부
                check_id: false,  // 아이디 체크 메세지 상태
                check_id_msg : ''
            }
        },
        computed: {
            register_fail(){
                return this.$store.getters.register_status;
            },
            register_fail_msg(){
                return this.$store.getters.register_fail_msg;
            },

        },
        methods: {
            duplicationCheck: function(){
                  if(this.register_info.user_id) {
                      return this.$store.dispatch('duplicationCheck', this.register_info.user_id).then(response=>{
                         if(response.data.check === 1) {
                             this.check_status = true;
                             this.check_id = true;
                             this.check_id_msg = '사용 가능한 아이디입니다.';
                         }
                         else {
                             this.check_id = true;
                             this.check_id_msg = '이미 사용중인 아이디입니다.';
                             this.register_info.user_id = '';
                         }
                      }).catch(error=>{
                          this.check_id = true;
                          this.check_id_msg = '문제가 발생했습니다. 다시 시도해주세요. <br/>' + error;
                      });
                  } else {
                      this.check_id = true;
                      this.check_id_msg = '먼저 아이디를 입력해주세요.';
                  }
            },
            closeMsg: function(){
              this.check_id = false;
            },
            close_error: function(){
              return this.$store.dispatch('closeError');
            },
            onFileChange: function(e){
                let files = e.target.files || e.dataTransfer.files;

                if(!files.length) return;

                if(e.target.id === 'stamp'){
                    this.register_info.stamp = files[0];
                }
                else if (e.target.id === 'logo'){
                    this.register_info.logo = files[0];
                }

            },

            register: function(){
                //아이디 중복체크를 완료했는가
                if(!this.check_status){
                   this.check_id = true;
                   this.check_id_msg = '아이디 중복 체크를 해 주세요.';
                   return;
                }
                //사용자의 입력 정보를 저장할 데이터에 맞게 변경하기
                let organise_data = (()=>{
                    //사업자 등록번호 조합
                    this.register_info.business_number = document.getElementById('business_num_first').value + '-' + document.getElementById('business_num_second').value
                        + '-' + document.getElementById('business_num_third').value;
                    //전화번호 조합
                    this.register_info.phone = document.getElementById('local_num').value + '-' + document.getElementById('phone_first').value + '-' + document.getElementById('phone_second').value;
                    //모바일 번호 조합
                    this.register_info.mobile = document.getElementById('mobile_code').value + '-' + document.getElementById('mobile_first').value + '-' + document.getElementById('mobile_second').value;
                    //주소 조합
                    this.register_info.address = document.getElementById('address_first').value + ' ' + document.getElementById('address_second').value;

                    //파일이름 얻기 - 유저 디비 저장용 (직인, 로고)
//                    this.register_info.stamp = document.getElementById('stamp-filename').value.replace(/^.*\\/, '');
//                    this.register_info.logo = document.getElementById('logo-filename').value.replace(/^.*\\/, '');


                    console.log(this.register_info);

                })();
                this.$store.dispatch('register', this.register_info).then((response)=>{
                    if(response.data.success === 1){
                        this.$router.push('/');
                    }
                });

            },

        }
    }
</script>

<style lang="scss">

    $headerBgcolor : #fbfbfb;
    $basicTextcolor: #000;
    $verylightgrey: #f3f3f3;
    $lightgrey: #a6a6a9;
    $darkgrey: #5b5965;
    $verydarkgrey: #27262c;
    $bluegrey: #7573a7;
    $lightorange: #fc8f30;
    $orange: #fa6f1c;
    $brown: #963e09;
    $iconcolor: #7b7983;
    $headerBoarder: 1px solid #edebf5;
    $lightOrangeBorder: 1px solid #fc8f30;
    $orangeborder: 1px solid #fa6f1c;
    $orangethickborder: 2px solid #fa6f1c;

    .register-body {
        max-width: 1200px;
        margin: 20px auto;
        @media screen and (max-width: 1240px) {
            width: 94%;
        }
        .register-title {
            padding: 10px 0;
            h1 {
                font-size: 1.6em;
                @media screen and (max-width: 768px)
                {
                    font-size: 5vw;
                }
                font-weight: 800;
                letter-spacing: 0.7px;
            }
        }
        .register-form {
            padding: 10px 0;
            font-size: 0.75em;
            color: $darkgrey;
            position: relative;
            .register-error, .register-id-check {
                div { margin: 0 auto;}
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                padding: 15px;
                background: rgba(0,0,0,0.7);
                color: #fff;
                .error-msg, .check-msg {
                    margin-top: 50%;
                    width: auto;
                    text-align: center;
                    p {
                        margin: 0;
                        font-size: 1em;
                        padding: 10px 20px;
                        font-weight: 600;
                    }
                }
                .error-close {
                    width: auto;
                    margin: 10px;
                    text-align: center;
                }
            }
            .register-form-table {
                .form-notice {
                    color: $orange;
                    margin: 0;
                    font-size: 0.7em;
                    padding: 5px;
                }
                width: 100%;
                table {
                    width: 100%;
                    border-top: $orangethickborder;
                    border-bottom: $orangethickborder;

                    tr {
                        border-top: $headerBoarder;
                        .form-question {
                            width: 20%;
                            min-width: 100px;
                            background-color: $verylightgrey;
                            padding: 5px;
                            i {
                                color: $orange;
                                font-size: 0.3em;
                            }
                        }
                        .form-answer {
                            padding: 5px;
                            input {
                                max-width: 800px;
                                margin: 2px;
                                border: 1px solid $lightgrey;
                            }
                            .input-num {
                                display: inline-block;
                                width: 50px;
                            }
                            .input-zipcode {
                                width: 50px;
                            }
                            .address-input {
                                display: block;
                                width: 400px;
                                @media screen and (max-width: 768px) {
                                    width: 85%;
                                }
                            }
                            select {
                                margin: 2px;
                                padding: 2px;
                            }
                            p {
                                margin: 0;
                                padding: 3px 10px 0;
                                font-size: 0.7em;
                                color: $lightorange;
                                font-weight: 600;
                            }
                            button {
                                margin: 2px;
                                font-size: 0.8em;
                            }
                            span {
                                font-size: 0.7em;
                                font-weight: 600;
                            }
                            .upload-file {
                                width: 90%;
                                border: none;
                                font-size: 0.75em;
                            }
                        }
                    }
                }
                .register-submit {
                    padding: 10px 0;
                    clear: both;
                    .register-submit-btn {
                        float: right;
                        button {
                            border: $orangethickborder;
                            background: #fff;
                            color: $orange;
                            font-size: 1.1em;
                            font-weight: 700;
                            padding: 8px 20px;
                        }
                    }
                }
            }
        }
        .go-login {
            a {
                color: $basicTextcolor;
                text-decoration: none;
                font-size: 0.75em;
                font-weight: 600;
            }
        }
    }
</style>