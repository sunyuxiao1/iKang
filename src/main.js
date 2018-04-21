// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './modules/rem'


import Vue from 'vue'
import App from './App'
//import router from './router'

Vue.config.productionTip = false


//引入全局scss
import './stylesheets/main.scss'


/* eslint-disable no-new */
new Vue({
  el: '#app',
//router,
  components: { App },
  //相当于将el直接替换成App组件
  template: '<App/>'
})
