import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCUzcqdubwRi1xmsOCnV_nRWbHc9eFuLkQ",
    authDomain: "chatup-c0c7b.firebaseapp.com",
    projectId: "chatup-c0c7b",
    storageBucket: "chatup-c0c7b.appspot.com",
    messagingSenderId: "914541417694",
    appId: "1:914541417694:web:ead7aa5059c1d9a7c5de4f"
  }).auth();