<template>
  <!-- 由2部分组成 -->
  <div id="app">
    <!-- 上面是路由的部分 -->
    <router-view/>
    <!-- 下面是导航 -->
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  // 引入底部导航组件
  import FooterGuide from "./components/FooterGuide/FooterGuide";


  export default {
    name: "App",

    // 将组件映射成标签
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
