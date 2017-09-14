<template>
    <header>
        <!--1. very top bar (phone number, sns link, donate)-->
        <div class="upper-header">
            <div class="header-inner row justify-content-between">
                <div class="header-tel col-md-3 col-sm-12">
                    <div><i class="icon ion-ios-telephone"></i></div>
                    <div><p> Call Us : +1 514 000 0000</p></div>
                </div>
                <div class="header-btn col-md-3 col-sm-12">
                    <div class="row">
                        <div class="header-btn-box">
                            <div class="row">
                                <div class="header-sns">
                                    <div><i class="icon ion-social-facebook"></i></div>
                                    <div><i class="icon ion-social-twitter"></i></div>
                                    <div><i class="icon ion-social-googleplus"></i></div>
                                </div>
                                <div class="header-donate float-right">
                                    <p>DONATE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--2.main navigation (logo, nav)-->
        <div class="lower-header">
            <div class="header-inner row justify-content-between">
                <div class="logo col-lg-3 col-md-12">
                    <router-link to="/"><img src="../assets/images/logo.png" alt="Logo"><span>Foundation</span></router-link>
                </div>
                <div class="menu-btn">
                    <button class="menu-toggle" type="button" id="menuOpenButton" @click="openMenu()">
                        <i class="icon ion-navicon-round"></i>
                    </button>
                </div>
                <div class="navi col-lg-9 col-md-12">
                    <ul class="float-right">
                    <li><a href="">about</a></li>
                    <li><a href="">causes</a></li>
                    <li><a href="">events</a></li>
                    <li><a href="">news</a></li>
                    <li><a href="">docs</a></li>
                    <li><a href="">gallery</a></li>
                    <li><a href="">staff</a></li>
                    <li><a href="">shop</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" id="dropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">user</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownUser">
                            <a class="dropdown-item" @click="go_register">Register</a>
                            <a class="dropdown-item" @click="go_login">Login</a>
                            <a class="dropdown-item" >User Info</a>
                        </div>
                    </li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
                </div>
            </div>
        </div>
        <transition @enter="enter" @leave="leave">
            <div class="menu-toggle-body" id="openedMenu" v-if="open">
                <a href="#">about</a>
                <a href="#">causes</a>
                <a href="#">events</a>
                <a href="#">news</a>
                <a href="#">docs</a>
                <a href="#">gallery</a>
                <a href="#">staff</a>
                <a href="#">shop</a>
                <a class="openSubMenu" id="user" @click="openSubMenu('user')">user
                    <div class="sub-menu">
                        <a @click="go_register">Register</a>
                        <a @click="go_login">Login</a>
                        <a href="">Userinfo</a>
                    </div>
                </a>
                <a class="dropdown-item" href="#">projects</a>
                <a class="dropdown-item" href="#">contact</a>
            </div>
        </transition>
    </header>

</template>

<script>
    export default {
        data(){
            return {
                open: false
          }
        },
        methods: {
            openMenu: function(){
                this.open = !this.open;
            },
            enter: function(el){
                el.classList.add('animated');
                el.classList.add('fadeInDownBig');
            },
            leave: function(el){
                el.classList.add('animated');
                el.classList.add('fadeOutUpBig');
            },
            openSubMenu: function(name){
                let el = document.getElementById(`${name}`).getElementsByTagName('div');
                if(!el[0].style.display || el[0].style.display === 'none') return el[0].style.display = 'block';
                if(el[0].style.display === 'block') return el[0].style.display = 'none';
            },
            go_register: function(){
                this.open = false;
                return this.$router.push('/register');
            },
            go_login: function(){
                this.open = false;
                return this.$router.push('/login');
            }
        }
    }
</script>

<style lang="scss">

    /*variables*/

    $headerBgcolor : #fbfbfb;
    $basicTextcolor: #000;
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

    * { font-family: 'Lato', sans-serif; box-sizing: border-box; }
    a, a:hover { text-decoration: none; }
    .row {padding:0; margin: 0; }

    .upper-header {
        z-index:10;
        background: $headerBgcolor;
        color: $basicTextcolor;
        border-bottom: $headerBoarder;
        position: relative;
        .header-inner {
            margin: auto;
            width: 1200px;
            @media screen and (max-width: 1200px) {
                width: 100%;
            }
            .header-tel {
                padding: 5px;
                @media screen and (max-width: 768px) {
                    float: none;
                    text-align: center;
                }
                div {
                    display:inline-block;
                    padding-right: 5px;
                    .ion-ios-telephone {
                        font-size: 14pt;
                        color: $darkgrey;
                    }
                    p {
                        font-size: 12pt;
                        margin: 5px 0 0;
                        font-weight: 700;
                    }
                }
            }
            .header-btn {
                padding: 0;
                .header-btn-box {
                    @media screen and (max-width: 768px){
                        float: none;
                        margin: 0 auto;
                    }
                    .header-sns {
                        div {
                            width: 50px;
                            border-left: $headerBoarder;
                            display: inline-block;
                            text-align: center;
                            height: 100%;
                            padding-top: 7px;
                            color: $iconcolor;

                            i {
                                vertical-align: middle;
                            }
                        }
                    }
                    .header-donate {
                        background: $orange;
                        padding: 10px 20px;
                        text-align: center;
                        p {
                            margin: 0;
                            color: #fff;
                            font-size: 11pt;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }

    .lower-header {
        padding: 25px 0;
        z-index: 10;
        .header-inner {
            position: relative;
            margin: auto;
            width: 1200px;
            @media screen and (max-width: 1200px) {
                width: 95%;
            }
            div { padding: 0; }
            .logo {
                a, a:hover { color: $basicTextcolor; }
                img {
                    margin-right: 10px;
                    width: 35%;
                    max-width: 110px;
                }
                span {
                    border-left: $headerBoarder;
                    padding-left: 10px;
                }
            }
            .navi {
                @media screen and (max-width: 990px) {
                    display: none;
                }
                ul {
                    margin-top: 5px;
                    padding:0;
                    li {
                        display: inline;
                        padding: 10px;
                        font-size: 10pt;
                        font-weight: 600;
                        text-transform: uppercase;
                        a, a:hover {
                            color: $basicTextcolor;

                        }
                    }
                }
                .dropdown-toggle {
                    cursor: pointer;
                }
                .dropdown-toggle::after {
                    display: none;
                }
                .dropdown-menu {
                    background: rgba(0, 0, 0, 0.5);
                    .dropdown-item {
                        cursor: pointer;
                        color: #fff;
                        padding: 10px;
                        font-size: 0.8em;
                        font-weight: 600;
                    }
                    .dropdown-item:hover {
                        background: none;
                        border-right: $orangethickborder;
                    }
                }
            }
            .menu-btn {
                @media screen and (min-width: 990px) {
                    display: none;
                }
                padding: 5px;
                position: absolute;
                top: 0;
                right: 0;
                .menu-toggle {
                    background: #fff;
                    border: none;
                    font-size: 1.5em;
                    outline: none;
                }
            }
        }
    }
    .menu-toggle-body {
        position: absolute;
        width: 100%;
        z-index: 1;
        background: #fff;
        text-transform: uppercase;
        font-size: 0.8em;
        a {
            width:100%;
            display: block;
            color: $basicTextcolor;
            padding: 6px 20px;
            border-top: $headerBoarder;
            .sub-menu {
                display: none;
                a {
                    padding-left: 40px;
                }
            }
        }

    }

</style>