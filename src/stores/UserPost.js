import { onAuthStateChanged } from 'firebase/auth'

const getUserG = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid
        username.value = user.displayName
        console.log('User ID:', uid.value)
        console.log('Username:', username.value)
      } else {
        console.log('User is signed out')
      }
    })
  }