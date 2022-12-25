<template>


    <div class="common-layout">
      <el-container>
        <el-header></el-header>
        <el-main>

          <el-row class="row-bg" justify="center">


          </el-row>


          <el-row class="row-bg" justify="center" >

            <el-col :span="18">

            </el-col>

          </el-row>



          <el-row :gutter="20">
            <el-col :span=20 :offset="3"
            ><div class="grid-content ep-bg-purple"
            />

            </el-col>
          </el-row>



        </el-main>
      </el-container>
    </div>

</template>


<script lang="ts" setup>

import {computed,onBeforeMount, reactive} from "vue";

const down_count =  reactive({
  month: 0,
  day: 0
})
onBeforeMount(() => {
  console.log('onBeforeMount')
  countTime()
})
function countTime() {
  //获取当前时间
  const date = new Date();
  const now = date.getTime();
  //设置截止时间
  var endDate = new Date("2024-08-03 23:23:23");
  var end = endDate.getTime();
  //时间差
  let leftTime = end-now;
  //定义变量 d,h,m,s保存倒计时的时间
  let d,h,m,s;
  if (leftTime>=0) {
    d = Math.floor(leftTime/1000/60/60/24);
    // h = Math.floor(leftTime/1000/60/60%24);
    m = Math.floor(leftTime/1000/60%60);
    // s = Math.floor(leftTime/1000%60);
    down_count.month = m;
    down_count.day = d;
  }
}
</script>

<style scoped>
#count_down{

}
</style>
