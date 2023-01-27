import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// axios 引入与配置
import './api'

// 全局样式引入
import '@/styles/index.css'

// element样式引入
import 'element-ui/lib/theme-chalk/index.css'

// iconfont引入
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    store,
    render: h=>h(App)
})