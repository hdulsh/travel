<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
         <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'>
         </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'HomeWeekend',
    data() {
      return{
        recommendList:[{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1508/86/bda18a3a88e77bae70157d40ba14b6b1.water.jpg_640x276_f4caa389.jpg',
          title:'杭州海底世界',
          desc:'仿佛身处浩瀚神奇的海底深处'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1508/86/bda18a3a88e77bae70157d40ba14b6b1.water.jpg_640x276_f4caa389.jpg',
          title:'杭州海底世界',
          desc:'仿佛身处浩瀚神奇的海底深处'
        },{
          id:'003',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1508/86/bda18a3a88e77bae70157d40ba14b6b1.water.jpg_640x276_f4caa389.jpg',
          title:'杭州海底世界',
          desc:'仿佛身处浩瀚神奇的海底深处'
        }]
      }


    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl";
  .title
    line-height:.8rem
    background:#eee
    text-indent:.2rem
    margin-top:.2rem
  .item-img-wrapper
    height:0
    overflow:hidden
    padding-bottom:33%
    .item-img
      width:100%
  .item-info
    padding:.1rem
    .item-title
      line-height:.54rem
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color:#ccc
      ellipsis()

</style>
