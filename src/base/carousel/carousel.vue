<template>
  <div class="slider-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide :key="item.id" v-for="item in carouselData"><img width="100%" :src="item.picUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
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
        },
        carouselData: [
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=4124273&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/300107.jpg',
            id: 16504
          },
          {
            linkUrl: 'http://y.qq.com/m/act/sfhd/152.html?ADTAG=banner&openinqqmusic=1',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/301645.jpg',
            id: 16554
          },
          {
            linkUrl: 'https://y.qq.com/m/act/sfhd/151.html?ADTAG=jdt',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/301136.jpg',
            id: 16537
          },
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=001ENaAD3DwMkl',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/301861.jpg',
            id: 16553
          },
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=003nlRrP1C4A74',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/301143.jpg',
            id: 16545
          }
        ]
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
