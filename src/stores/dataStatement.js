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
var StatementData={}
const numberStatement = ref([])
const sumStatement = ref([])
const getuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid
        username.value = user.displayName
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
    numberStatement.value = []
    const querySnapshot = await getDocs(query(collection(db,'Statement')))
    querySnapshot.forEach(async (doc) => {
      StatementData = {
        TypeStatemented: doc.data().TypeStatement,
        amounted: doc.data().amount,
        ID: doc.data().id
      }
      showamount.value.push(StatementData)

      if (uid.value == StatementData.ID) {
        numberStatement.value.push(doc.data().amount)
        sumStatement.value = numberStatement.value.reduce((sum, n) => sum + n)
        
        console.log(" traget  ",numberStatement.value )
        console.log(" SSSSS   ",StatementData.amounted )
      }
    })
    
    
    
    console.log('GetData : ' + showamount.value)
    console.log('Get number data : ', numberStatement)
    console.log('sum number data : ', sumStatement)
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
    sumStatement

  }
})