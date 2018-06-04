<template>
      <div class="cat-host">
        <headerNav></headerNav>
        <div class="container movieList">
          <!-- 热点左边栏 -->
          <div class="left-movieList">
            <!-- 最新资讯 -->
            <div class="hot-on">
              <div class="hot-now">最新资讯</div>
              <div class="hot-all">全部 &gt;</div>
            </div>
            <div class="hot-movie ">
              <ul class="movie-item">
                <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                    v-if="item.isHot">
                  <div class="movie-info">
                    <div class="movie-mig">
                      <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 预告片速递 -->
            <div class="hot-on">
              <div class="hot-now hot-once">预告片速递</div>
              <div class="hot-all hot-once">全部&gt;</div>
            </div>
            <div class="hot-movie">
              <ul class="movie-item">
                <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                    v-if="item.sc===0 && index<33">
                  <div class="movie-info">
                    <div class="movie-mig">
                      <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 最新图集 -->
            <div class="hot-on">
              <div class="hot-now">最新图集</div>
              <div class="hot-all">全部 &gt;</div>
            </div>
            <div class="hot-movie clearfix">
              <ul class="movie-item catHotPlayList">
                <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                    v-show="item.sc && 4<=item.sc && item.sc<=7"
                >
                  <div class="movie-info">
                    <div class="movie-mig ">
                      <div class="hotPlay">
                        <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <!--主页右边栏  -->
          <div class="right-movieList hidden-sm hidden-xs">
            <!--热门资讯-->
            <div class="rightTicket clearfix">
              <div class="todayTicket">
                热门资讯
              </div>
              <ul class="hot-item">
                <li>

                  <div class="firstText">
                    <div class="spiderMen">
                      <img src="../common/img/spiderMen.png">
                    </div>
                    <span class="firstCount">1</span>
                    5月21日娱乐晚报：死侍2首周末票房3亿美元，张一山再演家有儿女
                  </div>
                </li>

                <li>
                  <p><span>2</span>福斯拥有400多个漫威角色的版权，期待X战警和漫威结合</p>
                </li>
                <li>
                  <p><span>3</span>她是好莱坞白富美，英国贵族家境显赫，给前男友买下2200万别墅</p>
                </li>
                <li>
                  <p><span>4</span>《归去来》7天破11.5亿点击量，首周口碑收视双赢</p>
                </li>
                <li>
                  <p><span>5</span>罗志祥花2.7亿买豪宅娶周扬青？本人回应看到新闻差点骂脏话</p>
                </li>
                <li>
                  <p><span>6</span>《超时空同居》累计票房2.36亿，雷佳音佟丽娅对唱主题曲特供5.20</p>
                </li>
                <li>
                  <p><span>7</span>26岁张一山再演家有儿女，后爸依旧高亚麟，亲妈竟然是雪姨</p>
                </li>
                <li>
                  <p><span>8</span>张翰回应被恶搞成表情包，很生气，伤心到要靠安眠药才能入睡</p>
                </li>
                <li>
                  <p><span>9</span>杨超越初中辍学，强东玥毕业于985，学历最高的竟是王晴</p>
                </li>
                <li>
                  <p><span>10</span>张学友演唱会又一逃犯被抓，曾诈骗11万，警方等他听完后才动手</p>
                </li>

              </ul>
              <div class="hot-trailer">
                热门预告片
              </div>
              <div class="trailer-item">
                <div class="trailer-list">
                  <div class="trailer-images">
                    <img src="../common/img/hot-prevue1.png" class="image-main">
                    <img src="../common/img/icon-play.png" class="image-icon" >
                    <i class="trailer-num">
                      1
                    </i>
                  </div>
                  <div class="trailer-text">
                    <div class="trailer-name">
                      《超时空同居》群星版预告片
                    </div>
                    <div class="trailer-num">
                      290.3万
                    </div>
                  </div>
                </div>
                <div class="trailer-list">
                  <div class="trailer-images">
                    <img src="../common/img/hot-prevue2.png" class="image-main">
                    <img src="../common/img/icon-play.png" class="image-icon" >
                    <i class="trailer-num">
                      2
                    </i>
                  </div>
                  <div class="trailer-text">
                    <div class="trailer-name">
                      《超时空同居》群星版预告片
                    </div>
                    <div class="trailer-num">
                      290.3万
                    </div>
                  </div>
                </div>
                <div class="trailer-list">
                  <div class="trailer-images">
                    <img src="../common/img/hot-prevue3.png" class="image-main">
                    <img src="../common/img/icon-play.png" class="image-icon" >
                    <i class="trailer-num">
                      3
                    </i>
                  </div>
                  <div class="trailer-text">
                    <div class="trailer-name">
                      《超时空同居》群星版预告片
                    </div>
                    <div class="trailer-num">
                      290.3万
                    </div>
                  </div>
                </div>
                <div class="trailer-list">
                  <div class="trailer-images">
                    <img src="../common/img/hot-prevue4.png" class="image-main">
                    <img src="../common/img/icon-play.png" class="image-icon" >
                    <i class="trailer-num">
                      4
                    </i>
                  </div>
                  <div class="trailer-text">
                    <div class="trailer-name">
                      《超时空同居》群星版预告片
                    </div>
                    <div class="trailer-num">
                      290.3万
                    </div>
                  </div>
                </div>
                <div class="trailer-list">
                  <div class="trailer-images">
                    <img src="../common/img/hot-prevue5.png" class="image-main">
                    <img src="../common/img/icon-play.png" class="image-icon" >
                    <i class="trailer-num">
                      5
                    </i>
                  </div>
                  <div class="trailer-text">
                    <div class="trailer-name">
                      《超时空同居》群星版预告片
                    </div>
                    <div class="trailer-num">
                      290.3万
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="HotFooter">
          <cat-footer></cat-footer>
        </div>
      </div>
</template>
<script>
  import headerNav from './widget/host-headerNav'
  import catFooter from './footer'
    export default {
      props: ['getData'],
      data () {
        return {
          movieList: this.getData
        }
      },
      components: {
        headerNav,
        catFooter
      }
    }
</script>
<style spoted lang="stylus">
  @import "../common/stylus/base.styl"
 .cat-host
   text-align center
   .movieList
     padding-top 60px
     display flex
     width 100%
     .left-movieList
       flex 2
       width 200px
       /*height 300px*/
       .hot-on
         width 100%
         height 30px
         line-height 30px
         overflow hidden
         padding 0 100px 0 50px
         .hot-now
           float left
           font-size 26px
           color mainColorRed
           margin-right 20px
           cursor pointer
         .hot-once
           color blue
         .hot-all
           float right
           font-size 16px
           line-height 30px
           color mainColorRed
           font-weight 700
           font-family '黑体'
           cursor pointer
       .hot-movie
         width 100%
         padding 30px 50px 30px 50px
         position relative
         text-align center
         .movie-item
           width 100%
           .movie-list
             display inline-block
             margin-right 20px
             .movie-info
               position relative
               width 162px
               border 1px solid #ccc
               .movie-mig
                 width 160px
                 height 220px
                 z-index 20
     .right-movieList
       flex 1
       width 200px
       height 300px
       text-align left
       .rightTicket
         display block
       .todayTicket
         font-size 26px
         color mainColorRed
         margin-bottom 30px
         font-weight 400
       .hot-item
         width 360px
         position relative
         li
           width 100%
           cursor pointer
           .firstText
             float right
             white-space normal
             line-height 30px
             &:hover
               color mainColorRed
             .spiderMen
               float left
               display block
             .firstCount
               position absolute
               left 0
               top 52px
               height 20px
               width 20px
               background-color mainColorRed
               color #fff
               line-height 20px
               margin 0
               padding-left 3px
               font-style italic
               font-size 18px
           p
             clear both
             padding 10px 0
             overflow hidden
             color #333
             font-size 14px
             text-overflow ellipsis
             white-space nowrap
             &:hover
               color mainColorRed
             span
               display inline-block
               width 15px
               margin-right 8px
               font-size 16px
               color #999
               font-style italic
               line-height 20px
       .hot-trailer
         font-size 26px
         color #2d98f3
         margin-top 40px
         margin-bottom 20px
       .trailer-item
         margin-top 30px
         .trailer-list
           position relative
           cursor pointer
           margin-bottom 20px
           height 68px
           .trailer-images
             position absolute
             left 0
             .image-main
               winth 120px
               height 68px
             .image-icon
               position absolute
               width 24px
               height 24px
               right 6px
               bottom 6px
             .trailer-num
               position absolute
               width 16px
               height 18px
               background-color #f90
               line-height 18px
               text-align center
               font-size 16px
               font-style italic
               color #fff
               left 0
               bottom 0
               padding-right 3px
           .trailer-text
             position absolute
             right 100px
             top 20px
             .trailer-name
               margin-bottom 10px
               overflow hidden
               text-overflow ellipsis
               white-space nowrap
               color #333
               font-size 14px
               &:hover
                 color mainColorRed
             .trailer-num
               font-size 13px
               color #999
               &::before
                 content ""
                 display inline-block
                 border-top 7px solid transparent
                 border-bottom 7px solid transparent
                 right none
                 border-left 9px solid #ccc
 .HotFooter
   margin-top 30px

</style>
