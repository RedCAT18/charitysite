<template>
    <div class="featured-news">
        <div class="container">
            <div class="featured-news-title">
                <h3>featured news</h3>
                <hr class="float-left"> <br/>
            </div>
            <div class="featured-news-body">
                <div id="carouselnewsControls" class="carousel slide" data-ride="carousel" data-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row justify-content-between">
                                <div class="news-first-image col-lg-7 col-md-12">
                                    <img class="d-block" src="../../assets/images/shutterstock_89663557-770x330.jpg" alt="First slide">
                                </div>
                                <div class="news-first-desc col-lg-5 col-md-12">
                                    <div class="news-first-title">
                                        <p>child care fundraising</p>
                                    </div>
                                    <div class="news-first-category row justify-content-start">
                                        <div>
                                            <i class="icon ion-folder"></i>
                                            <span>Child</span>
                                        </div>
                                        <div>
                                            <i class="icon ion-ios-calendar-outline"></i>
                                            <span>20/08/2015</span>
                                        </div>
                                    </div>
                                    <div class="news-first-detail">
                                        <p>
                                            Forth fruit beginning life likeness dry day from one rule it earth isn’t sea fourth. Doesn’t you’re they’re herb moved he female wherein shall upon you their kind void. Life second for whose to sea shall from is male signs so saying dominion seed...
                                        </p>
                                        <div class="read-more">
                                            <div class="btn read-more-button"><p>Read more</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row justify-content-between">
                                <div class="news-first-image col-lg-7 col-md-12">
                                    <img class="d-block" src="../../assets/images/shutterstock_104714984-770x330.jpg" alt="Second slide">
                                </div>
                                <div class="news-first-desc col-lg-5 col-md-12">
                                    <div class="news-first-title">
                                        <p>featured news</p>
                                    </div>
                                    <div class="news-first-category row justify-content-start">
                                        <div>
                                            <i class="icon ion-folder"></i>
                                            <span>Child</span>
                                        </div>
                                        <div>
                                            <i class="icon ion-ios-calendar-outline"></i>
                                            <span>20/08/2015</span>
                                        </div>
                                    </div>
                                    <div class="news-first-detail">
                                        <p>
                                            Forth fruit beginning life likeness dry day from one rule it earth isn’t sea fourth. Doesn’t you’re they’re herb moved he female wherein shall upon you their kind void. Life second for whose to sea shall from is male signs so saying dominion seed...
                                        </p>
                                        <div class="read-more">
                                            <div class="btn read-more-button"><p>Read more</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="upper-arrow row">
                        <a class="col-6 right-border" href="#carouselnewsControls" role="button" data-slide="prev">
                            <i class="icon ion-chevron-left"></i>
                        </a>
                        <a class="col-6" href="#carouselnewsControls" role="button" data-slide="next">
                            <i class="icon ion-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="latest-news">
                <div class="latest-news-title">
                    <span>latest news</span>
                </div>
                <div class="latest-news-body">
                    <div class="row">
                        <div class="news-body-thumb col-lg-3 col-md-12">
                            <div class="row">
                                <div class="col-4 latest-thumbnail">
                                    <img src="../../assets/images/shutterstock_79175554-100x85.jpg" width="80" alt="latest news thumbnail">
                                </div>
                                <div class="col-7 latest-desc">
                                    <h4>Awesome Post Format Gallery</h4>
                                    <span><i class="icon ion-ios-calendar-outline"></i></span><span>19/06/2015</span>
                                </div>
                            </div>
                        </div>
                        <div class="news-body-thumb col-lg-3 col-md-12">
                            <div class="row">
                                <div class="col-4 latest-thumbnail">
                                    <img src="../../assets/images/shutterstock_122692291-100x85.jpg" width="80" alt="latest news thumbnail">
                                </div>
                                <div class="col-7 latest-desc">
                                    <h4>Post Format Standard</h4>
                                    <span><i class="icon ion-ios-calendar-outline"></i></span><span>10/06/2015</span>
                                </div>
                            </div>
                        </div>
                        <div class="news-body-thumb col-lg-3 col-md-12">
                            <div class="row">
                                <div class="col-4 latest-thumbnail">
                                    <img src="../../assets/images/video-pf-100x85.jpg" width="80" alt="latest news thumbnail">
                                </div>
                                <div class="col-7 latest-desc">
                                    <h4> Awesome Post Format Video</h4>
                                    <span><i class="icon ion-ios-calendar-outline"></i></span><span>19/05/2015</span>
                                </div>
                            </div>
                        </div>
                        <div class="news-body-thumb col-lg-3 col-md-12">
                            <div class="row">
                                <div class="col-4 latest-thumbnail">
                                    <img src="../../assets/images/shutterstock_76512511-100x85.jpg" width="80" alt="latest news thumbnail">
                                </div>
                                <div class="col-7 latest-desc">
                                    <h4> Awesome Post</h4>
                                    <span><i class="icon ion-ios-calendar-outline"></i></span><span>01/05/2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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


    .featured-news {
        width: 95%;
        margin: auto;
        .container {
            padding: 0;
            .featured-news-title {
                margin-top: 60px;
                margin-bottom: 20px;
                h3 {
                    text-transform: uppercase;
                    font-size: 1.3em;
                    font-weight: 700;
                    margin: 0;
                }
                hr {
                    border-top: $lightOrangeBorder;
                    width: 40px;
                }
            }
            .featured-news-body {
                margin-bottom: 40px;
                .news-first-image {
                    padding: 0;
                    margin: 0 0 20px;
                    img {
                        width: 100%;
                        max-width: 700px;
                    }
                }
                .news-first-desc {
                    @media screen and (max-width: 990px) {
                        padding: 0;
                    }
                    .news-first-title {
                        text-transform: uppercase;
                        font-size: 11pt;
                        font-weight: 600;
                        letter-spacing: 2px;
                        color: $basicTextcolor;
                        text-align: left;
                    }
                    .news-first-category {
                        div {
                            padding: 0;
                            margin-right: 10px;
                            color: $darkgrey;
                            i { padding: 5px; }
                            span {
                                font-size: 9.5pt;
                                letter-spacing: 1px;
                            }
                        }
                    }
                    .news-first-detail {
                        padding-top: 20px;
                        p {
                            margin: 0;
                            font-size: 10.2pt;
                            text-align: justify;
                        }
                        .read-more {
                            margin-top: 25px;
                            .read-more-button {
                                border : 2px solid $orange;
                                border-radius: 0;
                                color: $orange;
                                p {
                                    font-size: 10pt;
                                    font-weight: 600;
                                    margin: 0;
                                    padding: 5px;
                                    text-transform: uppercase;
                                }
                            }
                        }
                    }
                }
                .upper-arrow {
                    border: 1px solid $darkgrey;
                    position: absolute;
                    top: -60px;
                    right: 0;
                    width: 80px;
                    height: 40px;
                    a {
                        padding-top: 6px;
                        color: $basicTextcolor;
                        text-align: center;
                        font-size: 12pt;
                    }
                    .right-border {
                        border-right: 1px solid $darkgrey;
                    }
                }

            }
            .latest-news {
                border-top: $headerBoarder;
                .latest-news-title {
                    top: -12px;
                    position: relative;
                    margin-bottom: 20px;
                    span {
                        background-color: #fff;
                        text-transform: uppercase;
                        font-size: 12pt;
                        font-weight: 800;
                        text-align: left;
                        padding: 10px;
                    }
                }
                .latest-news-body {
                    padding: 0 10px;
                    .news-body-thumb { padding: 10px 0; }
                    .row { padding: 0; margin: 0; }
                    .col-3 { padding: 0; margin: 0; }
                    .latest-thumbnail {
                        padding: 0;
                    }
                    .latest-desc {
                        padding: 0 10px;
                        h4 {
                            margin-top: 8px;
                            font-size: 11pt;
                            text-transform: uppercase;
                            font-weight: 600;
                            letter-spacing: 1px;
                        }
                        span {
                            padding-right : 10px;
                            color: $darkgrey;
                            font-size: 10.5pt;
                        }
                    }
                }
            }
        }
    }

</style>