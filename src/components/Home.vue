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
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon " aria-hidden="true"></span>
      <div class="left-right-control left"> &lt; </div>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon " aria-hidden="true"></span>
      <div class="left-right-control right"> &gt; </div>
    </a>
  </div>
</template>
<script>
  $(function () {
    $('.carousel').carousel({
      interval: 4000
    })
  })
    export default {
    }
</script>
<style spoted lang="stylus">
 .home
   position relative
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
</style>
