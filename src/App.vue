<template>
  <el-config-provider namespace="ep">

    <FormSubmit></FormSubmit>
    <br>
    <Layout1></Layout1>
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
import Layout1 from "./components/Layout1.vue";
export default {
  components: {Layout1, Button2}
}
</script>
