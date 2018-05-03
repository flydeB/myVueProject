<template>
  <div id="app">

   <cat-head></cat-head>
   <div class="link">
     <router-link to="/home">主页</router-link>
     <router-link to="/movies">电影</router-link>
     <router-link to="/cinema">影院</router-link>
     <router-link to="/list">榜单</router-link>
     <router-link to="/host">热点</router-link>
   </div>
    <router-view/>
  </div>
</template>

<script>
  import catHead from './components/header'

  export default {
    name: 'App',
    components: {
      catHead
    }
  }
</script>
<style lang="stylus"  scoped>
  .link
    position absolute
    width 400px
    height 80px
    line-height 80px
    text-align center
    top 0
    left 300px
    font-size 0
    a
     text-align center
     display inline-block
     height 80px
     line-height 80px
     width 80px
     font-size 18px
     color #333
     &:hover
       color red
     &.active
        background #ef4238
        color #fff
</style>
