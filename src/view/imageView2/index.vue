<template>
  <div class="imageView2" @click="a++">imageView2{{ a }}</div>
</template>

<script>
export default {
  name: "imageView2",
  data() {
    return {
      a: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>