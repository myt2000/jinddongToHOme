import { useStore } from 'vuex'
import { computed } from 'vue'
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId,
      productId,
      productInfo,
      num
    })
    // console.log(shopId, productId, productInfo)
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })
  return { changeCartItemInfo, cartList, productList }
}
