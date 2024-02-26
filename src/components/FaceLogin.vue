<template>
  <div>
    <div class="SJM" >
      <div class="SJM EIEI" @click="router.push('/L-faceId')">
        <img src="./icons/icons8-face-id-100.png" alt="" class="SJM" />
      </div>
    </div>
    <div class="SJM"><h4>Sign in with face id</h4></div>
  </div>
</template>

<script setup>
import router from '@/router';


</script>

<style scoped>
.SJM {
  display: flex;
  justify-content: center;
  align-items: center;
}
.EIEI {
  background: #ff822273;
  border-radius: 100px;
  width: 150px;
  height: 150px;
}
</style>
