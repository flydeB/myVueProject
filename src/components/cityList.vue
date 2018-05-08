<template>
    <div class='cityList'>
      <div class="position">
        定位城市: 广州
      </div>
      <ul v-for='(item,index) in cityFirstCode' :key='index'>
        <li>
          <span class="firstCode">{{item}}</span>
          <span v-for="(city,index) in cityList" :key='index'
                v-show='city.firstcode == item' class="cityName">
          {{city.city}}
        </span>
        </li>
      </ul>
    </div>
</template>
<script>
 export default {
     data () {
       return {
         cityList: {}
       }
     },
     created () {
        this.$axios.get('static/data/cityList.json')
        .then((res) => {
            if (res.data.result.errorCode === 1) {
             this.cityList = res.data.data
             }
        })
        .catch((error) => {
           alert(error)
        })
     },
     computed: {
        cityFirstCode () {
            let firstCode = []
            let obj = {}
            let cityList = this.cityList
            for (let i = 0; i < cityList.length; i++) {
                if (!obj[cityList[i].firstcode]) {
                    firstCode.push(cityList[i].firstcode)
                    obj[cityList[i].firstcode] = 123
                }
            }
               return firstCode.sort()
        },
        cityName () {
          let cityList = this.cityList
          let allCity = []
          for (let i = 0; i < cityList.length; i++) {
            allCity.push(cityList[i].city)
          }
             return allCity
        }
     }
 }
</script>
<style scoped lang="stylus">
    .cityList
      width 400px
      height 300px
      background #fff
      border 1px solid #ccc
      overflow-y scroll
      padding 90px 20px 0 20px
      &:hover
        color red
      .position
        font-size 16px
        color #333
        border-bottom 1px solid #ccc
        margin 5px
    .firstCode
      font-size 18px
      color #333
      font-weight 700
      width 40px
      height 40px
      background #ccc
      opacity .9
      .cityName
        display inline-block
        font-size 14px
        color #333
        width 50px
</style>
