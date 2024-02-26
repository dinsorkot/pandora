<template>
  <div>
    <div class="box">
      <input type="text" placeholder="Username" id="email" v-model="Email" required /><img
        src="./icons/icons8-user-96.png"
        alt=""
        style="width: 30px; height: 30px"
      />
    </div>

    <div class="box top">
      <input  type="password" id="password" v-model="Password" placeholder="Password"/>
      

      <img
        src="./icons/icons8-eye-100.png"
        alt=""
        style="width: 30px; height: 30px"
         @click="toggleShow"
      />
  
    </div>

    <button
      style="color: aliceblue; font-size: 30px"
      type="submit"
      @click="signinEmail(Email, Password)"
      class="top"
    >
      Sign in
    </button>
    <br /><br />
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref();
import { useLoginEmail } from '../stores/loginemail';
const storeE = useLoginEmail();

const { signinEmail } = storeE;


const Email = ref();
const Password = ref();

function click() {
  console.log("username ", username.value);
  console.log("password ", password.value);
}
</script>

<style scoped>
input {
  background: #3c394c;
  color: aliceblue;
  width: 309px;
  height: 30px;
  border-radius: 10px;
  border: 0;
  padding: 15px;
}
button {
  background: #ff8222;
  width: 340px;
  height: 50px;
  border-radius: 10px;
  border: 0;
}
.box {
  position: relative;
}
.box img {
  position: absolute;
  left: 290px;
  top: 15px;
}

.top {
  margin-top: 20px;
}
</style>
