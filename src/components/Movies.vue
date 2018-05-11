<template>
  <div class="cat-movie">
    <div class="cat-nav">
      <ul class="cat-navBar">
        <li><a href="#">正在热映</a>
        </li>
        <li><a href="#">即将上映</a></li>
        <li><a href="#">经典电影</a></li>
      </ul>
    </div>
    <div class="container">
      <div class="cat-moviesList">
        <!--电影类型-->
        <div class="moviesList-type">
           <div class="title-tpe">
             类型:
           </div>
          <div class="title-all">
            <a href="#">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="#" class="title-list" v-for="(item,index) in moviesType"
               :key="index" >
              {{item}}
            </a>
          </div>
        </div>
        <!--电影区域-->
        <div class="moviesList-type">
          <div class="title-tpe">
            区域:
          </div>
          <div class="title-all">
            <a href="#" class="">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="#" class="title-list" v-for="(item,index) in region"
               :key="index">
               <p @click="changeColor":class="{active:isChangeColor}">{{item}}</p>
            </a>
          </div>
        </div>
        <!--电影年代-->
        <div class="moviesList-type">
          <div class="title-tpe">
            年代:
          </div>
          <div class="title-all">
            <a href="#">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="#" class="title-list" v-for="(item,index) in moviesType"
               :key="index" >
              {{item}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['getData'],
    data () {
      return {
        moviesList: this.getData,
        region: ['大陆', '美国', '韩国', '日本', '中国香港', '中国台湾', '泰国', '印度',
          '法国', '英国', '俄罗斯', '西班牙', '德国', '澳大利亚', '其他'],
        isChangeColor: false
      }
    },
    computed: {
      moviesType () {
        let movies = this.moviesList
        let allType = []
        let moviesObj = {}
        let box = []
        let moviesNum = []
        for (let i = 0; i < movies.length; i++) {
          moviesNum.push(movies[i].cat.split(','))
          box = [].concat.apply([], moviesNum) // 多维数组合成一维数组
          for (let j = 0; j < box.length; j++) {
            if (!moviesObj[box[j]]) {
              allType.push(box[j])
              moviesObj[box[j]] = 666
            }
          }
        }
        return allType
      }
    },
    methods: {
      changeColor () {
        this.isChangeColor =!this.isChangeColor
      }
    }
  }
</script>
<style spoted lang="stylus">
  .cat-movie
    position relative
    width 100%
    height 60px
    text-align center
    min-width 1200px
    .cat-nav
      width 100%
      height 100%
      background-color #47464a
      position relative
      .cat-navBar
        display inline-block
        overflow hidden
        margin 0 auto
        li
          display inline-block
          line-height 60px
          &:active
            border-top none
          a
            display block
            padding 0 40px
            height 60px
            width 100%
            text-decoration none
            font-size 16px
            color #999
            line-height 60px
            text-align center
            &:hover
              color #fff
            &:active::before
              content ""
              display inline-block
              border-bottom 11px solid #fff
              border-right 8px solid transparent
              border-left 8px solid transparent
              border-top none
              position absolute
              top 50px
              margin-left 20px
            &:active
              color #ef4238
    .cat-moviesList
      width 1120px
      margin 40px auto
      overflow hidden
      border 1px solid #e5e5e5
      padding 0 20px
      .moviesList-type
        height 74px
        width 100%
        border-bottom  1px dashed #e5e5e5
        padding 5px 0
        font-size 0
        position relative
        text-align left
        &:last-child
          border none
        .title-tpe
          display inline-block
          height 24px
          line-height 24px
          color #999
          font-size 14px
          position absolute
          left 5px
        .title-all
          position absolute
          font-size 14px
          left 45px
          top 6px
          text-align center
          line-height 28px
          border-radius 10px
          width 60px
          height 26px
          a
            text-decoration none
            color #333
            &.active
              background-color #f34d41
              color #fff
        .list-wrapper
          display block
          margin-left 90px
          .title-list
            display inline-block
            font-size 14px
            color #333
            text-decoration none
            margin 1px 15px 4px 16px
            width 60px
            line-height 26px
            hieght 28px
            text-align center
            border-radius 15px
            &.active
              background-color #f34d41
              color #fff
</style>
