// Import the functions you need from the SDKs you need
import { initializeApp, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JYDm57RvfaeMuV3N9PQHz-G6P8TvdxA",
  authDomain: "todo-app-with-signup-and-login.firebaseapp.com",
  projectId: "todo-app-with-signup-and-login",
  storageBucket: "todo-app-with-signup-and-login.appspot.com",
  messagingSenderId: "848711229184",
  appId: "1:848711229184:web:73eb12dd75858978e81de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage();


export {
  app,
  auth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  db,
  storage, ref, uploadBytesResumable, getDownloadURL



}