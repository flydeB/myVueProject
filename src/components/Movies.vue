<template>
  <div class="cat-movie">
    <!--导航条-->
    <div class="cat-nav">
      <div class="cat-navBar">
        <a href="#" class="navBar-list" @click="changeColor">
          <span class="navBar-title changeStyle">正在上映</span>
        </a>
        <a href="#" class="navBar-list btn-soon" @click="changeColor">
          <span class="navBar-title">即将上映</span>
        </a>
        <a href="#" class="navBar-list" @click="changeColor">
          <span class="navBar-title">经典影片</span>
        </a>
      </div>
    </div>
    <div class="container">
      <!--题目列表-->
      <div class="cat-moviesList">
        <!--电影类型-->
        <div class="moviesList-type">
           <div class="title-type">
             类型:
           </div>
          <div class="title-all">
            <a href="javascript:;" :class="{active:changeType}">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="javascript:;" class="title-list" v-for="(item,index) in moviesType"
               :key="index"
               @click="changeType">
              {{item}}
            </a>
          </div>
        </div>
        <!--电影区域-->
        <div class="moviesList-type">
          <div class="title-type">
            区域:
          </div>
          <div class="title-all">
            <a href="javascript:;" class="active">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="javascript:;" class="title-list" v-for="(item,index) in region"
               :key="index"
               @click="changeType">
            {{item}}
            </a>
          </div>
        </div>
        <!--电影年代-->
        <div class="moviesList-type">
          <div class="title-type">
            年代:
          </div>
          <div class="title-all">
            <a href="#" class="active">全部</a>
          </div>
          <div class="list-wrapper">
            <a href="javascript:;" class="title-list" v-for="item in 16"
               :key="item"
               @click="changeType" >
              {{2019-item}}
            </a>
          </div>
        </div>
      </div>
      <!--排序-->
      <div class="cat-sort">

        <span class="sort-content">
          <i class="sortCircleIcon">
            <img src="../common/img/sortCircleIcon.png">
          </i>
          <span class="sort-text">按热门排序</span>
        </span>

        <span class="sort-content">
          <i class="sortCircleIcon">
            <img src="../common/img/sortCircleIcon_1.png">
          </i>
          <span class="sort-text">按时间排序</span>
        </span>

        <span class="sort-content">
          <i class="sortCircleIcon">
            <img src="../common/img/sortCircleIcon_1.png">
          </i>
          <span class="sort-text">按评价排序</span>
        </span>

      </div>
      <!--展示电影-->
      <div class="movieList">
        <div class="hot-movie ">
          <ul class="movie-item">
            <li v-for="(item,index) in moviesList " :key="index" class="movie-list">
              <div class="movie-info">
                <img src="../common/img/is3D.png" class="show3D"
                     v-if="item.is3d">
                <div class="movie-mig">
                  <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                  <div class="movie-text">
                    <div class="movie-title">{{item.nm}}</div>
                    <span class="movie-score">
                      {{item.sc?item.sc:"无..."}}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--页面按钮-->
        <div class="cat-page">
          <ul class="cat-page-item">
            <li>1</li>
            <li>2</li>
            <li>...</li>
            <li>下一页</li>
          </ul>
        </div>
      </div>
    </div>
    <!--脚部组件-->
    <div class="cat-footer clearfix">
      <cat-footer></cat-footer>
    </div>
  </div>
</template>
<script>
  import catFooter from './footer.vue'
  export default {
    props: ['getData'],
    data () {
      return {
        moviesList: this.getData,
        region: ['大陆', '美国', '韩国', '日本', '中国香港', '中国台湾', '泰国', '印度',
          '法国', '英国', '俄罗斯', '西班牙', '德国', '澳大利亚', '其他']
      }
    },
    components: {
      catFooter
    },
    created () {
    this.pageChange()
    },
    computed: {
      // 出重筛选出所有的电影类型
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
      },
      btnSoon () {
        let $btnSoon = $('.btn-soon')
        let moviesList = this.moviesList
        $btnSoon.click(function () {
          for (let i = 0; i < moviesList.length; i++) {
            if (moviesList[i].sc === 0) {
              moviesList.splice(0, moviesList.length) // 清空数组
              moviesList.push(moviesList[i])
            }
          }
        })
          return moviesList
      }
    },
    methods: {
      // 导航条改变字体的样式
      changeColor () {
        $(function () {
          $('.navBar-title').click(function () {
            $(this)
              .addClass('changeStyle')
              .parent()
              .siblings()
              .children()
              .removeClass('changeStyle')
          })
        })
     },
      // 点击切换电影类型的active
      changeType () {
        $(function () {
          $('.title-list').click(function () {
            $(this)
              .addClass('active')
              .siblings()
              .removeClass('active')
              .parent()
              .siblings()
              .children()
              .removeClass('active')
          })
          $('.title-all a').click(function () {
            $(this)
              .addClass('active')
              .parent()
              .siblings()
              .children()
              .removeClass('active')
          })
        })
      },
      // 点击下一页按钮
      pageChange () {
        $(function () {
          $('.cat-page-item li').click(function () {
            $(this).css({
              'background': '#f03d37',
              'color': '#fff'
            }).siblings().css({
              'background': '#fff',
              'color': '#333'
            })
            $('.hot-movie').css('height', 'auto')
          })
        })
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
        .navBar-list
          display inline-block
          line-height 60px
          padding 0 40px
          text-decoration none
          color #999
          .navBar-title
            display inline-block
            font-size 16px
            &:hover
              color #fff
            &.changeStyle
              color #ef4238
              display inline-block
              &:before
                content ""
                display inline-block
                border-bottom 11px solid #fff
                border-right 8px solid transparent
                border-left 8px solid transparent
                border-top none
                position absolute
                top 50px
                margin-left 20px

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
        .title-type
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
            display inline-block
            text-decoration none
            color #333
            height 28px
            width 50px
            border-radius 15px
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
    .cat-sort
      text-align left
      margin 30px 0
      .sort-content
       display inline-block
       width 120px
       text-align left
       .sortCircleIcon
         display inline-block
         cursor pointer
         line-height 16px
         img
           vertical-align top
       .sort-text
         display inline-block
         line-height 16px
         vertical-align top
    .movieList
      display block
      width 100%
      .hot-movie
        width 100%
        position relative
        left -10px
        height 1450px
        overflow hidden
        .movie-item
          width 100%
          .movie-list
            display inline-block
            margin-right 25px
            margin-bottom 70px
            .movie-info
              position relative
              width 162px
              border 1px solid #ccc
              .show3D
                position absolute
                left -2px
                top 5px
              .movie-mig
                width 160px
                height 220px
              .movie-text
                position relative
                width 150px
                height 22px
                top -30px
                left 8px
                text-align center
                z-index 50
                .movie-title
                  position absolute
                  float left
                  width 115px
                  height 22px
                  font-size 16px
                  font-weight 700
                  color #555
                  line-height 22px
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  top 40px
                .movie-score
                  position absolute
                  float right
                  color #ffb400
                  height 22px
                  font-size 18px
                  line-height 22px
                  font-style italic
                  top 70px
                  right 50%

              .buy-tickets
                display block
                width 160px
                height 39px
                text-align center
                color #333
                text-decoration none
                &:hover
                  background-color red
                  color #fff
      .cat-page
        position relative
        height 30px
        top 30px
        .cat-page-item
          width 300px
          height 100%
          position absolute
          left 50%
          li
            display inline-block
            height 30px
            width 30px
            border 1px solid #999
            line-height 30px
            text-align center
            margin-right 20px
            color #333
            font-size 14px
            cursor pointer
            &:hover
              border 1px solid #f03d37
            &:last-child
              width 60px
            &:first-child
              background #f03d37
              color #fff
    .cat-footer
      width 100%
      margin-top 50px
      padding-top 10px
      height 180px
      overflow hidden
</style>
