import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/pages/Home/Home.vue'
import Hot from '../components/pages/Hot/Hot.vue'
const router = new VueRouter({
	routes:[
	     {path:'',redirect:'/home'},
	     {path:'/home',name:'home',component:Home},
	     {path:'/hot',name:'hot',component:Hot}
	],
	scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
    }
})
export default router