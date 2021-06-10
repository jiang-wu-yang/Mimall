<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOptionTop" class="swiper-container">
          <swiper-slide v-for="(item,i) in slideList" :key="i">
            <a :href="'/product/'+item.id">
              <img :src="item.img" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <server-bar></server-bar>
  </div>
</template>

<script>
import ServerBar from "../components/ServerBar.vue";
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min';

export default {
  name: "index",
  components: {
    ServerBar
  },
  data() {
    return {
      swiperOptionTop: {
        
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
      ]
    };
  }
};
</script>
<style lang="scss">
.index {
  .swiper-box {
    .swiper-container{
      height: 451px;
      img {
        width: 100%;
      }
    }
  }
}
</style>

