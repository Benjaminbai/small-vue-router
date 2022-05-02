import Vue from 'vue'
import VueRouter from '../myRouter'

import HomePage from '../views/home'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about')
    },
]

const router = new VueRouter({ routes })

export default router