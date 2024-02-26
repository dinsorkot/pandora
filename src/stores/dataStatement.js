import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const DataState = defineStore('dataStatement', () => {
const uid = ref()
const username = ref()
const auth = getAuth()
var showamount = ref([])
var showDataUser = ref([])
var dateData = ref([])
const fitterDate= ref([])
var StatementData={}
var UserData={}
const numberStatement = ref([])
const sumStatement = ref([])
const getuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid
        username.value = user.username
        console.log('uid : ' + uid.value)
        console.log('username ' + username.value)
        
      } else {

      }
    })
  }

  const Statement = async () => {
    console.log('GetStatement')
    sumStatement.value = []
    showamount.value = []
    dateData.value = []
    fitterDate.value = []
    numberStatement.value = []
    const querySnapshot = await getDocs(query(collection(db,'Statement')))
    querySnapshot.forEach(async (doc) => {
      StatementData = {
        TypeStatemented: doc.data().TypeStatement,
        amounted: doc.data().amount,
        ID: doc.data().id,
        dated: doc.data().Date
      }
      showamount.value.push(StatementData)
      dateData.value.push(StatementData.dated)
      if (uid.value == StatementData.ID) {
        numberStatement.value.push(doc.data().amount)
        sumStatement.value = numberStatement.value.reduce((sum, n) => sum + n)
        
        console.log(" traget  ",numberStatement.value )
      }

      fitterDate.value = dateData.value.filter((item, index) => {
        return dateData.value.indexOf(item) === index
      })
    })
    
    
    console.log('Date : ' + fitterDate.value)
    console.log('GetData : ' + showamount.value)
    console.log('Get number data : ', numberStatement)
    console.log('sum number data : ', sumStatement)
  }

  const getUserData = async () => {
    console.log('GetStatement')
    showDataUser.value = []
    const querySnapshot = await getDocs(query(collection(db,'User')))
    querySnapshot.forEach(async (doc) => {
      if (doc.id == uid.value) {
      UserData = {
        usernamed: doc.data().username
      }
      showDataUser.value.push(UserData)
    }
      console.log("show User data : ",showDataUser.value)
     

    })
    
    
    console.log('Date : ' + fitterDate.value)
  }


  const User = () => {
    return uid.value
    
  }
  return {
    showamount,
    Statement,
    User,
    getuser,
    numberStatement,
    sumStatement,
    fitterDate,
    getUserData,
    showDataUser
  }
})