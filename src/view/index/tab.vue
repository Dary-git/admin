<template>
  <div class="tab">
    <div
      v-for="(data, index) in tabList"
      :key="index"
      :class="{ tabs: true, active: name === data }"
      @click="activeFun(data)"
    >
      <p>{{ data }}</p>
      <span v-if="tabList.length !== 1" @click.stop="tabClose(data)">X</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tabList"]),
    name() {
      let name = this.$route.name;
      return name;
    },
  },
  methods: {
    ...mapActions(["closeTab"]),
    activeFun(name) {
      if (this.name === name) return;
      this.$router.push({ name });
    },
    tabClose(value) {
      let name = null;
      let idx = this.tabList.findIndex((v) => v === value);
      if (idx === this.tabList.length - 1 && this.tabList.length > 1) {
        name = this.tabList[idx - 1];
      } else if (this.tabList.length === 1) {
        name === null;
      } else {
        name = this.tabList[idx + 1];
      }
      if (name) {
        this.activeFun(name);
        this.closeTab(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  align-items: center;
  width: 100%;
}
.tabs {
  border: 1px solid;
  padding: 0 5px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: gainsboro;
  }
  &.active {
    background: gainsboro;
  }
}
</style>