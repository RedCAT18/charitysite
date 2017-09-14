<template>
    <div class="full-slide">
        <div id="carouselFullSlide" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../../assets/images/shutterstock_89663557.jpg" width="1800" height="auto" alt="First slide">
                    <div class="first-slide-content animated fadeInDown">
                        <h3>We Can Change It Together <br/>
                            Lets Do It Now!</h3>
                        <hr class="float-left"><br/>
                        <p>Integer sit amet augue iaculis, ultricies justo nec, <br/>
                            commodo nisi. Classtaciti sociosqu.</p>
                        <div class="slide-button">
                            <div class="row">
                                <div class="button">
                                    <p>Create a site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../../assets/images/shutterstock_104714984.jpg" width="1800" height="auto" alt="First slide">
                    <div class="second-slide-content animated fadeInUp">
                        <div class="row">
                            <div class="second-slide-title col-lg-7 col-md-12">
                                <h3>Send Children to school</h3>
                                <p>Integer sit amet augue iaculis, ultricies justo nec, commodo nisi. Class
                                    taciti sociosqu ad litora torquent per conubia nostra</p>
                            </div>
                            <div class="second-slide-button col-lg-5 col-md-12">
                                <div  class="button-lid">
                                    <div><p>urgent cause</p></div>
                                </div>
                                <div class="upper-button row">
                                    <div class="col-6 right-border">
                                        <p>raised</p>
                                        <h3>270 usd</h3>
                                    </div>
                                    <div class="col-6">
                                        <p>to go</p>
                                        <h3>23,730 usd</h3>
                                    </div>
                                </div>
                                <div class="lower-button col-12"><p>donate now</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselFullSlide" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselFullSlide" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
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

    .full-slide{
        .carousel {
            .carousel-inner {
                overflow: hidden;
                position: relative;
                img {
                    object-fit: cover;
                    min-height: 440px;
                    display: block;
                    margin-top: -60px;
                }
                .first-slide-content {
                    z-index: 1;
                    position: absolute;
                    top: 35%;
                    @media screen and (max-width: 768px) {
                        top: 20%;
                        width: 90%;
                    }
                    background-color: $orange;
                    color: #fff;
                    margin-left: 5vw ;
                    padding: 30px;
                    h3 {
                        text-transform: uppercase;
                        line-height: 1.4;
                        font-size: 1.5em;
                        font-weight: 600;
                        letter-spacing: 1px;
                    }
                    hr {
                        border-top: $lightOrangeBorder;
                        width: 40px;
                    }
                    p {
                        clear:both;
                        font-size: 0.9em;
                        text-transform: uppercase;
                    }
                    .slide-button {
                        .button {
                            text-align: center;
                            border: 2px solid #fff;
                            p {
                                margin: 0;
                                padding: 8px;
                                font-size: 10pt;
                            }
                        }
                    }
                }
                .second-slide-content {
                    z-index: 1;
                    position: absolute;
                    top: 63%;
                    background-color: $orange;
                    @media screen and (max-width: 768px) {
                        top: 15%;
                        width: 90%;
                        left: 5%;
                    }
                    color: #fff;
                    width: 100%;
                    min-height: 195px;
                    text-transform: uppercase;
                    padding-right: 8vw;
                    @media screen and (max-width: 990px) {
                        padding-right: 0;
                    }
                    .row {
                        .second-slide-title {
                            padding: 30px 8vw;
                            h3 {
                                text-transform: uppercase;
                                line-height: 1.3;
                                font-size: 1.5em;
                                @media screen and (max-width: 768px){
                                    font-size: 5.2vw;
                                    letter-spacing: 0.5px;
                                    padding-bottom: 10px;
                                }
                                font-weight: 600;
                                letter-spacing: 1px;
                                margin-top: 10px;
                                margin-right: 20px;
                                margin-bottom: 0;
                            }
                            p {
                                font-weight: 400;
                                font-size: 0.8em;
                                @media screen and (max-width: 768px) {
                                    font-size: 2.7vw;
                                    letter-spacing: 0.5px;
                                }
                                letter-spacing: 1px;
                                line-height: 1.6;
                                margin:0;
                            }
                        }
                        .second-slide-button {
                            background: $lightorange;
                            text-align: center;
                            height: 100%;
                            width: 100%;
                            max-height: 195px;
                            padding: 0;
                            position: relative;
                            .button-lid {
                                position: absolute;
                                top: -20px;
                                z-index: 1;
                                width: 100%;
                                div {
                                    background: #fff;
                                    padding: 10px;
                                    margin: 0 auto;
                                    width: 140px;
                                    p {
                                        margin: 0;
                                        letter-spacing: 1px;
                                        color: $basicTextcolor;
                                        font-size: 9pt;
                                        font-weight: 600;

                                    }
                                }
                            }
                            .upper-button {
                                height: 70%;
                                .right-border {
                                    border-right: $orangeborder;
                                }
                                div {
                                    padding: 30px 10px;
                                    p {
                                        color: $brown;
                                        font-weight: 500;
                                        @media screen and (max-width: 768px) {
                                            font-size: 2.8vw;
                                        }
                                    }
                                    h3 {
                                        @media screen and (max-width: 768px) {
                                            font-size: 5vw;
                                        }
                                        font-weight: 700;
                                    }
                                }

                            }
                            .lower-button {
                                height: 30%;
                                border-top: $orangeborder;
                                display: block;
                                background: $lightorange;
                                p {
                                    margin: 0;
                                    padding: 15px;
                                    @media screen and (max-width: 768px) {
                                        font-size: 3vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .carousel-control-prev, .carousel-control-next {
                width: 5%;
            }
        }
    }
</style>