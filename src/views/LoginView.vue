<template>
  <div>
    <div class="Signin">
      <h1 style="padding-top: 100px ; ">Sign In</h1>
    </div>
    <br /><br />

    <div class="Signin ND" style="padding-top: 80px">
      <div style="width: 400px;"> <FaceLogin/></div><!--:ซ้าย-->
      <div style="width: 3px; height : 400px ; background : aliceblue" class="btv" >     </div> <!--:เส้น-->
      <div style="padding-left: 350px"><FormLogin /></div><!--:ขวา-->
    </div>

    <div class="Signin">
      <h4 style="padding-top: 100px">Don’t have a account? </h4>
      <h3 style="padding :  100px  0px 0px 10px;  " > Sign up</h3>
    </div>
  </div>
</template>

<script setup>

import FaceLogin from "../components/FaceLogin.vue"
import FormLogin from "../components/FormLogin.vue";

import { useLoginEmail } from '../stores/loginemail';
const storeE = useLoginEmail();

const { signinEmail } = storeE;
</script>

<style scoped>
.Signin {
  display: flex;
  justify-content: center;
  align-items: center;
}
h3{
   color :#ff8222;
}

.ND{
  position: relative;
}

.ND .btv{
position: absolute;
display: flex;
justify-content: center;
}
</style>
