import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/pages/Home/Home.vue'
import Classify from '../components/pages/Classify/Classify.vue'
import DetailPage from '../components/pages/Classify/DetailPage/DetailPage.vue'
const router = new VueRouter({
	routes:[
	     {path:'*',redirect:'home'},
	     {path:'/home',name:'home',component:Home},
	     {path:'/classify',name:'classify',component:Classify},{path:'/detailpage',name:'detailpage',component:DetailPage}
	],
	scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
    }
})
export default router







