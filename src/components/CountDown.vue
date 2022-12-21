<template>


    <div class="common-layout">
      <el-container>
        <el-header></el-header>
        <el-main>

          <el-row class="row-bg" justify="center">
            <el-col :span="18"><div class="grid-content ep-bg-purple" />
              <div style="font-size: 20px;">
                <el-icon><Position /></el-icon>距离润还有
                <span style="color: red">
               {{down_count.day}} 天
                </span>

              </div>

            </el-col>
          </el-row>


          <el-row class="row-bg" justify="center" >

            <el-col :span="18">
              <div class="grid-content ep-bg-purple" style="margin-top: 100px;" >
                <el-steps :active="2" align-center direction="vertical" :space = 150 finish-status="success">
                  <el-step icon = "Search" title="选目的地" description="办理护照，挑选目的地，研究移民政策" />
                  <el-step icon = "Reading" title="英语成绩" description="雅思总分不得低于6.5 小分不低于6" />
                  <el-step  icon = "Files" title="研究生offer" description="准备文书，简历，推荐信等。获得学校offer" />
                  <el-step icon = "Checked" title="签证" description="通过学校offer申请签证" />
                  <el-step icon = "Guide" title="离境" description="到达目的国家" />
                </el-steps>
              </div>
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
