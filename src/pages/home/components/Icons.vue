<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" style="position: relative"
             v-for="item of page"
            :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>


</template>

<script>
  export default{
    name:'HomeIcons',
    props:{
      list:Array
    },
    data(){
      return {
        swiperOption:{
          autoplay:false
        }
      }
    },

    //    data(){
//      return {
//        iconList:[{
//          id:'001',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
//          desc:'景点门票'
//        },{
//          id:'002',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'003',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'004',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'005',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'006',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'007',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'008',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        },{
//          id:'009',
//          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//          desc:'一日游'
//        }]
//      }
//    },
    computed:{
      pages (){
        const  pages =[]
        this.list.forEach((item,index)=>{
          const page = Math.floor(index/8)
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  @import "~styles/mixins.styl";

    .icons >>>.swiper-container
      height:0
      /*background:green*/
      padding-bottom:50%
    .icons
      margin-top:.1rem
      .icon

        overflow:hidden
        width:25%
        height:0
        float:left
        padding-bottom:25%
        /*background:red*/
        .icon-img
          position:absolute
          top:0
          left:0
          right:0
          bottom:.44rem
          /*background:blue*/
          box-sizing:border-box
          padding:.1rem
          .icon-img-content
            height:100%
            display:block
            margin:0 auto
        .icon-desc
            position:absolute
            left:0
            right:0
            bottom:0
            height:.44rem
            line-height:.44rem
            color:$darkTextColor
            text-align:center
            ellipsis()
</style>
