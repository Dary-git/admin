import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/view/login')
    }, {
        path: '/index',
        name: 'index',
        redirect: '/imageView',
        component: () => import('@/view/index'),
        children: [
            {
                path: '/imageView',
                name: 'imageView',
                component: () => import('@/view/imageView')
            }, {
                path: '/imageView2',
                name: 'imageView2',
                component: () => import('@/view/imageView2')
            }, {
                path: '/videoView',
                name: 'videoView',
                component: () => import('@/view/videoView')
            }, {
                path: '/videoView2',
                name: 'videoView2',
                component: () => import('@/view/videoView2')
            }, {
                path: '/echartView',
                name: 'echartView',
                component: () => import('@/view/echartView')
            }, {
                path: '/echartView2',
                name: 'echartView2',
                component: () => import('@/view/echartView2')
            }
        ]
    }
]

let router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
    let username = localStorage.getItem('username')
    if(username) {
        next()
    } else {
        if(to.path === '/') {
            next()
        } else {
            next('/')
        }
    }
    next()
})

export default router