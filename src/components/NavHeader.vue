<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascri:;">小米商城</a>
          <a href="javascri:;">MUI</a>
          <a href="javascri:;">云服务</a>
          <a href="javascri:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascri:;" v-if="username">{{username}}</a>
          <a href="javascri:;" @click="gologin" v-if="!username">登录</a>
          <a href="javascri:;" v-if="username">我的订单</a>
          <a href="javascri:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span> 购物车{{cartCount}}
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,i) in phoneList" :key="i">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt>
                    </div>
                    <div class="pro-name">{{item.title}}</div>
                    <div class="pro-price">{{item.price}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,i) in RedphoneList" :key="i">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt>
                    </div>
                    <div class="pro-name">{{item.title}}</div>
                    <div class="pro-price">{{item.price}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,i) of 6" :key="i">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt>
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      // username: this.$store.state.username,
      phoneList: [
        {
          img:'/imgs/nav-img/nav-1.png',
          title:'小米cc9',
          price:1799
        },
        {
          img:'/imgs/nav-img/nav-2.png',
          title:'小米cc9',
          price:1799
        },
        {
          img:'/imgs/nav-img/nav-3.png',
          title:'小米cc9',
          price:1400
        },
        {
          img:'/imgs/nav-img/nav-4.png',
          title:'小米cc9',
          price:1399
        },
        {
          img:'/imgs/nav-img/nav-5.png',
          title:'小米cc9',
          price:200
        },
        {
          img:'/imgs/nav-img/nav-6.png',
          title:'小米cc9',
          price:1899
        },
      ],
      RedphoneList: [
        {
          img:'/imgs/nav-img/nav-3-1.jpg',
          title:'小米cc9',
          price:1799
        },
        {
          img:'/imgs/nav-img/nav-3-2.jpg',
          title:'小米cc9',
          price:1799
        },
        {
          img:'/imgs/nav-img/nav-3-3.png',
          title:'小米cc9',
          price:1400
        },
        {
          img:'/imgs/nav-img/nav-3-4.jpg',
          title:'小米cc9',
          price:1399
        },
        {
          img:'/imgs/nav-img/nav-3-5.jpg',
          title:'小米cc9',
          price:200
        },
        {
          img:'/imgs/nav-img/nav-3-6.png',
          title:'小米cc9',
          price:1899
        }
      ]
    };
  },
  computed:{
    username(){
      return this.$store.state.username;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }
  },
  methods: {
      gologin(){
          this.$router.push('/login');
      },
    goToCart(){
        this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #cccccc;
    color: #0b0b0b;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #0b0b0b;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          @include bgimg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: "";
            @include bgimg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            z-index: 20;
            transition: all 0.5s;
            background-color: #fff;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                color: $colorB;
                margin-bottom: 8px;
              }
              .pro-price {
                color: $colorA;
              }
              &::before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wapper {
          height: 50px;
          border: 1px solid #101010;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-left: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgimg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

