<template>
    <div class="header-nav">
      <div class="cat-nav">
        <div class="cat-navBar">
          <ul class="content-item">
            <li  v-for="(item,index) in movieTpe" :key="index" class="content-list">
              <a href="#" class="navBar-list" @click="changeColor">
                <span class="navBar-title">{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          movieTpe: ['热点首页', '新闻资讯', '预告片', '新闻图集',]
        }
      },
      created () {
        this.FirstChildMark()
      },
      methods: {
        changeColor () {
          $(function () {
            $('.navBar-title').click(function () {
              $(this)
                .addClass('changeStyle')
                .parent()
                .parent()
                .siblings()
                .children()
                .children()
                .removeClass('changeStyle')
            })
          })
        },
        FirstChildMark () {
          $(function () {
             $('.content-item')
               .children()
               .eq(0)
               .children()
               .children()
               .addClass('changeStyle')
          })
        }
      }
    }

</script>
<style spoted lang="stylus">
  .cat-nav
    width 100%
    height 60px
    background-color #47464a
    position relative
    box-sizing border-box
    .cat-navBar
      display inline-block
      overflow hidden
      margin 0 auto
      .content-list
        display inline-block
      .navBar-list
        display inline-block
        line-height 60px
        padding 0 40px
        text-decoration none
        color #999
        .navBar-title
          display inline-block
          font-size 16px
          &:hover
            color #fff
          &.changeStyle
            color #ef4238
            display inline-block
            &:before
              content ""
              display inline-block
              border-bottom 11px solid #fff
              border-right 8px solid transparent
              border-left 8px solid transparent
              border-top none
              position absolute
              top 50px
              margin-left 20px

</style>
