// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsT86SLlN6vDVqlrg5JbnVTSY4M2TL3Kw",
    authDomain: "monpt-edeb7.firebaseapp.com",
    projectId: "monpt-edeb7",
    storageBucket: "monpt-edeb7.appspot.com",
    messagingSenderId: "840638690047",
    appId: "1:840638690047:web:d2b8c5d0dc6f5ee1ffd2ca",
    measurementId: "G-LQ43JE82DH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)