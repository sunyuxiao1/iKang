import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/pages/Home/Home.vue'
import Classify from '../components/pages/Classify/Classify.vue'
import Login from '../components/pages/login/Login.vue'

import Branch from '../components/pages/Branch/Branch.vue'
import DetailPage from '../components/pages/Classify/DetailPage/DetailPage.vue'
const router = new VueRouter({
	routes:[
	     {path:'*',redirect:'home'},
	     {path:'/home',name:'home',component:Home},
	     {path:'/classify',name:'classify',component:Classify},
	     {path:'/branch',name:'branch',component:Branch},
	     {path:'/login',name:'login',component:Login},
	     {path:'/detailpage',name:'detailpage',component:DetailPage}
	],
	scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
    }
})
export default router







