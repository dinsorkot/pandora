import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ref } from 'vue'

export const useCreateUser = defineStore('sign_in', () => {
    const auth = getAuth()
    const router = useRouter()

    const new_user = ref({
        username:"",
        password:"",
        email:"",
        faceID:"",
    })

    const createUser = () => {
        createUserWithEmailAndPassword(auth, new_user.value.email, new_user.value.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                createUsername(user.uid,new_user.value.username, new_user.value.password, new_user.value.email , new_user.value.faceID)
                // ...
                alert("Success")
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
        uid,
        usernamed,
        passworded,
        faceID,
        emailed
        
    ) => {
        
        await setDoc(doc(db, 'User',uid), {
            username: usernamed,
            password: passworded,
            faceID: faceID,
            email: emailed
        })
        console.log(uid)
        
    }
    return { createUser , new_user}
})
