import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const useCreateUser = defineStore('counter', () => {
    const auth = getAuth()
    const router = useRouter()
    const createUser = (username, password, repeat_password, email) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                createUsername(user.email, password, username, repeat_password)
                // ...
                alert("Success!")
                router.push('sign_in')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
                console.log(errorMessage)
                
            })
    }

    const createUsername = async (
        usernamed,
        passworded,
        repeat_password,
        emailed
    ) => {
        await setDoc(doc(db, 'users'), {
            username: usernamed,
            password: passworded,
            repeat_password: repeat_password,
            email: emailed,
        })
    }
    return { createUser }
})
