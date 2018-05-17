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
    <router-view :getData="movieList"></router-view>
  </div>
</template>
<script>
  import catHead from './components/header'

  export default {
    name: 'App',
    data () {
      return {
        movieList: {}
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
    },
    components: {
      catHead
    }
  }
</script>
<style lang="stylus"  scoped>
 #app
   position relative
  .link
    position absolute
    width 400px
    height 80px
    line-height 80px
    text-align center
    top 0
    left 300px
    font-size 0
    z-index 1000
    text-decoration none
    a
     text-align center
     display inline-block
     height 80px
     line-height 80px
     width 80px
     font-size 18px
     color #333
     text-decoration none
     &:hover
       color red
     &.active
        background #ef4238
        color #fff
</style>
