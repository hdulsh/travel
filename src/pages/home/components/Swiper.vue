<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default{
    name: 'HomeSwiper',
    data (){
      return {
        swiperOption :{
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
        }],
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff !important
  .wrapper
    overflow:hidden
    background:#eee
    width:100%
    height: 0
    padding-bottom:27%
    .swiper-img
      width: 100%
</style>
