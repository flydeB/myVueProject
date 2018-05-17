<template>
  <div class="home">
    <!-- 主页轮播图 -->
    <div id="carousel-example-generic" class="carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../common/img/autoPlayImg3.jpg">
        </div>
        <div class="item">
          <img src="../common/img/autoPlayImg2.jpg">
        </div>
        <div class="item">
          <img src="../common/img/autoPlayImg1.jpg">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon " aria-hidden="true"></span>
        <div class="left-right-control left"> &lt;</div>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon " aria-hidden="true"></span>
        <div class="left-right-control right"> &gt;</div>
      </a>
    </div>
    <div class="container movieList">
      <!-- 主页左边栏 -->
      <div class="left-movieList">
        <!-- 正在热映 -->
        <div class="hot-on">
          <div class="hot-now">正在热映 ( 35部 )</div>
          <div class="hot-all">全部 &gt;</div>
        </div>
        <div class="hot-movie clearfix">
          <ul class="movie-item">
            <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                v-if="item.isHot">
              <div class="movie-info">
                <div class="movie-mig">
                  <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                  <div class="movie-text">
                    <div class="movie-title">{{item.nm}}</div>
                    <span class="movie-score">
                      {{item.sc?item.sc:"无..."}}
                    </span>
                  </div>
                </div>
                <a href="#" class="buy-tickets">
                  <div class="buy-text">购 票</div>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 即将上映 -->
        <div class="hot-on">
          <div class="hot-now hot-once">即将上映 ( 237部 )</div>
          <div class="hot-all hot-once">全部 &gt;</div>
        </div>
        <div class="hot-movie clearfix">
          <ul class="movie-item">
            <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                v-if="item.sc===0 && index<33">
              <div class="movie-info">
                <div class="movie-mig">
                  <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                  <div class="movie-text">
                    <div class="movie-title">{{item.nm}}</div>
                    <span class="movie-score">
                      {{item.sc?item.sc:"无.."}}
                    </span>
                  </div>
                </div>
                <a href="#" class="buy-tickets">
                  <div class="buy-text">预 售</div>
                </a>
              </div>
              <div class="showTime">
                {{item.rt}}
              </div>
            </li>
          </ul>
        </div>
        <!-- 热播电影 -->
        <div class="hot-on">
          <div class="hot-now">热播电影</div>
          <div class="hot-all">全部 &gt;</div>
          <div class="moviesType">
            爱情&nbsp; 喜剧&nbsp; 动作&nbsp; 恐怖&nbsp; 动画
          </div>
        </div>
        <div class="hot-movie clearfix">
          <ul class="movie-item catHotPlayList">
            <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                v-show="item.sc && 5<=item.sc && item.sc<=7">
              <div class="movie-info">
                <div class="movie-mig ">
                  <div class="hotPlay">
                    <img :src="item.img" width="160" height="220" alt="网络超时啦!">
                  </div>
                  <div class="movie-text">
                    <div class="movie-title">{{item.nm}}</div>
                    <span class="movie-score">
                      {{item.sc ? item.sc : "无.."}}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <!--主页右边栏  -->
      <div class="right-movieList hidden-sm hidden-xs">
        <!--今日票房-->
        <div class="rightTicket">
          <div class="todayTicket">
            今日票房
          </div>
          <div class="firstTick">
            <i class="icon-first">
              <img src="../common/img/icon-first.png" alt="" class="picture">
            </i>
            <img src="../common/img/firstTicket.png" alt="网络超时啦！" width="128" height="78">
            <div class="title">
              后来的我们
              <div class="ticketNum">
                1270.36万
              </div>
            </div>
            <div class="ticketSort" v-for="(item,index) in movieList" :key="index" v-show="index<9">
              <span class="num">{{index + 2}}</span>
              <span class="movieName">
                   {{item.nm}}
                 </span>
              <div class="score">
                {{item.snum / 100}}万
              </div>
            </div>
          </div>
          <div class="todayTicketNumber clearfix">
            <div class="title">今日大盘</div>
            <div class="info">4070.6 <span class='wan'>万</span>
              <span class="moreState">
              查看更多 &gt;
           </span>
              <div class="content">
                北京时间 19:45:22 &nbsp;&nbsp;猫眼专业版实时票房数据
              </div>
            </div>
          </div>
        </div>
       <!--最受期待-->

        <div class="rightTicket">
          <div class="todayTicket bestWish">
            最受期待
            <div class="bestWish-list">
              查看完整榜单 &gt;
            </div>
          </div>
          <div class="firstTick bestWish-img">
            <i class="icon-first">
              <img src="../common/img/icon-first.png" alt="" class="picture">
            </i>
            <img src="../common/img/bestWish.png" alt="网络超时啦！" width="140" height="194">
            <div class="title bestWish-title">
              侏罗纪世界2
              <div class="ticketNum bestWish-time">
                上映时间 : 2018-6-15
              </div>
              <div class="bestWish-watch">
                177948人想看
              </div>
            </div>
            <div class="ticketSort" v-for="(item,index) in movieList" :key="index"
                 v-show="12<=index && index<=20">
              <span class="num">{{index - 10}}</span>
              <span class="movieName">
                   {{item.nm}}
                 </span>
              <div class="score bestWish-score">
                {{item.wish}}人想看
              </div>
            </div>
          </div>
        </div>
     <!--TOP100-->
        <div class="rightTicket clearfix ranking100">
          <div class="todayTicket bestWish">
            TOP100
            <div class="bestWish-list">
              查看完整榜单 &gt;
            </div>
          </div>
          <div class="firstTick">
            <i class="icon-first">
              <img src="../common/img/icon-first.png" alt="" class="picture">
            </i>
            <img src="../common/img/heightestScore.png" alt="网络超时啦！" width="128" height="78">
            <div class="title">
              霸王别姬
              <div class="ticketNum">
                9.6分
              </div>
            </div>
            <div class="ticketSort" v-for="(item,index) in movieList" :key="index"
                 v-show="index<9">
              <span class="num">{{index + 2}}</span>
              <span class="movieName">
                   {{item.nm}}
                 </span>
              <div class="score score bestWish-score">
                {{item.sc}}分
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="catFooter clearfix">
      <cat-footer></cat-footer>
    </div>
  </div>
</template>
<script>
  import catFooter from './footer'

  $(function () {
    $('.carousel').carousel({
      interval: 4000
    })
  })
  export default {
    props: ['getData'],
    data () {
      return {
        movieList: {}
      }
    },
    components: {
      catFooter
    },
    created () {
      this.$axios.get('/static/data/movieList.json')

        .then((res) => {
          this.movieList = res.data.data.movies
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>
<style spoted lang="stylus">
  .home
    position relative
    width 100%
    margin-bottom 80px
    .carousel
      width 100%
      .left-right-control
        font-family '宋体'
        position absolute
        font-size 50px
        color #333
        width  48px
        height 68px
        background-color  #fff
        top 45%
        opacity .5
        &.left
          left 50px
        &.right
          right 50px
    .movieList
      padding-top 60px
      display flex
      width 100%
      .left-movieList
        flex 2
        width 200px
        height 300px
        .hot-on
          width 100%
          height 30px
          line-height 30px
          overflow hidden
          padding 0 100px 0 50px
          .hot-now
            float left
            font-size 26px
            color #ef4238
            margin-right 20px
            cursor pointer
          .moviesType
            font-size 14px
            cursor pointer
          .hot-once
            color blue
          .hot-all
            float right
            font-size 16px
            line-height 30px
            color #ef4238
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
                .movie-text
                  position relative
                  width 150px
                  height 22px
                  top -30px
                  left 8px
                  text-align left
                  z-index 50
                  .movie-title
                    float left
                    width 115px
                    height 22px
                    font-size 16px
                    font-weight 700
                    color #fff
                    line-height 22px
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                  .movie-score
                    position absolute
                    float right
                    color #ffb400
                    height 22px
                    font-size 18px
                    line-height 22px
                    font-style italic
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
                  .buy-text
                    position relative
                    font-size 16px
                    line-height 39px
                    left -60px
      .right-movieList
        flex 1
        width 200px
        height 300px
        .rightTicket
         margin-bottom 90px
         &.ranking100
           position relative
           top 115px
        .todayTicket
          font-size 26px
          color #ef4238
        .bestWish
          position relative
          color #ffb400
          .bestWish-list
            position absolute
            right 10px
            top 10px
            font-size 14px
        .firstTick
          position relative
          top 23px
          width 350px
          height 80px
          border 1px solid #ccc
          &:hover
            background #999
          &.bestWish-img
            height 196px
            &:hover
              background lightyellow
          .icon-first
            position absolute
            left 0
            top 0
          .picture
            position absolute
            left 0
            top 0
          .title
            position absolute
            right 100px
            top 20px
            font-size 18px
            color #333
            line-height 1.4
            cursor pointer
            &.bestWish-title
              top 50px
              right 0
            .ticketNum
              margin 5px
              font-zise 13px
              color #ef4238
            .bestWish-time
              position relative
              color #999
              left -25px
              font-size 16px
            .bestWish-watch
              font-size 15px
              color #ffb400
          .ticketSort
            width 350px
            height 35px
            text-align left
            line-height 35px
            cursor pointer
            &:hover
              background #ccc
            .num
              display inline-block
              font-size 20px
              color #999
              font-style italic
              font-weight 200
              font-family Microsoft YaHei,Helvetica,Arial,sans-serif
              width 25px
            .movieName
              display inline-block
              font-size 16px
              color #333
              vertical-align top
            .score
              float right
              font-size 14px
              color #ef4238
              &.bestWish-score
                color #ffb400
        .todayTicketNumber
          width 350px
          height 95px
          border 1px solid #ccc
          position relative
          top 25px
          cursor pointer
          .title
            position absolute
            left 0
            right 0
            width 30px
            height 100%
            background #ef4238
            color #fff
            font-size 17px
            text-align center
          .info
            width 300px
            height 100%
            position absolute
            left 30px
            top 15px
            font-size 30px
            color #ef4238
            .wan, .moreState
              font-size 14px
              display inline-block
            .moreState
              margin-left 100px
            .content
              margin 8px 0 0 10px
              font-size 13px
              color #999
    .catFooter
      width 100%
      position absolute
      left 0
      top 2350px
</style>
