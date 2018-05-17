<template>
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
           <a href="javascript:;" class="cinemaType-list" v-for="(item,index) in cinemaType"
              :key="index"
              @click="changeType"            >
             {{item}}
           </a>
         </div>
       </div>
     </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        movieAddress: [],
        region: ['朝阳区', '海淀区', '丰台区', '大兴区', '东城区', '西城区', '通州区', '房山区',
          '昌平区', '顺义区', '怀柔区', '门头沟', '石景山区', '密云区', '平谷区', '延庆区']
      }
    },
    created () {
      this.$axios.get('/static/data/address.json')
        .then((res) => {
          if (res.data.status === 0) {
            this.movieAddress = res.data.data.朝阳区
            console.log(res)
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    components: {},
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
      padding 5px 0
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
          left 5px
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
            height 28px
            width 50px
            border-radius 15px
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
</style>
