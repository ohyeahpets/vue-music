<template>
  <div class="list">
    <div class="songs-list-wrapper">
      <div class="songs-list">
        <ul>
          <li class="item" v-for="item in songsList" v-if="songsList.length>0">
            <div class="content">
              <h2 class="name">{{item.musicData.songname}}</h2>
              <p class="desc">{{handleSingersName(item.musicData.singer)}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'songs-list',
		props:{
			songsList:{
				type:Array,
				defaul:[]
			}
		},
		methods:{
			handleSingersName(singers) {
				let arr=[]
				if(singers.length===1){
					return singers[0].name
				}else{
					singers.forEach((index,item)=>{
						arr.push(item.name)
					})
					return arr.join('')
				}
			}
		}
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .list
    .songs-list-wrapper
      padding: 20px 30px
      .songs-list
        .item
          display flex
          align-items center
          height 64px
          font-size $font-size-medium
          .content
            width 100%
            line-height 20px
            overflow hidden
            .name
              margin-bottom 4px
              color #fff
            .desc
              color: hsla(0,0%,100%,.3)
              no-wrap()


</style>
