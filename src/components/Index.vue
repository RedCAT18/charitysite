<template>
    <div class="body">
        <app-slide></app-slide>
        <app-news></app-news>
    </div>
</template>
<script>
    import Slide from './index/Slide.vue';
    import News from './index/News.vue';
    export default {
        components : {
            appSlide : Slide,
            appNews : News
        }
    }
</script>

<style lang="scss">

</style>