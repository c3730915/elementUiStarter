<template>

  <el-row class="row-bg" justify="center">
    <div class="col-md-7 col-lg-5">
      <div class="login-wrap p-4 p-md-5">

        <div class="icon d-flex align-items-center justify-content-center">
          <i class='fas fa-user-circle' style="color: white; font-size:40px"></i>

        </div>
        <h3 class="text-center mb-4">Sign In</h3>
        <form action="#" class="login-form">
          <div class="form-group">
            <input type="text" class="form-control rounded-left" v-model="userName" placeholder="Username" required>
          </div>
          <div class="form-group d-flex">
            <input type="password" class="form-control rounded-left" v-model="password" placeholder="Password" required>
          </div>
          <div class="form-group">
            <button type="submit" @click="submitForm" class="form-control btn btn-primary rounded submit px-3">Login
            </button>
          </div>
          <div class="form-group d-md-flex">
<!--              <el-checkbox  label="" size="large" v-model="isRemember" />-->
<!--              <label class="checkbox-wrap checkbox-primary">Remember Me-->
<!--              </label>-->
            <div   style="color: #1089ff;size: 120px;font-style: italic">
              <el-checkbox v-model="checked1"  label="remember me" size="large" />
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
import 'https://kit.fontawesome.com/a076d05399.js'
import {ref} from "vue";
let isAble = ref(false)
export default {
  name: "Layout2",

  data(){
    return {
      isAble:true,
      sizeIndex:0,
      sizeEnum:['small','default','large'],
      checked1:false,
      userName:"",
      password:"",

    }
  },
  computed:{
    currentSize(){
      return this.sizeEnum[this.sizeIndex]
    }
  },
  methods:{
    submitForm(){
      console.log("submit form, userName is:",this.userName);

    },
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
