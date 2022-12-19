<template>
  <el-config-provider namespace="ep">

    <FormSubmit></FormSubmit>
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
export default {
  components: {Button2}
}
</script>
