<template>
    <div class="aside">
        <el-tree 
            ref="tree"
            :data="data" 
            highlight-current 
            :props="defaultProps"
            node-key="name"
            :default-expand-all="true"
            @node-click="handleNodeClick"
            >
        </el-tree>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            data: [{
                name: 'image',
                children: [{
                    path: '/imageView',
                    name: 'imageView',
                }, {
                    path: '/imageView2',
                    name: 'imageView2',
                }]
            }, {
                name: 'video',
                children: [{
                    path: '/videoView',
                    name: 'videoView',
                }, {
                    path: '/videoView2',
                    name: 'videoView2',
                }]
            }, {
                name: 'echart',
                children: [{
                    path: '/echartView',
                    name: 'echartView',
                }, {
                    path: '/echartView2',
                    name: 'echartView2',
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            nameRoute: ''
        }
    },
    watch: {
        '$route': {
            deep: true,
            handler(val) {
                this.nameRoute = val.name
                this.$refs.tree.setCurrentKey(val.name)
            }
        }
    },
    mounted() {
        this.nameRoute = this.$route.name
        this.$refs.tree.setCurrentKey(this.nameRoute)
        this.setTabList(this.nameRoute)
    },
    methods: {
        ...mapActions(['setTabList']),
        handleNodeClick(data) {
            if (!data.hasOwnProperty('children') && this.nameRoute !== data.name) {
                this.$router.push({ name: data.name })
                this.setTabList(data.name)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.el-tree {
    color: #000;
    font-weight: 900;
}

::v-deep .el-tree-node__content {
    height: 40px;
}

::v-deep .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #c36c6c;
    color: #fff;
}
</style>