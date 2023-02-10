<template>
  <div class="echartView" @click="a++">echartView{{ a }}</div>
</template>

<script>
export default {
  name: "echartView",
  data() {
    return {
      a: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>