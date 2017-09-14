<template>
    <footer>
        <div class="footer-inside">
            <div class="footer-upper">
                <div class="row">
                    <div class="footer-upper-headline col-xl-6 col-lg-12">
                        <h3>CHANGE THEIR WORLD. CHANGE YOURS. THIS CHANGES EVERYTHING.</h3>
                    </div>
                    <div class="footer-upper-link col-xl-6 col-lg-12">
                        <div class="link-body">
                            <div class="link-button">
                                <p>become volunteer</p>
                            </div>
                            <div class="link-bridge">
                                <div>
                                    <span>or</span>
                                </div>
                            </div>
                            <div class="link-button">
                                <p>donate for a cause</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-lower">
                <div class="footer-lower-inside">
                    <div class="row">
                        <div class="col-lg-3 col-md-12">
                            <div class="footer-small-title">
                                <h3 class="small-title">about charity</h3>
                            </div>
                            <div class="footer-small-desc">
                                <p>
                                    Charity vitae diam pulvinar, tempus dia aliquam tellus. Quisque mattis odio eu placerat luctus. Vivamus magna elit, ultrices non lacinia vel, tempor vitae tell Fusce sit amet sem sit amet.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12">
                            <div class="footer-small-title">
                                <h3 class="small-title">quick links</h3>
                            </div>
                            <div class="footer-small-desc">
                                <div class="row">
                                    <div class="col link-list">
                                        <ul>
                                            <li> > causes </li>
                                            <li> > projects </li>
                                            <li> > gallery </li>
                                        </ul>
                                    </div>
                                    <div class="col link-list">
                                        <ul>
                                            <li> > terms of use </li>
                                            <li> > disclaimer </li>
                                            <li> > privacy policy </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12">
                            <div class="footer-small-title">
                                <h3 class="small-title">newsletter signup</h3>
                            </div>
                            <div class="footer-small-desc">
                                <p>
                                    Select your newsletters, enter your email address, and click "Subscribe"
                                </p>
                                <div class="subscribe">
                                    <form action="">
                                        <input type="text" class="input-email" placeholder="Your Email">
                                        <input type="submit" class="submit" value="Go">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12">
                            <div class="footer-small-title">
                                <h3 class="small-title">contact us</h3>
                            </div>
                            <div class="footer-small-desc">
                                <p>
                                    Address: Address: 51 Sherbrooke W., Montreal, Quebec, Canada
                                </p>
                                <p>
                                    <span><i class="icon ion-android-call"></i></span> Phone: +1 514 000 0000
                                </p>
                                <p>
                                    <span><i class="icon ion-ios-email-outline"></i></span> Email: charity@charity.org
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-underbar">
                <div class="row justify-content-between">
                    <div class="copyright col-lg-6 col-md-12">
                        <p> Copyright © 2017. Designed by <span>WPlook Studio</span></p>
                    </div>
                    <div class="footer-icons col-lg-2 col-md-12">
                        <div class="icon-box">
                            <ul>
                                <li><i class="icon ion-social-facebook"></i></li>
                                <li><i class="icon ion-social-twitter"></i></li>
                                <li><i class="icon ion-social-googleplus"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

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
    $orangethinkborder: 2px solid #fa6f1c;

    .footer-inside {
        width: 100%;
        background: $basicTextcolor;
        .footer-upper {
            margin: 40px auto 20px;
            padding: 20px 0;
            color: #fff;
            width: 95%;
            @media screen and (min-width: 1212px) {
                max-width: 1200px;
            }
            .row {
                margin: 0;
                padding: 0;
            }
            .footer-upper-headline {
                padding-top: 40px;
                h3 {
                    text-transform: uppercase;
                    font-size: 1.6em;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-bottom: 40px;
                    @media screen and (max-width: 1200px){
                        text-align: center;
                        margin-bottom: 0;
                    }
                }
            }
            .footer-upper-link {
                padding-top: 40px;

                .link-body {
                    text-transform: uppercase;
                    float: right;
                    @media screen and (max-width: 1200px){
                        float: none;
                        padding-bottom: 40px;
                    }
                    text-align: center;
                    div {
                        display: inline-block;
                        @media screen and (max-width: 768px) {
                            display: block;
                            margin: 10px auto;
                            width: 60%;
                        }

                    }
                    .link-button {
                        border: $orangethinkborder;
                        color: $orange;
                        padding: 10px;
                        z-index: 10;
                        p {
                            margin: 0;
                            font-size: 0.9em;
                            font-weight: 600;
                        }
                    }
                    .link-bridge {
                        padding: 0;
                        color: #fff;
                        div {
                            display: inline-block;
                            span {
                                margin: 0;
                                padding: 10px;
                                font-size: 0.8em;
                                background: $darkgrey;
                                border-radius: 50%;
                            }
                        }
                        div::before, div::after {
                            @media screen and (max-width: 768px) {
                                display: none;
                            }
                            content: '';
                            display: inline-block;
                            vertical-align: middle;
                            background-color: $darkgrey;
                            width: 30px;
                            height: 1px;
                            padding:0;
                            margin: 0;
                        }
                    }
                }
            }
        }
        .footer-lower {
            background: $verydarkgrey url('../assets/images/footer-bg.png');
            padding: 80px 0;
            width: 100%;

            .footer-lower-inside {
                width : 95%;
                margin: 0 auto;
                @media screen and (min-width: 1212px) {
                    max-width: 1200px;
                }
                .row {
                    margin: 0;
                    padding: 0;
                }
                .footer-small-title {
                    padding: 10px;
                    h3 {
                        color: #fff;
                        font-size: 1rem;
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                    .small-title::after {
                        background-color: $orange;
                        display: block;
                        width: 40px;
                        height: 1px;
                        content: '';
                        padding: 0;
                        vertical-align: middle;
                        margin-top : 25px;
                    }
                }
                .footer-small-desc {
                    padding: 30px 5px;
                    p {
                        color: $lightgrey;
                        font-size: 0.8em;
                        line-height: 1.7;
                        letter-spacing: 0.5px;
                        span {
                            font-size: 1em;
                        }
                    }
                    .link-list {
                        padding: 0;
                        ul {
                            padding: 5px;
                            li {
                                padding: 8px 0;
                                list-style-type: none;
                                color: $darkgrey;
                                font-size: 0.8em;
                                text-transform: uppercase;
                                cursor: pointer;
                            }
                            li:hover {
                                color: $orange;
                            }
                        }
                    }
                    .subscribe {
                        .input-email {
                            font-size: 0.8em;
                            height: 40px;
                            width: 80%;
                            margin: 0;
                            padding: 10px;
                            border: none;
                        }
                        .submit {
                            display: inline-block;
                            background: $orange;
                            color: #fff;
                            border: none;
                            height: 40px;
                            width: 20%;
                            margin: 0;
                            float: right;
                        }
                    }
                }
            }
        }
        .footer-underbar {
            width: 100%;
            color: $lightgrey;
            @media screen and (max-width: 990px) {
                text-align: center;
            }
            .copyright {
                padding: 0;
                color: $lightgrey;
                font-size: 0.9em;
                p {
                    padding: 20px;
                    margin: 0;
                    span {
                        color: #fff;
                    }
                    span:hover {
                        color: $lightgrey;
                        cursor: pointer;
                    }
                }
            }
            .footer-icons {
                padding: 0;
                margin: 0;
                .icon-box {
                    float: right;
                    @media screen and (max-width: 990px) {
                        float: none;
                    }
                    ul {
                        padding: 20px;
                        margin: 0;
                        @media screen and (max-width: 990px) {
                            padding: 10px;
                        }
                        li {
                            display: inline;
                            list-style-type: none;
                            float: left;
                            padding: 0 10px;
                            @media screen and (max-width: 990px) {
                                float: none;
                            }
                        }
                    }
                }

            }
        }
    }
</style>