<template>
    <el-container>
        <el-header class="header">
            <headerS></headerS>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <asideS></asideS>
            </el-aside>
            <el-main>
                <el-header class="tab" key="tab" height="auto"><tab></tab></el-header>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import headerS from './header.vue'
import asideS from './aside.vue'
import tab from './tab.vue'
export default {
    components: {
        headerS,
        asideS,
        tab
    },
    data() {
        return {

        }
    },
}
</script>
``
<style lang="scss" scoped>
.el-container {
    height: 100%;
}

.el-header {
    border-bottom: .5px solid gray;
}

.tab {
    background: seagreen;
}

.el-aside {
    overflow: auto;
}

.el-main {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    background: rgb(94, 82, 74);
}
</style>