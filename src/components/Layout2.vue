<template>

  <el-row class="row-bg" justify="center">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /> 666666</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>


</template>
<script>
import {ref} from "vue";
let isAble = ref(false)
export default {
  name: "Layout2",

  data(){
    return {
      isAble:true,
      sizeIndex:0,
      sizeEnum:['small','default','large']
    }
  },
  computed:{
    currentSize(){
      return this.sizeEnum[this.sizeIndex]
    }
  },
  methods:{
    reverseEnable(){
      this.isAble = ! this.isAble;
      console.log("button click, isAble:",isAble)

    },
    changeSize(){
      this.sizeIndex++;
      console.log("change size")
      if (this.sizeIndex >= 3){
        this.sizeIndex = 0;
      }
      console.log(this.sizeIndex)
    },
    getSize(){
      console.log("1111")
      console.log(this.sizeEnum.at(this.sizeIndex))
      return this.sizeEnum.at(this.sizeIndex)
    }
  }
}
</script>
