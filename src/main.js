/*
入口JS
 */

import Vue from 'vue'
import App from "./App";

// 引入路由器（引入的是文件夹）
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),

    // 配置路由器（配置完产生以下结果）
    // 1、多了组件标签：router-link，router-view，keep-alive；
    // 2、多了属性：$route, $router
    router
})
