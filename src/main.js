// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './stylesheets/main.scss'
import './modules/rem'
import Vue from 'vue'
import App from './App'
import 'animate.css'
 import axios from 'axios'
 Vue.prototype.$http=axios
//  生产提示改成true不提示
Vue.config.productionTip = false


//router
 import router from './router'


import './modules/rem'



//import router from './router'

Vue.config.productionTip = false


//引入全局scss
import './stylesheets/main.scss'



/* eslint-disable no-new */
new Vue({
  el: '#app',
//router,
  components: { App },

  router,
  //  相当于将el替换成app组件
  template: '<App/>',
  

  //相当于将el直接替换成App组件
  template: '<App/>'

})
