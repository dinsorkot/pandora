<template>
    <div>
        <h1 class="textcenter"> Sign up </h1>
    </div>
    <div class="">
        <div class="boxcenter">
            <input type="text" v-model="user.username" name="username" placeholder="Username" required>
        </div>
        <div class="boxcenter">
            <input type="password" v-model="user.password" name="password" placeholder="Password" required>
        </div>
        <div class="boxcenter">
            <input type="password" v-model="user.repeat_password" name="repeat_password" placeholder="Repeat password"
                required>
        </div>
        <div class="boxcenter">
            <input type="email" name="email" placeholder="Email" required v-model="user.email">
        </div>
    </div>
    <div class="buttoncenter1">
            <button class="colorbutton" @click="add_user">
                Next step
            </button>
    </div>
    <div class="lasttext">
        Already have a account?
        <RouterLink to="/" style="color: #FF8222; margin-left: 5px; ;"> Sign in</RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCreateUser } from '@/stores/createUser';
import router from '@/router';

const sign_in = useCreateUser();

const user = ref({
    username: "",
    password: "",
    repeat_password: "",
    email: "",
});

const add_user = () => {
    // Validation checks
    if (!user.value.username || !user.value.password || !user.value.repeat_password || !user.value.email) {
        // Alert or handle the error in a way that suits your application
        alert("Please fill in all fields");
        console.error("Please fill in all fields");
        return;
    }

    // Check if password and repeat_password match
    if (user.value.password !== user.value.repeat_password) {
        // Alert or handle the error in a way that suits your application
        alert("Passwords do not match");
        console.error("Passwords do not match");
        return;
    }

    // If all validations pass, proceed to the next step
    sign_in.new_user.username = user.value.username;
    sign_in.new_user.password = user.value.password;
    sign_in.new_user.email = user.value.email;
    console.log(sign_in.new_user);

    router.push('/R-faceID')
};
</script>

<style> .textcenter {
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

 .boxcenter ::placeholder {
     font-size: 15px;
     color: #979797;
     padding-left: 5%;

 }

 .boxcenter img {
     position: absolute;
     left: 1020px;
     top: 25px;
 }

 .boxcenter input {
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

 .colorbutton {
     width: 250px;
     height: 50px;
     border-radius: 10px;
     background-color: #FF8222;
     color: #ffffff;
     font-size: 20px;
 }

 .icons {
     width: 30px;
     height: 30px;
 }</style>
@/stores/createUser