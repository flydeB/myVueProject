<template>
    <div>
      <ul>
        <li v-for="(item,index) in cinemaType" :key="index">
          <p>{{item}}</p>
        </li>
      </ul>

    </div>
</template>
<script>
    export default {
      props: ['data'],
      data () {
        return {
          movieAddress: this.data,
          region: ['朝阳区', '海淀区', '丰台区', '大兴区', '东城区', '西城区', '通州区', '房山区',
            '昌平区', '顺义区', '怀柔区', '门头沟', '石景山区', '密云区', '平谷区', '延庆区']
        }
      },
      computed: {
        cinemaType () {
          let allCinemaType = this.movieAddress.朝阳区
//          let box = []
//          for (let i = 0; i < allCinemaType.length; i++) {
//            box.push(allCinemaType)
//          }
          return allCinemaType
        }
      }
    }
</script>
<style spoted lang="stylus">
</style>
