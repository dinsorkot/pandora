<script setup>
import { ref } from "vue";
import { db } from "/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DataState } from "../stores/dataStatement";
import { storeToRefs } from "pinia";

const data = DataState();
const { showamount,numberStatement,sumStatement} = storeToRefs(data);
const { User, getuser, Statement } = data;

const auth = getAuth();
const Data = ref({ id: "", TypeStatement: "", amount: 0 });
const uid = ref();
const open = ref(false);
const userid = ref(null);
getuser();

onAuthStateChanged(auth, (User) => {
  if (User) {
    uid.value = User.uid;
    console.log(uid.value);
    console.log(showamount);
    Data.value.id = uid;
  } else {
    // User is signed out
  }
});

setTimeout(function () {
  Statement();
  console.log("show data : " + showamount.value);
  console.log("NumberState : ",numberStatement);
  console.log("NumberState : ",sumStatement);
  userid.value = User();
}, 1000);

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "Statement"), Data.value);
    console.log("Document written with ID: ", docRef.id);
    alert("Add data success");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>

<template>
  <div><h2 style="margin-left: 50px">บัญชีเงินฝาก</h2></div>
  <div class="boxcenter">
    <div class="boxUser">
      <div style="display: flex">
        <div >
          <div class="boxtext"><h3 class="textmargin">Username</h3></div>
          <div class="boxtext" ><h3 class="textmargin">{{ showamount.ID }}</h3></div>
          <div class="boxtext"><h3 class="textmargin">ยอดเงินคงเหลือ (บาท)</h3></div>
          <div class="boxtext"><h1 class="textmargin">{{ sumStatement }}</h1></div>
          <div class="boxtext"><h3 class="textmargin">ยอดเงินที่ใช้ได้ (บาท)</h3></div>
        </div>
        <div>
          <div class="boxlogo">
            <img src="../assets/monpt.jpg" style="width: 150px; height: 150px" />
          </div>
          <div class="boxmoney">
            <div><h2 class="textmarginright">{{ sumStatement }}</h2></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <button
      @click="open = true"
      type="button"
      style="
        margin-left: 73%;
        margin-top: 20px;
        background-color: brown;
        font-size: 16px;
        border-radius: 10px;
      "
    >
      เพิ่มรายการ
    </button>

    <Teleport to="body">
      <div v-if="open" class="modal">
        <div>
          <div class="boxinput">
            <select
              v-model="Data.TypeStatement"
              required
              style="
                width: 300px;
                height: 50px;
                text-align: center;
                margin-top: 12%;
                border-radius: 10px;
              "
            >
              <option disabled value="">Please select one</option>
              <option >Income</option>
              <option>Expenses</option>
            </select>
          </div>
          <div class="boxinput" >
          
            <input
            
              type="number"
              style="
                width: 300px;
                height: 30px;
                text-align: center;
                margin-top: 20px;
                border-radius: 10px;
              "
              placeholder="ระบุเงิน"
              v-model="Data.amount"
              required
            />
          </div>
          <div class="boxinput" style="margin-top: 20px">
            <button
              @click="addData()"
              style="width: 100px; height: 40px; border-radius: 10px"
            >
              Confirm
            </button>
          </div>
        </div>
        <button
          @click="open = false"
          style="
            margin-left: 93%;
            margin-top: 80px;
            color: aliceblue;
            background-color: black;
            font-size: 30px;
            border-radius: 10px;
          "
        >
          X
        </button>
      </div>
    </Teleport>
  </div>
  <div class="boxaccout">
    <div class="accout">
      <div><h2 style="margin-left: 20px">รายการย้อนหลัง</h2></div>
      <div v-for="(values, key) in showamount" :key="key">
      <div >
        <div
          style="border-radius: 25px"
        >
        <div v-if="values.ID==userid">
          <div v-if="values.TypeStatemented=='Income'"
        style="
          display: flex;
          background-color: rgb(15, 143, 255);
          height: 85px;
          margin: 20px 50px 0 50px;
          border-radius: 10px;
        "
      >
        <div class="boxIncome">{{values.TypeStatemented}}</div>
        <div class="boxIncome">
          <div>วันที่</div>
          <div>{{values.amounted}}</div>
        </div>
      </div>
      <div v-if="values.TypeStatemented=='Expenses'"
        style="
          background-color: rgb(239, 0, 0);
          display: flex;        
          height: 85px;
          margin: 20px 50px 0 50px;
          border-radius: 10px;
        "
      >
        <div class="boxIncome">{{values.TypeStatemented}}</div>
        <div class="boxIncome">
          <div>วันที่</div>
          <div>{{values.amounted}}</div>
        </div>
      </div>
      </div>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div>
    
    
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 5%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.392);
  border-radius: 20px;
}
.boxcenter .boxUser {
  background-color: aliceblue;
  width: 60%;
  height: 300px;
  border-radius: 30px;
}
.boxcenter {
  display: flex;
  justify-content: center;
}
.boxcenter .boxUser .boxtext {
  background-color: rgb(0, 136, 255);
  width: 450px;
  height: 35px;
  margin: 20px 20px 20px 20px;
  border-radius: 30px;
}
.boxcenter .boxUser .boxmoney {
  background-color: rgb(4, 0, 255);
  width: 300px;
  height: 40px;
  border-radius: 30px;
  margin-left: 80px;
  margin-top: 30px;
}
.boxcenter .boxUser .boxlogo {
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 180px;
  border-radius: 30px;
  margin-left: 80px;
  margin-top: 20px;
}
.textmargin {
  margin-left: 30px;
  margin-top: 10px;
}
.textmarginright {
  margin-left: 160px;
  margin-top: 10px;
}
.accout {
  margin-top: 10px;
  border: 3px solid #ffffff;
  height: 1000px;
  width: 900px;
  border-radius: 20px;
}
.boxaccout {
  display: flex;
  justify-content: center;
}
.boxIncome {
  width: 50%;
  margin-left: 50px;
  margin-top: 20px;
}
.boxinput {
  display: flex;
  justify-content: center;
}
</style>
