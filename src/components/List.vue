<template>
    <div class="cat-moviesList">
      <header-nav></header-nav>
      <div class="cat-mainContent container">
        <div class="update-time">
          <div class="time">{{getDate}}</div>
          <span class="isUpdate">已更新</span>
        </div>
        <div class="list-result">
          榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。
          相关数据来源于“猫眼专业版”及“猫眼电影库。
        </div>
        <div class="movies-info">

          <ul class="info-item" v-for="num in 10" :key="num">
            <li class="info-list clearfix" v-for="(item,index) in moviesList"
                :key="index"
                v-show="item.sc === getTop10Score[num-1]"
                >
              <div class="info-left">
                <i class="info-sort">
                  <img src="../common/img/iconFirst-sort.png"
                       v-show="num===1"
                       :class="{secondColor:num === 2}">
                  {{num}}
                </i>
                <div class="info-picture">
                  <img src="../common/img/is3D.png" class="show3D"
                       v-if="item.is3d">
                  <img :src="item.img" alt="网络超时咯" width="160" height="220">
                </div>
              </div>
              <div class="info-right">
                <div class="movies-title">
                  {{item.nm}}
                </div>
                <div class="movies-star">
                  主演:{{item.star}}
                </div>
                <div class="showTime">
                  上映时间:{{item.rt}}
                </div>
              </div>
              <div class="info-score">
                <span class="first-number">
                  {{parseInt(item.sc)}}.
                </span>
                <span class="second-number">
                  {{
                  Math.round((item.sc-parseInt(item.sc))*10)
                  }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="catList-footer">
        <cat-footer ></cat-footer>
      </div>
    </div>
</template>
<script>
  import headerNav from './widget/headerNav'
  import catFooter from './footer'
    export default {
      props: ['getData'],
       data () {
         return {
           moviesList: this.getData
         }
       },
      created () {
        this.changeColor()
      },
      computed: {
        getDate () {
          let date = new Date()
          return date.toLocaleDateString()
        },
        getTop10Score () {
          let moviesList = this.moviesList
          let totalScore = []
          for (let i = 0; i < moviesList.length; i++) {
            totalScore.push(moviesList[i].sc)
            totalScore.sort().reverse().splice(10)
          }
          return totalScore
        }
      },
      methods: {
        changeColor () {
          $(function () {
            $('.info-sort').eq(3).css('background-color', '#ffb400')
          })
        }
      },
      components: {
        headerNav,
        catFooter
      }
    }

</script>
<style spoted lang="stylus">
  .cat-moviesList
    text-align center
    .cat-mainContent
     width 950px
     margin 0 auto
     margin-top 70px
     .update-time
       text-align center
       line-height 16px
       font-size 12px
       color #999
       .time
         display inline-block
       .isUpdate
         display inline-block
         margin-left 4px
         color #ffb400
     .list-result
       font-size 12px
       color #999
       text-align center
       margin-top 6px
     .movies-info
       margin-bottom 30px
       margin-top 40px
       position relative
       font-size 0
       .info-list
         margin-bottom 20px
         width 950px
         .info-left
           float left
           height 220px
           position relative
           .info-sort
             display inline-block
             width 50px
             height 50px
             background  #f7f7f7
             color #999
             text-align center
             line-height 50px
             position absolute
             top 40%
             font-size 18px
             font-weight 700
             overflow hidden
             &.secondColor
               background #ffb400 !important
           .info-picture
             display inline-block
             margin-left 80px
             .show3D
               display inline-block
               position absolute
               left 76px
               top 5px
             img
               border 1px solid #e5e5e5
         .info-right
           float left
           text-align left
           width 638px
           padding 68px 0 68px 30px
           border-bottom 1px dashed #e5e5e5
           &:last-child
             border-bottom none
           .movies-title
             font-size 26px
             color #333
             overflow hidden
             text-overflow ellipsis
             white-space nowrap
             width 420px
             margin-bottom 18px

           .movies-star
             font-size 16px
             color #333
           .showTime
             font-size 16px
             color #999
             margin-top 8px
         .info-score
           float right
           margin-right 5px
           line-height 183px
           height 221px
           border-bottom 1px dashed #e5e5e5
           font-family Microsoft YaHei,Helvetica,Arial,sans-serif
           &:last-child
             border-bottom none
           .first-number
             display inline-block
             font-size 56px
             font-weight 700
             font-style italic
             color #ffb400
             text-align right
           .second-number
             font-size 26px
             font-weight 700
             font-style italic
             color #ffb400
             display inline-block

    .catList-footer
      width 100%
      height 180px
      padding-bottom 20px
      margin-top 20px
</style>
