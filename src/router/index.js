import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import common from '../components/Common'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: common,
        children: [{
            path: '',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('../views/details/Detail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router