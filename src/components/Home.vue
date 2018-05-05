<template>
  <div class="home">
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
      <div class="left-movieList">

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
                  <img :src="item.img" width="160" height="220">
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

        </div> <div class="hot-on">

          <div class="hot-now hot-once">即将上映 ( 237部 )</div>
          <div class="hot-all hot-once">全部 &gt;</div>
        </div>
        <div class="hot-movie clearfix">
          <ul class="movie-item">
            <li v-for="(item,index) in movieList " :key="index" class="movie-list"
                v-if="item.sc===0">
              <div class="movie-info">
                <div class="movie-mig">
                  <img :src="item.img" width="160" height="220">
                  <div class="movie-text">
                    <div class="movie-title">{{item.nm}}</div>
                    <span class="movie-score">
                      {{item.sc?item.sc:"无.."}}
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

      </div>

      <div class="right-movieList">
        3333333
      </div>
    </div>
  </div>
</template>
<script>
  $(function () {
    $('.carousel').carousel({
      interval: 4000
    })
  })
  export default {
    data () {
      return {
        movieList: {}
      }
      },
    created () {
      this.$axios.get('/static/data/movieList.json')

        .then((res) => {
          this.movieList = res.data.data.movies
          console.log(this.movieList)
        })
        .catch((error) => {
          alert(error)
        })
    },
    computed :{
      isOncePlay (){
        let result = []
        for (let i = 0; i < this.movieList.length; i++) {
          if (this.movieList[i].rt === 0) {
            result.push(movieList[i])
          }
        }
        return result.length
      }
    }
    }
</script>
<style spoted lang="stylus">
 .home
   position relative
   width 100%
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
       /*background pink*/
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
         .hot-once
           color blue
         .hot-all
           float right
           font-size 16px
           line-height 30px
           color #ef4238
           font-weight 700
           font-family '黑体'
       .hot-movie
         width 100%
         padding 30px 50px 30px 50px
         position relative
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
       background yellow
</style>
