<template>

  <div class="flex">
    <el-button color="#626aef"  @click="isAble = !isAble">Default</el-button>

    <el-button color="#626aef" :disabled="isAble" :size="currentSize">try disable</el-button>
  </div>


</template>
<script>
import {ref} from "vue";
let isAble = ref(false)
export default {
  name: "Layout1",

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
