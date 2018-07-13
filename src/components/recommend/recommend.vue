<template>
  <div class="common_wrapper">
    <CommonHeader></CommonHeader>
    <Carousel></Carousel>
    <div class="recommend_list">

    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/commonHeader/commonHeader'
  import Carousel from 'base/carousel/carousel'
  // import {getRecommend} from 'api/recommend'

  export default {
    name: 'recommend',
    components: {
      CommonHeader,
      Carousel
    },
    created() {
      // getRecommend()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
