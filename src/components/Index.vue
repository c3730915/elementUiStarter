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
}
</script>

<style scoped>
#count_down{

}
</style>
