<template>
  <div >
    <div class=" Signin ">
      <h1>Signin</h1>
    </div>

    <div class=" Signin ">
      <div></div>
      <!--:ซ้าย-->
      <div >
        <FormLogin />
      </div>
      <!--:ขวา-->
    </div>
  </div>
</template>

<script setup>
import FormLogin from "../components/FormLogin.vue";
</script>

<style scoped>
.Signin{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
