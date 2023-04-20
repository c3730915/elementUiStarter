<template>
  <el-config-provider namespace="ep">

    <router-view></router-view>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
<script>
import HelloWorld from "./views/HelloWorld.vue"
import Login from "./views/Login.vue";
import PhotoAlbum from "./views/PhotoAlbum.vue";
export default {
  components: {Login, HelloWorld,PhotoAlbum}
}
</script>
