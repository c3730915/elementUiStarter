<template>

  <el-row class="row-bg" justify="center">
    <div class="col-md-7 col-lg-5">
      <div class="login-wrap p-4 p-md-5">
<!--        <div>-->
<!--          <el-icon :size="size" :color="color">-->
<!--            <Edit />-->
<!--          </el-icon>-->
<!--          &lt;!&ndash; 或者独立使用它，不从父级获取属性 &ndash;&gt;-->
<!--        </div>-->

        <div>
          <el-avatar :icon="UserFilled" />
        </div>
        <h3 class="text-center mb-4">Sign In</h3>
        <form action="#" class="login-form">
          <div class="form-group">
            <input type="text" class="form-control rounded-left" placeholder="Username" required>
          </div>
          <div class="form-group d-flex">
            <input type="password" class="form-control rounded-left" placeholder="Password" required>
          </div>
          <div class="form-group">
            <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login
            </button>
          </div>
          <div class="form-group d-md-flex">
            <div class="w-50">
              <label class="checkbox-wrap checkbox-primary">Remember Me
                <input type="checkbox" checked>
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="w-50 text-md-right">
              <a href="#">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    </div >
  </el-row>


</template>

<style scoped>
@import "../assets/css/style-login.css";
</style>
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
