import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'

export const useLoginEmail = defineStore('Email', () => {
  const router = useRouter()
  const auth = getAuth()
  const signinEmail = (email, password) => {
    console.log(email,password)
    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
      console.log(user.email)
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully   " + user.email
      });
      router.push('dashboard')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      Swal.fire({
        icon: "error",
        text: "มีบางอย่างผิดพลาด",
        footer: 'คุณยังไม่มีบัญชีใช่ไหม ?? สามารถกดตรงนี้ได้เลย <a href="/register">สมัครบัญชี</a>'
      });
      console.log(errorMessage)
      
    })
}

  return { signinEmail }
})