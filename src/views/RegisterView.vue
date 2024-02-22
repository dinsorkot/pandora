<template>
    <div>
        <h1 class="textcenter"> Sign up </h1>
    </div>
    <div class="">
        <div class="boxcenter">
            <input type="text" v-model="username" name="username" placeholder="Username" >
            <img class="icons" src="../assets/icons8-person-64.png" alt="">
        </div>
        <div class="boxcenter">
            <input type="password" v-model="password" name="password" placeholder="Password">
            <img class="icons" src="../assets/icons8-key-30.png" alt="">
        </div>
        <div class="boxcenter">
            <input type="password" v-model="repeat_password" name="repeat_password" placeholder="Repeat password">
            <img class="icons" src="../assets/icons8-key-30.png" alt="">
        </div>
        <div class="boxcenter">
            <input type="email" v-model="email" name="email" placeholder="Email">
            <img class="icons" src="../assets/icons8-email-100 (1).png" alt="">
        </div>
    </div>
    <div class="buttoncenter1" >
        <button  class="colorbutton" 
        @click="createUser(username,password,repeat_password,email)">Sign up</button>
    </div>
    <div class="lasttext">
        Already have a account?
        <a style="color: #FF8222; margin-left: 5px; ;" href="/sign_in">Sign in</a>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCreateUser } from '../stores/createEmail'

const storeC = useCreateUser();
const { createUser } = storeC

const username = ref();
const password = ref();
const repeat_password = ref();
const email = ref();

function click_Alert() {
    console.log("usernane = ", username.value);
    console.log("password = ", password.value);
    console.log("repeatpassword = ", repeat_password.value);
    console.log("email = ", email.value);
}

</script>

<style> 
.textcenter {
    /*ตัวเเรกเลย*/
    text-align: center;
    margin-top: 10%;
    margin-bottom: 5%;
}
.boxcenter {
    /*ตรงfrom*/
    display: flex;
    padding: auto;
    margin: auto;
    justify-content: center;
    position: relative;
}
.boxcenter ::placeholder{
    font-size: 15px;
    color: #979797;
    padding-left: 5%;
   
}
.boxcenter img{
    position: absolute;
    left: 1020px;
    top: 25px;
}
.boxcenter input{
    width: 250px;
    height: 50px;
    margin: 15px 0px 0px 0px;
    padding-left: 10px;
    border-radius: 10px;
    background-color: #3C394C;
    color: #ffffff;
    border: 0;
}
.buttoncenter1 {
    /*ปุ่มกด*/
    display: flex;
    justify-content: center;
    margin: 2%;
}

.lasttext {
    /*sign in*/
    display: flex;
    justify-content: center;
    margin-top: 5%;
    font-size: 20px;
}

.colorbutton{
    width: 250px;
    height: 50px;
    border-radius: 10px;
    background-color: #FF8222;
    color: #ffffff;
    font-size: 20px;
}
.icons{
    width: 30px;
    height: 30px;
}
</style>
