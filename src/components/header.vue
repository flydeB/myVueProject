<template>
   <div>
     <div class="container">
       <div class="wrapper">
        <div class="logo">
          <a href="#"><img src="../img/logo.png" alt=""></a>
        </div>
         <div class="city">
           <div class="city-select">
             <span>广州</span>
             <i class="icon-down"></i>
           </div>
         </div>
         <div class="appDownload">
            <i class="icon-phone"></i>
            <span>App下载</span>
            <i class="icon-down"></i>
         </div>
         <div class="search">
           <input type="text">
           <div class="icon-search"></div>
         </div>
       </div>
     </div>
   </div>
</template>
<script>
    export default {}
</script>
<style spoted lang="stylus">
 .container
   width 100%
   height 80px
   background pink
   .wrapper
     font-size 0
     .logo
       display inline-block
       width 133px
       height 80px
       background-size contain
       line-height 80px
       position relative
       a
        position  absolute
        left 0
        top  20px
     .city
       display inline-block
       width 100px
       height 80px
       font-size 18px
       color #333
       line-height 80px
       .city-select
        display inline-block
       .icon-down
         display inline-block
         width 0
         height 0
         margin-left 2px
         vertical-align middle
         border-top 5px solid #666
         border-right 5px solid transparent
         border-left 5px solid transparent
         transition all .2s ease
     .appDownload

</style>
