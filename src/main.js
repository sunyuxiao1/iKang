// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './stylesheets/main.scss'
import './modules/rem'
import Vue from 'vue'
import App from './App'
//  生产提示改成true不提示
Vue.config.productionTip = false


//router
 import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  //  相当于将el替换成app组件
  template: '<App/>'
})
