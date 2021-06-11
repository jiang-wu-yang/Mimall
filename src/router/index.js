import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderList from '../views/orderList.vue'
import OrderComfirm from '../views/orderConfirm.vue'
import OrderPay from '../views/orderPay.vue'
import AliPay from '../views/aliPay.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/index',
    children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'comfirm',
        name: 'order-comfirm',
        component: OrderComfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: AliPay
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router