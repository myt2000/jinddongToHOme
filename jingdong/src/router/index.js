import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      // console.log('beforeEnter', to, from)
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    // 访问login页面之前会执行
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      // console.log('beforeEnter', to, from)
    }
  },
  {
    path: '/CartList',
    name: 'CartList',
    // component: Home,
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// to是跳转来的路由， from是从哪来的路由
// beforeeach 路由切换执行
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })
  // console.log('beforeEach', to, from)
  // if (isLogin || to.name === 'Login') {
  //   next()
  // } else {
  //   next({ name: 'Login' })
  // }
})

export default router
