import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../component/Home.vue'
import Login from '../component/Login.vue'
import NotFound from '../component/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})

export default router