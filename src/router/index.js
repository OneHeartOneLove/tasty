/*
路由器对象模块
 */

import Vue from "vue";
import VueRouter from "vue-router";

// 引入路由组件
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Person from "../pages/Person/Person";
import Login from "../pages/Login/Login";


//声明使用插件
Vue.use(VueRouter)


export default new VueRouter({
  // 所有路由
  routes: [
    // 默认跳转到home页面
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },

  ]
})
