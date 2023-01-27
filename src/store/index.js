import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
        tabList: []
    },
    getters: {},
    mutations: {
        SET_TABLIST({tabList},info) {
            if(tabList.includes(info)) return
            tabList.push(info)
        }
    },
    actions: {
        setTabList({commit},info) {
            commit('SET_TABLIST', info)

        }
    }
})