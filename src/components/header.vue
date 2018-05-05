<template>
     <div class="cat-container">
       <div class="wrapper">
         <div class="logo">
           <a href="#"><img src="../common/img/logo.png" alt=""></a>
         </div>
         <div class="city">
           <div class="city-select">
             <div class="firstCity">广州</div>
             <i class="icon-down"></i>
           </div>
         </div>
         <div class="appDownload">
           <a href="#">
             <i class="icon-phone"></i>
             <span class="downText">App下载</span>
             <span class="icon-down"></span>
           </a>
         </div>
         <div class="search">
           <input type="search" class="search-text" placeholder="找影视剧、影人、影院">
           <div class="icon-search"></div>
         </div>
         <div class="user">
           <div class="iconPerson">
             <img src="../common/img/person.png" alt="">
           </div>
           <span class="icon-down"></span>
         </div>
       </div>
     </div>
</template>
<script>
  export default {}
</script>
<style spoted lang="stylus">
  @import "../common/stylus/base.styl"
 .cat-container
   width 100%
   min-width 1200px
   height 80px
   background-color #fff
   border-bottom 1px solid #d8d8d8
   .wrapper
     font-size 0
     margin 0 auto
     height 80px
     width 1200px
     position relative
     .logo
       display inline-block
       width 133px
       height 80px
       background-size contain
       line-height 80px
       position relative
       float left
       a
        position  absolute
        left 0
     .city
       position relative
       float left
       margin: 0 8px
       height: 100%
       width 70px
       .city-select
         height 80px
         position relative
        .firstCity
          font-size 18px
          color #333
          line-height 80px
          text-align center
          padding 0 10px
     .appDownload
       position relative
       float right
       width 132px
       height 80px
       margin-right: 10px
       left -380px
       a
        position absolute
        left 10px
        top 20px
       .icon-phone
         position absolute
         background url('../common/img/phone.png')
         float left
         display inline-block
         width 15px
         height 24px
         top 50%
       .downText
         float left
         display inline-block
         font-size 16px
         color #000
         height 24px
         line-height 40px
         margin 0 20px 0 20px
       .icon-down
          position absolute
          top 60%
     .search
       float right
       width 260px
       height 40px
       position relative
       top 20px
       left 10px
       overflow hidden
       .search-text
        width 100%
        height 100%
        border-radius  30px
        font-size 14px
        color #333
        outline none
        background-color #faf8fa
        border 1px solid #ccc
       .icon-search
         position absolute
         height 40px
         width 40px
         background #ef4238
         border-radius 50%
         right 0
         top 0
         background-image url('../common/img/iconSearch.png')
     .user
       position absolute
       right 50px
       float right
       width 78px
       height 100%
       .iconPerson
         position absolute
         left 17px
         img
           margin-top 20px
           width 40px
           height 40px
           border-radius 50%
           cursor pointer

</style>
