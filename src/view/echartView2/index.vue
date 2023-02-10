<template>
  <div class="echartView2" @click="a++">echartView2{{ a }}</div>
</template>

<script>
export default {
  name: "echartView2",
  data() {
    return {
      a: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>