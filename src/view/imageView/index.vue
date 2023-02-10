<template>
  <div class="imageView">
    <div class="img" v-for="(item, index) in imgList" :key="index">
      <el-image :src="item.path" lazy></el-image>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageView",
  data() {
    return {
      imgList: [],
    };
  },
  created() {
    axios.get("/api/getImg").then((res) => {
      this.imgList = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.imageView {
  padding: 10px;
  column-count: 4;
  column-gap: 0;
}
.img {
  margin: 0 5px 10px;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>