<template>
  <div class="videoView" @click="a++">videoView{{ a }}</div>
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