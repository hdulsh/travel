<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>

        <router-link tag="li" class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/'+item.id">
          <img class="item-img" :src='item.imgUrl'>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>

    </ul>
  </div>
</template>

<script>
  export default{
    name:'HomeRecommend',
    props:{
      list:Array
    },
//    data() {
//      return{
//        recommendList:[{
//          id:'001',
//          imgUrl:'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
//          title:'杭州海底世界',
//          desc:'仿佛身处浩瀚神奇的海底深处'
//        },{
//          id:'002',
//          imgUrl:'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
//          title:'杭州海底世界',
//          desc:'仿佛身处浩瀚神奇的海底深处'
//        },{
//          id:'003',
//          imgUrl:'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
//          title:'杭州海底世界',
//          desc:'仿佛身处浩瀚神奇的海底深处'
//        }]
//      }


//    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl";
  .recommend-title
    line-height:.8rem
    background:#eee
    text-indent:.2rem
    margin-top:.2rem
  .item
    display:flex
    height:1.9rem
    /*background:red*/
    overflow:hidden
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width: 0
      .item-title
        line-heiht:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color:#ccc
        ellipsis()
      .item-button
        line-height:.44rem
        margin-top:.2rem
        background:#ff9300
        padding:0 .2rem
        border-radius: .6rem
        color:#fff
</style>
