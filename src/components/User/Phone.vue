<template>
    <option :value="number">{{phone}}</option>
</template>

<script>
    export default {
        props: ['phone'],
        data(){
            return {
                number : this.phone
            }
        }

    }
</script>

<style lang="scss">
</style>