<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <router-link :to="`/shop/${item._id}`" v-for="item in nearbyList" :key="item._id"  >
            <Shopinfo :item="item"/>
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import Shopinfo from '../../components/Shopinfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/user/hot-list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
      // console.log(result.data)
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { Shopinfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    // console.log(nearbyList)
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.nearby {
    &__title {
        margin: 0.16rem 0 0.02rem 0;
        font-size: 0.18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }
}
a {
  text-decoration: none;
}
</style>
