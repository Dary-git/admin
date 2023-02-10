<template>
  <div class="videoView2" @click="a++">videoView2{{ a }}</div>
</template>

<script>
export default {
  name: "videoView",
  data() {
    return {
      a: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>