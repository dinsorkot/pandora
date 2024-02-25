<template>
    <div class="head">
        <h1>Pandora Community</h1>
    </div>
    <div class="box1">
        <div class="box">
            <div class="box1" style="margin: 30px 0 0 0;">
                <div class="boxpost"> <!--กล่องpost-->
                    <div style="display: flex;">
                        <div class="profile" style="margin: 20px 0 0 20px;">
                            <img src="../assets/p5vy2s7tu0Xjg7IM2Tc-o.jpg" alt=""
                                style="width: 70px; height: 70px; border-radius: 20px;">
                        </div>
                        <div class="user">
                            <h1 style="color: #ffffff;">{{ usm.username }}</h1>
                            <input class="boxinput" placeholder="คุณคิดอะไรอยู่">
                            <button class="button">Post</button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="box1" style="margin: 30px 0 0 0;">
                <div class="boxpost"> <!--กล่องpost-->
                    <div style="display: flex;">
                        <div class="profile" style="margin: 20px 0 0 20px;">
                            <img src="../assets/p5vy2s7tu0Xjg7IM2Tc-o.jpg" alt=""
                                style="width: 70px; height: 70px; border-radius: 20px;">
                        </div>
                        <div class="user">
                            <h1 style="color: #ffffff;">{{ usm.username }}</h1>
                            <input class="boxinput" placeholder="คุณคิดอะไรอยู่">
                            <button class="button">Post</button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="box1" style="margin: 30px 0 0 0;">
                <div class="boxpost"> <!--กล่องpost-->
                    <div style="display: flex;">
                        <div class="profile" style="margin: 20px 0 0 20px;">
                            <img src="../assets/p5vy2s7tu0Xjg7IM2Tc-o.jpg" alt=""
                                style="width: 70px; height: 70px; border-radius: 20px;">
                        </div>
                        <div class="user">
                            <h1 style="color: #ffffff;">{{ usm.username }}</h1>
                            <input class="boxinput" placeholder="คุณคิดอะไรอยู่">
                            <button class="button">Post</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import { useInfoStore } from '../stores/user'
const store = useInfoStore();
const { getUserG, getUserE, getInfoUser, getPostedUser, userData, createPost, deletePost, postedsUser } = store;

var usm = ref(null);
var id_user = ref(null)
const post = ref('');

getUserG();
getUserE();
usm.value = getInfoUser();

setTimeout(function () {
    getPostedUser();
    id_user.value = userData();
}, 1000);
const handleCreatePost = () => {
    createPost(post.value, time, timeInNumber)
    post.value = ''
}

const edit = (uid) => {
    alertify.confirm("Are you want to delete post?",
        function () {
            deletePost(uid)
            alertify.success('YES');
        },
        function () {
            alertify.error('NO');
        });
}

</script>

<style scoped>
.head {
    text-align: center;
}

.box {
    width: 1000px;
    height: 1000px;
    border: 3px solid #FF8222;
    border-radius: 20px
}

.box1 {
    display: flex;
    justify-content: center;
}

.boxpost {
    width: 800px;
    height: 250px;
    background-color: #1E1E1E;
    border-radius: 20px
}

.user {
    margin: 20px 10px 0 50px;
    font-size: 20px;
}

.profile {
    margin: 0 0px 10px 0;
}

.boxinput {
    width: 600px;
    height: 130px;
    border-radius: 20px;
    margin: 10px 0 0 0;
    font-size: 30px;
}

.button {
    width: 100px;
    height: 30px;
    font-size: 17px;
    color: #000000;
    border-radius: 20px;
    margin: 15px 0 0 550px;
}

.box2 {
    margin: 10px 0px 0 0;
}
</style>