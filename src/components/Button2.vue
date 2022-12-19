<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main
          <el-row :gutter="20">
            <el-col :span="12" :offset="6"
            ><div class="grid-content ep-bg-purple"
            />
                <div>
                  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
                  <el-link type="primary" >primary</el-link>
                </div>

            </el-col>
          </el-row>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>


    </div>


</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import axios from "axios";

const danger = ref(null)

function getData() {
  axios({
    method: 'get',
    baseURL: 'http://localhost:8082',
    url: '/test',
    'Content-Type': 'application/json',
  })
      .then((result) => {
        console.log(result.data)
        console.log(result.data.name)
        // process_data(JSON.parse(result.data))
      })
      .catch((err) => {
        console.error(err)
      })
}

function process_data(){
  console.log("process data, name is:",data['name'])
}
</script>
<style>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
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
}
</style>
