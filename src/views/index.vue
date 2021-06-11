<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,a) in item" :key="a">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img" alt>
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">箱包 电话卡</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptionTop">
          <swiper-slide v-for="(item,i) in slideList" :key="i" data-swiper-autoplay="5000">
            <a :href="'/product/'+item.id">
              <img :src="item.img" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/product/'+item.id" v-for="(item,i) in adsList" :key="i">
          <img :src="item.img" alt>
        </a>
      </div>
      <div class="banner">
        <a href="/product/30">
          <img src="/imgs/banner-1.png" alt>
        </a>
      </div>
      <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/product/25">
                <img src="/imgs/mix-alpha.jpg" alt>
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(item,i) in phoneList" :key="i">
                <div class="item" v-for="(arr,a) in item" :key="a">
                  <span>新品</span>
                  <div class="item-img">
                    <img :src="arr.img" alt>
                  </div>
                  <div class="item-info">
                    <h3>{{arr.name}}</h3>
                    <p>{{arr.content}}</p>
                    <p class="price">{{arr.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <server-bar></server-bar>
  </div>
</template>

<script>
import ServerBar from "../components/ServerBar.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    ServerBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米cc9"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米cc9"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米cc9"
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米9",
            content: "晓龙6245，看了看撒讲道理卡上",
            price: 2999
          },
        ],
      ]
    };
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 10;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          &:hover {
            .children {
              display: block;
            }
            background-color: $colorA;
          }
          a {
            display: block;
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgimg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
    .banner {
      margin-bottom: 50px;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
            }
            .item-img {
              img {
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &::after {
                  content: "";
                  margin-left: 5px;
                  vertical-align: middle;
                  @include bgimg(22px, 22px, "/imgs/icon-cart-hover.png");
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

