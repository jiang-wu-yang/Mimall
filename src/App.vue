<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index.js'
export default {
  name:'app',
  components:{

  },
  data(){
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
    getUser(){
      
    },
    getCartCount(){

    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss'
</style>
