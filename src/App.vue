<template>
  <el-config-provider namespace="ep">

<!--    <FormSubmit></FormSubmit>-->
    <br>
    <Layout2></Layout2>
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
import Button2 from "./components/Button2.vue"
import Layout2 from "./components/Layout2.vue";
export default {
  components: {Layout2, Button2}
}
</script>
