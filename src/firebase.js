// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcHQ_YQJ9Qe1Z1hXAb4u6ak-Zd-h5ElM4",
  authDomain: "chatapp-13562.firebaseapp.com",
  projectId: "chatapp-13562",
  storageBucket: "chatapp-13562.appspot.com",
  messagingSenderId: "742466855342",
  appId: "1:742466855342:web:a1228ab1b263f4a1ea683f",
  measurementId: "G-Y7YNZZXE50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
