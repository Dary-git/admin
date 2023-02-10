<template>
  <el-container>
    <el-header class="header">
      <headerS></headerS>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <asideS></asideS>
      </el-aside>
      <el-main ref="a">
        <el-header class="tab" key="tab" height="auto"><tab></tab></el-header>
        <keep-alive :include="tabList">
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import headerS from "./header.vue";
import asideS from "./aside.vue";
import tab from "./tab.vue";
export default {
  components: {
    headerS,
    asideS,
    tab,
  },
  computed: {
    ...mapState(["tabList"]),
    name() {
      let name = this.$route.name;
      return name;
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
``
<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.header {
  border-bottom: 0.5px solid gray;
}

.tab {
  border-bottom: 1px solid gray;
}

.el-aside {
  overflow: auto;
  border-right: 0.5px solid gray;
}

.el-main {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>