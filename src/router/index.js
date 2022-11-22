import VueRouter from 'vue-router'
const router = [
    {
        path: '/header',
        name: 'header',
        component: () => require('@/header')
    }
]

export default new VueRouter({router})