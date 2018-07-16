<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from 'components/commonHeader/commonHeader'

  export default {
    components: {
      CommonHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  #app
    color: $color-theme
</style>
