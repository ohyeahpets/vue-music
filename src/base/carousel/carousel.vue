<template>
  <div class="slider-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide><img width="100%" src="./300107.jpg" alt=""></swiper-slide>
      <swiper-slide><img width="100%" src="./301136.jpg" alt=""></swiper-slide>
      <swiper-slide><img width="100%" src="./301143.jpg" alt=""></swiper-slide>
      <swiper-slide><img width="100%" src="./301645.jpg" alt=""></swiper-slide>
      <swiper-slide><img width="100%" src="./301861.jpg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          observer: true,
          observeParents: true,
          direction: 'horizontal',
          autoplay: 3000,
          paginationClickable: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        carouselData: []
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
</style>
