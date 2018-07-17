<template>
  <div class="loading-container">
    <div class="loading">
      <img width="24" height="24" src="./loading.gif" alt="">
      <p class="desc">{{loadingDesc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loadingDesc: {
        type: String,
        default: '正在载入...'
      }
    },
    name: 'loading'
  }
</script>

<style lang="stylus" scoped>
  .loading-container
    position absolute
    top 50%
    transform translateY(-50%)
    width 100%
    .loading
      width 100%
      text-align center
      .desc
        line-height: 20px;
        font-size: 12px;
        color: hsla(0,0%,100%,.5);
</style>
