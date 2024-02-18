<template>
  <div>
    <input type="text" placeholder="Username" v-model="username" />
    <br /><br />
    <input type="password" placeholder=" Password" v-model="password" />
    <br /><br />
    <button type="Signin" v-on:click="click()">Sign in</button>
    <br /><br />
  </div>

  <div>
    <h3>Don’t have a account?</h3>
    <h3>Sign up</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref();
const password = ref();
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
  width: 309px;
  height: 30px;
  border-radius: 10px;
}
</style>
