import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { GoogleAuthProvider } from 'firebase/auth'
// import { initializeApp } from 'firebase-admin/app';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD22lAaUdKd6FcSDJ-BOJvjVIhk_k6o5tY",
    authDomain: "ecommerce-web-1c8c4.firebaseapp.com",
    projectId: "ecommerce-web-1c8c4",
    storageBucket: "ecommerce-web-1c8c4.appspot.com",
    messagingSenderId: "390227659533",
    appId: "1:390227659533:web:f61b8ba562b102bf4e7e44",
    measurementId: "G-VJRW7KVFG8"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  export const googleauth = new GoogleAuthProvider();
  const fs = firebase.firestore()
  const storage = firebase.storage()

  export {auth , fs , storage}
