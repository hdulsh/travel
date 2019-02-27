<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info" >
      <div class="banner-title">
        {{this.sightName}}
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe60e;</span>{{this.bannerImgs.length}}
      </div>
    </div>
  </div>
  <fade>
    <common-gallary :imgs="bannerImgs" v-show="showGallary"
    @close="handleGallaryClose"></common-gallary>
  </fade>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
  export default{
    name:'DetailBanner',
    props:{
      sightName:String,
      bannerImg:String,
      bannerImgs:Array
    },
    data(){
      return {
        showGallary:false,
      }
    },
    components:{
      CommonGallary,
      Fade
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
