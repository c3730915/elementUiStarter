<template>
  <el-config-provider namespace="ep">
<!--    <BaseHeader />-->
<!--      <BaseSide />-->
<!--        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />-->
<!--        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />-->
        <CountDown></CountDown>
  </el-config-provider>
<!--  <CountDown></CountDown>-->
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
import CountDown from "./components/CountDown.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {HelloWorld, CountDown}
}
</script>
