// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1PIqiCbq7VePfnrcX8eMoSpWWbFRXiMs",
  authDomain: "curso-f90b6.firebaseapp.com",
  projectId: "curso-f90b6",
  storageBucket: "curso-f90b6.firebasestorage.app",
  messagingSenderId: "1088431133975",
  appId: "1:1088431133975:web:72c8db03fe89e1930a9352",
  measurementId: "G-DZ39WL0HED",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
