<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="mask"></div>
      <div class="model-dialog">
        <div class="model-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="model-body">
          <slot name="body"></slot>
        </div>
        <div class="model-footer">
            <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "model",
  props: {
    //弹框类型 小  中 大
    modelType: {
      type: String,
      default: "form"
    },
    //弹框标题
    title: String,
    //按钮类型1确定  2取消  3确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModel: Boolean
  }
};
</script>

<style>
</style>
