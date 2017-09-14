<template>
    <div>
        <app-header :page = "{name: 'login'}"></app-header>
        <div class="login-body">
            <div class="login-title">
                <h1>Login</h1>
            </div>
            <div class="login-form">
                <div class="login-error" v-if="login_fail">
                    <div class="error-msg">
                        <p>{{login_fail_msg}}</p>
                    </div>
                    <div class="error-close" @click="close_error()">
                        닫기 <i class="icon ion-close-round"></i>
                    </div>
                </div>

                <div class="login-form-box">
                    <form>
                        <table>
                            <tr>
                                <td class="login-question"><label for="user_id">아이디</label></td>
                                <td class="login-answer"><input type="text" v-model="login_info.login_id" id="user_id"></td>
                            </tr>
                            <tr>
                                <td class="login-question"><label for="password">비밀번호</label></td>
                                <td class="login-answer"><input type="password" v-model="login_info.password" id="password"></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div class="login-submit">
                    <div class="login-submit-btn">
                        <button @click="login()">로그인</button>
                    </div>
                </div>
            </div>
            <div class="go-register">
                <router-link :to="{name:'register'}">아직 회원이 아니신가요?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../MainHead.vue';

    export default {
        components: {
            appHeader : Header
        },
        data(){
            return {
                login_info : {
                    login_id: '',
                    password: ''
                }
            }
        },
        computed :{
            login_fail(){
                return this.$store.getters.login_status;
            },
            login_fail_msg(){
                return this.$store.getters.login_fail_msg;
            }
        },
        methods: {
            close_error: function(){
                return this.$store.dispatch('closeError');
            },
            login: function(){
                this.$store.dispatch('login', this.login_info).then(response=>{
                    console.log(response);

                    if(response.data.success === 1){
                        this.$router.push('/');
                    }
                }). catch(error => {
                    alert ('잘못된 아이디 혹은 비밀번호입니다. 다시 시도해주세요.');
                    this.login_info.login_id = '';
                    this.login_info.password = '';
                });
            }
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

    .login-body {
        max-width: 1200px;
        margin: 80px auto;
        @media screen and (max-width: 1240px) {
            width: 94%;
        }
        .login-title{
            padding: 10px 0;
            h1{
                font-size: 1.6em;
                @media screen and (max-width: 768px)
                {
                    font-size: 5vw;
                }
                font-weight: 800;
                letter-spacing: 0.7px;
            }
        }
        .login-form{
            .login-error {
                div { margin: 0 auto;}
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                padding: 15px;
                background: rgba(0,0,0,0.7);
                color: #fff;
                .error-msg {
                    margin-top: 10px;
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
            padding: 10px 0;
            font-size: 0.75em;
            color: $darkgrey;
            position: relative;
            .login-form-box {
                table {
                    width: 100%;
                    border-top: $orangethickborder;
                    border-bottom: $orangethickborder;
                    tr {
                        border-top: $headerBoarder;
                        .login-question {
                            width: 20%;
                            min-width: 100px;
                            background-color: $verylightgrey;
                            padding: 5px;
                            text-align: center;
                            label {
                                margin: 0;
                            }
                        }
                        .login-answer {
                            padding: 5px;
                        }
                    }

                }
            }
            .login-submit{
                padding: 10px 0;
                clear: both;
                .login-submit-btn{
                    float: right;
                    button {
                        border: $orangethickborder;
                        background: $orange;
                        color: #fff;
                        font-size: 1.1em;
                        font-weight: 700;
                        padding: 8px 20px;
                    }
                    button:hover {
                        background: #fff;
                        color: $orange;
                    }
                }
            }
        }
        .go-register {
            a { 
                color: $basicTextcolor;
                text-decoration: none;
                font-size: 0.75em;
                font-weight: 600;
            }
        }
    }
</style>