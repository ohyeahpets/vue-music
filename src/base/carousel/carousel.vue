<template>
  <div class="slider-wrapper">
    <swiper :options="swiperOption" v-if="carouselData.length>0">
      <!-- slides -->
      <swiper-slide :key="item.id" v-for="item in carouselData"><img
        @click="jumpOut(item.linkUrl)" width="100%"
        :src="item.picUrl"
        alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      carouselData: {
        type: Array,
        default: []
      }
    },
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          observer: true,
          observeParents: true,
          direction: 'horizontal',
          autoplay: true,
          paginationClickable: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    methods: {
      jumpOut(linkUrl) {
        location.href = linkUrl
      }
    }
  }
</script>

<style lang="stylus">
  .slider-wrapper .swiper-container
    height 0
    padding-bottom 40% !important

  .slider-wrapper .swiper-pagination-bullet-active
    width 20px
    border-radius 5px
    background hsla(0, 0%, 100%, .8)

  .slider-wrapper .swiper-pagination-bullet
    background hsla(0, 0%, 100%, .5)

  .swiper-slide
    padding-bottom 40%
</style>
