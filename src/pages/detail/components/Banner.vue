<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_600x330_7e602298.jpg" alt="">
    <div class="banner-info" >
      <div class="banner-title">
        大连圣亚海洋世界（AAAA景区）
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe60e;</span>39
      </div>
    </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary"
  @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
  export default{
    name:'DetailBanner',
    data(){
      return {
        showGallary:false,
        imgs:['http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_r_800x800_467fd4a0.jpg',
          'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_r_800x800_467fd4a0.jpg']
      }
    },
    components:{
      CommonGallary
    },
    methods:{
      handleBannerClick(){
        this.showGallary = true
      },
      handleGallaryClose(){
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    color:#fff
    .banner-img
      width:100%
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      background-image:liner-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.2))
      .banner-title
        flex:1
        font-size:.32rem
        padding:0 .2rem
      .banner-number
        margin-top:.14rem
        padding:0 .4rem
        line-height:.32rem
        height:.32rem
        border-radius:.2rem
        background:rgba(0,0,0,.8)
        font-size:.24rem
        .banner-icon
          font-size:.24rem
          margin-right:.15rem
</style>
