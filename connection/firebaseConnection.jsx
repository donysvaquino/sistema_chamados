// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAqrm73-e156kkqTdsRx4oLcnXJww_8wI",
  authDomain: "chamados-77f00.firebaseapp.com",
  projectId: "chamados-77f00",
  storageBucket: "chamados-77f00.firebasestorage.app",
  messagingSenderId: "319648820074",
  appId: "1:319648820074:web:65e51db1bf0a49b5c55313",
  measurementId: "G-TDC0WQ0YLC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
