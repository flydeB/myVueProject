<template>
  <div class="cat-cinema-wrapper">
    <div class="cat-cinema container">
      <div class="top-item">
        <div class="typeTitle">
          <div class="title-type">
            品牌:
          </div>
          <div class="title-all">
            <a href="javascript:; " class="active">全部 </a>
          </div>
          <div class="item-list">
            <a href="javascript:;" class="cinemaType-list" v-for="(item,index) in cinemaType"
               :key="index"
               @click="changeType"            >
              {{item}}
            </a>
          </div>
        </div>
        <div class="typeTitle">
          <div class="title-type">
            行政区:
          </div>
          <div class="title-all">
            <a href="javascript:; " class="active">全部 </a>
          </div>
          <div class="item-list">
            <a href="javascript:;" class="cinemaType-list" v-for="(item,index) in region"
               :key="index"
               @click="changeType"            >
              {{item}}
            </a>
          </div>
        </div>
        <div class="typeTitle">
          <div class="title-type">
            特殊厅:
          </div>
          <div class="title-all">
            <a href="javascript:; " class="active">全部 </a>
          </div>
          <div class="item-list">
            <a href="javascript:;" class="cinemaType-list" v-for="(item,index) in especialHall"
               :key="index"
               @click="changeType"            >
              {{item}}
            </a>
          </div>
        </div>
      </div>
      <div class="movies-list">
        影院列表
      </div>
      <div class="cinema-wrapper">
        <div class="cinema-info" v-for="(item,index) in movieAddress" :key="index">
          <div class="info-left">
            <div class="info-title">
              {{item.nm}}
            </div>
            <div class="info-address">
              <span>地址:</span> {{item.addr}}
            </div>
          </div>
          <div class="info-right">
            <div class="info-price">
              <span>&yen;</span>{{item.sellPrice}}
              <span class="word">起</span>
            </div>
            <span class="info-seat">选座购票</span>
          </div>
        </div>
      </div>
      <div class="cat-page">
        <ul class="cat-page-item">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>....</li>
          <li>下一页</li>
        </ul>
      </div>
    </div>

    <div class="footerCinema">
      <cinema-footer></cinema-footer>
    </div>
  </div>

</template>
<script>
  import cinemaFooter from './footer'
  export default {
    data () {
      return {
        movieAddress: [],
        region: ['朝阳区', '海淀区', '丰台区', '大兴区', '东城区', '西城区', '通州区', '房山区',
          '昌平区', '顺义区', '怀柔区', '门头沟', '石景山区', '密云区', '平谷区', '延庆区'],
        especialHall: ['IMAX厅', '中国巨幕厅', '杜比全景声厅', 'RealD厅', 'RealD 6FL厅',
          'LUXE巨幕厅', '4DX厅', 'DTS:X 临境音厅', '儿童厅', '4K厅', '4D厅', '巨幕厅']
      }
    },
    created () {
      this.$axios.get('/static/data/address.json')
        .then((res) => {
          if (res.data.status === 0) {
            this.movieAddress = res.data.data.朝阳区
            console.log(res)
            this.$nextTick(() => {
              this.pageChange()
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    components: {
      cinemaFooter
    },
    computed: {
      cinemaType () {
        let allCinemaType = this.movieAddress
        let Box = []
        let addressObj = {}
        let addressBox = []
        let temp
        for (let i = 0; i < allCinemaType.length; i++) {
          Box.push(allCinemaType[i].brd)
          for (let j = 0; j < Box.length; j++) {
            if (!addressObj[Box[j]]) {
              addressBox.push(Box[j])
              addressObj[Box[j]] = 50
            }
          }
        }
        temp = addressBox[1]
        addressBox[1] = addressBox[addressBox.length - 1]
        addressBox[addressBox.length - 1] = temp
        return addressBox
      }
    },
    methods: {
      changeType () {
        $(function () {
          $('.cinemaType-list').click(function () {
            $(this)
              .addClass('active')
              .siblings()
              .removeClass('active')
              .parent()
              .siblings()
              .children()
              .removeClass('active')
          })
          $('.title-all a').click(function () {
            $(this)
              .addClass('active')
              .parent()
              .siblings()
              .children()
              .removeClass('active')
          })
        })
      },
      pageChange () {
        $(function () {
          $('.cat-page-item li').click(function () {
            $(this).css({
              'background': '#f03d37',
              'color': '#fff'
            }).siblings().css({
              'background': '#fff',
              'color': '#333'
            })

            $('.cat-page-item li')
              .eq(2)
               .parent()
               .parent()
               .prev()
               .css('height', '1500')

             $('.cat-page-item li')
               .eq(5)
               .parent()
               .parent()
               .prev()
               .css('height', '1800')
              console.log()
           })
        })
      }
    }
  }
</script>
<style spoted lang="stylus">
  .top-item
    border 1px solid #e5e5e5
    padding 0 20px
    margin 40px 0
    height auto
    .typeTitle
      width 100%
      border-bottom  1px dashed #e5e5e5
      padding 5px
      text-align left
      position relative
      &:last-child
        border none
      .title-type
          display inline-block
          height 24px
          line-height 24px
          color #999
          font-size 14px
          position absolute
          left 3px
      .title-all
          position absolute
          font-size 14px
          left 45px
          top 6px
          text-align center
          line-height 28px
          border-radius 10px
          width 60px
          height 26px
          a
            display inline-block
            text-decoration none
            color #333
            height 26px
            width 45px
            border-radius 15px
            line-height 26px
            &.active
              background-color #f34d41
              color #fff
      .item-list
        display block
        margin-left 90px
      .cinemaType-list
        display inline-block
        font-size 14px
        color #333
        text-decoration none
        margin 1px 15px 4px 16px
        line-height 25px
        hieght 25px
        text-align center
        border-radius 12px
        padding 0 5px
        &:hover
          color #f34d41
        &.active
          background-color #f34d41
          color #fff
  .movies-list
    font-size 18px
    color #333
    border-left 4px solid #f03d37
    padding-left 6px
    line-height 18px
    font-weight 700
  .cinema-wrapper
    height 1030px
    overflow hidden
    .cinema-info
      position relative
      height 88px
      width 100%
      padding 20px 0
      border-bottom 1px dashed #e5e5e5
      &:last-child
        border-bottom none
      .info-left
        position absolute
        left 0
        cursor pointer
        .info-title
          font-size 16px
          line-height 18px
          color #333
          margin-bottom 10px
          &:hover
           color #f03d37
        .info-address
          font-size 14px
          line-height 14px
          color #999
      .info-right
       position absolute
       right 0
       .info-price
         font-size 16px
         font-weight 700
         color #f03d37
         position absolute
         right 100px
         width 100px
         text-align center
         .word
           font-size 12px
           color #999
           line-height 45px
       .info-seat
         display inline-block
         height 30px
         width 80px
         line-height 30px
         fon-size 15px
         text-align center
         background-color #f03d37
         border-radius 15px
         padding 0 8px
         color #fff
         margin-top 8px
         box-shadow 0 2px 10px -2px #f03d37
         cursor pointer
         &:hover
           opacity .8
  .cat-page
   position relative
   height 30px
   top 30px
   .cat-page-item
     width 300px
     height 100%
     position absolute
     left 50%
     li
      display inline-block
      height 30px
      width 30px
      border 1px solid #999
      line-height 30px
      text-align center
      margin-right 20px
      color #333
      font-size 14px
      cursor pointer
      &:hover
        border 1px solid #f03d37
      &:last-child
       width 60px
      &:first-child
        background #f03d37
        color #fff

  .footerCinema
    margin-top 100px
</style>
