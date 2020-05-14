<template>
  <footer class="footer_guide border-1px">
    <!-- 使用对象语法（{}）的情况：类名确定(on)，不确定由还是没有这个类名 -->
    <!-- 当前路径等于请求路径则为on -->
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconicon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/search'}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont iconsearch"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/order'}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont iconorder"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/person'}" @click="goTo('/person')">
      <span class="item_icon">
        <i class="iconfont iconperson"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex

    .guide_item
      display flex
      // 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
      flex 1
      text-align center
      // 灵活的项目将垂直显示，正如一个列一样
      flex-direction column
      align-items center
      margin 5px
      color #999999

      &.on
        color #02a774

      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px

        .iconfont
          font-size 22px
</style>
