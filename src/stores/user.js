import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  where,
  doc
} from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'vue-router'

export const useInfoStore = defineStore('InfoStore', () => {
  const uid = ref(null)
  const username = ref(null)
  const infoUser = ref({})
  const posteds = ref([])
  const postedsUser = ref([])
  const auth = getAuth()
  const count = ref(false)
  const router = useRouter()

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

  const getUserE = () => {
    const collec = collection(db, 'User')
    onSnapshot(collec, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == uid.value) {
          username.value = doc.data().username
          infoUser.value = {
            username: doc.data().username,
          }
        }
      })
    })
  }

  const createPost = async (post, tm, stm) => {
    try {
      await addDoc(collection(db, 'posts'), {
        id: uid.value,
        username: username.value,
        posted: post,
        time: tm,
        usetime: stm
      })
      console.log('Post created successfully')
      count.value = true
      getPosted()
    } catch (error) {
      console.error('Error adding document:', error)
    }
  }

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, 'posts', postId))
      console.log('Post deleted successfully')
      count.value = true
      getPosted()
    } catch (error) {
      console.error('Error deleting document:', error)
    }
  }

  const getPosted = () => {
    if (count.value) {
      posteds.value = []
      router.go(0)
    }
    const q = query(collection(db, 'posts'), orderBy('usetime', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          const post = {
            uid: doc.id,
            id: doc.data().id,
            time: doc.data().time,
            post: doc.data().posted,
            username: doc.data().username
          }
          posteds.value.push(post)
        }
      })
    })
  }

  const getPostedUser = () => {
    if (count.value) {
      posteds.value = []
      router.go(0)
    }
    const q = query(
      collection(db, 'posts'),
      where('id', '==', uid.value),
      orderBy('usetime', 'desc')
    )
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          const post = {
            uid: doc.id,
            id: doc.data().id,
            time: doc.data().time,
            post: doc.data().posted,
            username: doc.data().username
          }
          // push the post object into the postedsUser array
          postedsUser.value.push(post)
        }
      })
    })
  }
  const userData = () => {
    return uid.value
  }

  const getInfoUser = () => {
    return infoUser.value
  }

  return {
    getUserE,
    userData,
    posteds,
    postedsUser,
    getUserG,
    createPost,
    getPostedUser,
    deletePost,
    getPosted,
    getInfoUser
  }
})