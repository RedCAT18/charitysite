<template>
    <div class="detailpage-upperside">
        <div class="upperside-box">
            <h3>{{page.name}}</h3>
            <div class="box-inside-detail">
                <span class="orange">home</span><span class="lightgrey">::</span><span>{{page.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['page'],
    }
</script>

<style lang="scss">

    $beige : #dfd5cc;
    $lightgrey: #a6a6a9;
    $verylightgrey: #f3f3f3;
    $basicTextcolor: #000;
    $orange: #fa6f1c;
    $highlight: #fcfca8;

    .detailpage-upperside {
        background: $beige;
        color: #fff;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        .upperside-box {
            margin: 20px auto;
            max-width: 1200px;
            @media screen and (max-width: 1212px){
                width: 95%;
            }
            h3 {
                text-transform: uppercase;
                font-weight: 700;
                font-size: 1.6em;
                letter-spacing: 1.5px;
            }
            .box-inside-detail {
                width: 220px;
                padding: 10px;
                text-align: center;
                background: #fff;
                span {
                    padding: 0 5px;
                    font-weight: 600;
                    font-size: 0.75em;
                    text-transform: uppercase;
                    color: $basicTextcolor;
                    letter-spacing: 0.5px;
                }
                .orange { color: $orange; }
                .lightgrey { color: $lightgrey; }
            }
        }
    }
</style>