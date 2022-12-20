<template>

  <el-row :gutter="20">
    <el-col :span="5"><div class="grid-content ep-bg-purple" />
      <el-alert title="success alert" type="success" />
    </el-col>
    <el-col :span="5"><div class="grid-content ep-bg-purple-light" />
      <el-alert title="info alert" type="info" />
    </el-col>
    <el-col :span="5"><div class="grid-content ep-bg-purple" />
      <el-alert title="warning alert" type="warning" />
    </el-col>
    <el-col :span="5"><div class="grid-content ep-bg-purple-light" />
      <el-alert title="error alert" type="error" />
    </el-col>
  </el-row>

</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border-color: red;
  height: 20px;
}
</style>

<script>
export default {
  name: "Layout1"
}
</script>
