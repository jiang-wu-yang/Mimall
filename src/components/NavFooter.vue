<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt>
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href>我的主页</a>
      <span>|</span>
      <a href>vue项目</a>
      <span>|</span>
      <a href>全家桶</a>
      <span>|</span>
      <a href>全家桶</a>
    </div>
    <div class="copyright">20210610</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 1px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span{
        margin: 0 10px;
    }
    margin-bottom: 13px;
  }
}
</style>

