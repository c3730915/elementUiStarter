<template>
  <div class="demo-image__preview">

<!--    <el-image-->
<!--        style="width: 100px; height: 100px;margin-left: 20px"-->
<!--        v-for="item in srcList"-->
<!--        :src="item"-->
<!--        :zoom-rate="1.2"-->
<!--        :preview-src-list="srcList"-->
<!--        fit="cover"-->
<!--    />-->

    <viewer :images="srcList">
      <img
          :key="index"
          v-for="(item,index) in srcList"
          :src="item"
          style="width: 128px; height: 128px; margin-left: 20px;margin-bottom: 20px"
      />
    </viewer>
  </div>
</template>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: "PhotoAlbum",
  data(){
    const url =
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    const srcList = [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    ]

    return {
      url,srcList
    }
  }
}
</script>
