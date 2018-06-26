<template>
  <div class="movies-ratings">
    <div class="ratings-head">
      <div class="ratings-img">
        <img :src="movieList[4].img" width="240" height="330" class="banner-image">
      </div>
      <div class="ratings-content">
        <div class="name">
          {{movieList[4].nm}}
        </div>
        <div class="type">
          {{movieList[4].cat}}
        </div>
        <div class="time">
          美国/150分钟
        </div>
        <div class="showtime">
          {{movieList[4].rt}}
        </div>

      </div>
      <div class="rings-icons">
        <div class="icon-left ratings-icon">
          <i><img class="iconWish" src="../common/img/icon-heart.png"></i> 想看
        </div>
        <div class="icon-right ratings-icon">
          <i><img src="../common/img/icon-star.png"></i> 评分
        </div>
        <div class="buyTicket">
          特惠购票
        </div>
      </div>
      <div class="score">
        <div class="userRating">
          用户评分
        </div>
        <div class="movieScore">
          <span>{{movieList[4].sc}}.0</span>
        </div>
        <div class="allTickets">
          累计票房
        </div>
        <div class="allTicketNumber">
          9.87
          <span>亿</span>
        </div>
        <div class="stars-icon">

        </div>
      </div>
    </div>
    <div class="ratings-container">
      <div class="wrapper-left">
          <div class="title">
            <span class="title-text">介绍</span>
            <span class="title-text">职业演员</span>
            <span class="title-text">奖项</span>
            <span class="title-text">图集</span>
          </div>
          <div class="moviesText">
               剧情简介
          </div>
          <P class="content">
            {{ratings.dra}}
          </P>
        <div class="picture">
          图集
        </div>
        <div class="pictureMovies">
          <img src="../common/img/ratings-main.png" alt="">
          <div class="pictureRight">
            <img src="../common/img/ratings-main02.png" alt="">
            <img src="../common/img/ratings-main03.png" alt="">
            <img src="../common/img/ratings-main04.png" alt="">
            <img src="../common/img/ratings-main05.png" alt="">
          </div>

        </div>
        <div class="ratings-title">
          热门短评
        </div>
        <div class="userRatings" v-for="(item,index) in ratings.CommentResponseModel.cmts"
                    :key="index">
          <div class="userPicture">
            <img src="../common/img/rating-user.png" width="50" height="50" class="user">
            <img src="../common/img/rating-icon-vip4.png" class="VIP-icon">
            <span class="userName">
              {{item.nickName}}
            </span>
            <div class="ratingDate">
              4-13
            </div>
            <div class="ratings-start">
              <start :score="4.5"></start>
            </div>
          </div>
          <div class="rating-info">
            {{item.content}}
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="firstShow">
          精彩预告
        </div>
        <div class="video-mp4">
          <video width="420" height="260" controls>
            <source :src="ratings.vd" type="video/mp4">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="others">
          相关电影
        </div>
        <div class="otherMovies">
          <div class="moviesList" v-for="(item,index) in movieList"
               :key="index" v-if="item.is3d &&item.sc">
            <div class="moviePicture">
              <img :src="item.img" alt="网络超时咯" width="106" height="145">
            </div>
            <div class="movie-title">
              {{item.nm}}
            </div>
            <div class="score">
              {{item.sc}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rating-footer">
      <cat-footer></cat-footer>
    </div>
  </div>
</template>
<script>
  import catFooter from './footer'
  import Start from './widget/start'
  export default {
    data () {
      return {
        movieList: {},
        ratings: {}
      }
    },
    created () {
      this.$axios.get('/static/data/movieList.json')
        .then((res) => {
          this.movieList = res.data.data.movies
          let ratings = require('../../static/data/ratings.json')
          this.ratings = ratings.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    components: {
      catFooter,
      Start
    }
  }
</script>
<style spoted lang="stylus">
  @import "../common/stylus/base.styl"
  .movies-ratings
    display block
    .ratings-head
      width 100%
      height 380px
      background-image url('../common/img/bander.png')
      position relative
      color #fff
      font-size 14px
      margin-bottom 80px
      .ratings-img
        position absolute
        width 240px
        height 330px
        border 4px solid #fff
        top 80px
        left 50px
        .banner-image
          width 100%
          height 100%
      .ratings-content
        position absolute
        top 80px
        left 340px
        .name
          font-size 26px
          font-weight 700
          line-height 32px
        .type
          margin 15px 0
        .time
          margin-bottom 15px
      .rings-icons
        position absolute
        width 260px
        height 86px
        left 340px
        bottom 50px
        .ratings-icon
          width 120px
          height 36px
          margin-right 5px
          margin-bottom 10px
          background-color #756189
          text-align center
          line-height 36px
          .iconWish
            display line-height
            vertical-align middle
        .icon-left
          float left
        .icon-right
          float right
          line-height 36px
        .buyTicket
          clear both
          width 250px
          height 40px
          line-height 40px
          font-size 16px
          text-align center
          background-color #df2d2d
      .score
        position absolute
        bottom 50px
        left 700px
        .userRating
          margin-bottom 8px
          font-size 12px
        .movieScore
          font-size 30px
          line-height 30px
          color #ffc600
          margin-bottom 12px
        .allTickets
          font-size 12px
          margin-bottom 12px
        .allTicketNumber
          font-size 30px
          span
            font-size 12px
    .ratings-container
      width 100%
      padding 0 50px
      display flex
      .wrapper-left
       flex 2
       text-align left
       padding-right 50px
       .title
         width 100%
         border-bottom 2px solid #eee
         margin-bottom 25px
         .title-text
           display inline-block
           margin-right 30px
           font-size  18px
           cursor pointer
           padding-bottom 10px
           &:first-child
             color mainColorRed
             border-bottom 3px solid mainColorRed
       .moviesText
         margin 0
         font-weight 400
         font-size 18px
         color #333
         padding-left 3px
         border-left 3px solid mainColorRed
       .content
        margin-top 20px
        color #333
        font-size 14px
        line-height 26px
       .picture
         font-size 18px
         border-left 2px solid mainColorRed
         padding-left 3px
         margin-top 30px
       .pictureMovies
         margin-top 20px
         height 270px
         width 740px
         img
          margin-bottom 4px
         .pictureRight
           width 270px
           float right
       .ratings-title
        clear both
        margin-top 30px
        font-size 18px
        padding-left 3px
        border-left 2px solid mainColorRed
       .userRatings
         margin-top 30px
         position relative
         font-size 16px
         color #333
         .user
           border-radius 50%
         .VIP-icon
           border-radius 50%
           position relative
           left -26 px
         .userName
           display inline-block
           position absolute
           top 10px
         .ratingDate
           position absolute
           top 35px
           left 70px
           color #999
        .rating-info
          font-size 14px
          color #666
          margin-top 20px
          margin-left 60px
          padding-bottom 30px
          border-bottom 1px solid #eee
          &:last-child
            border-bottom none
      .wrapper-right
        flex 1
        padding-left 35px
        .firstShow
          font-size 18px
          border-left 2px solid mainColorRed
          padding-left 3px
          margin-bottom 30px
        .video-mp4
          margin-bottom 30px
        .others
          font-size 18px
          border-left 2px solid mainColorRed
          padding-left 3px
          margin-bottom 30px
        .otherMovies
          margin-top 30px
          font-size 14px
          color #333
          .moviesList
           display inline-block
           margin 10px 20px 0 0
           .movie-title
             text-align center
           .score
             text-align center
             padding-top 5px
             color #ffb400
    .rating-footer
      margin-top 20px
</style>
