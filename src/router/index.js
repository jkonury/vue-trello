import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../component/Home.vue'
import Login from '../component/Login.vue'
import NotFound from '../component/NotFound.vue'
import Board from '../component/Board.vue'
import Card from '../component/Card.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:board_id', component: Board, beforeEnter: requireAuth,
      children: [
        { path: 'c/:card_id', component: Card, beforeEnter: requireAuth }
      ]},
    { path: '*', component: NotFound }
  ]
})

export default router
