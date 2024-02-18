<template>
  <div>
    <div class="Signin">
      <h1 style="padding-top: 100px">Signin</h1>
    </div>
    <br /><br />

    <div class="Signin" style="padding-top: 80px">
      <div></div>
      <!--:ซ้าย-->
      <div style="padding-left: 800px">
        <FormLogin />
      </div>
      <!--:ขวา-->
    </div>

    <div class="Signin">
      <h4 style="padding-top: 100px">Don’t have a account? </h4>
      <h3 style="padding-top: 100px" > Sign up</h3>
    </div>
  </div>
</template>

<script setup>
import FormLogin from "../components/FormLogin.vue";
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
</style>
