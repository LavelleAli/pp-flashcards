// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1XG83GaIE0aa7Gm31txweTKsmMWAKmdI",
  authDomain: "pp-flashcards.firebaseapp.com",
  projectId: "pp-flashcards",
  storageBucket: "pp-flashcards.firebasestorage.app",
  messagingSenderId: "937461552941",
  appId: "1:937461552941:web:e61ecb19a5455178a025a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore