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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        movieList: []
      }
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
  .movies-ratings
    display block
    .ratings-head
      width 100%
      height 380px
      background-image url('../common/img/bander.png')
      position relative
      color #fff
      font-size 14px
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
</style>
