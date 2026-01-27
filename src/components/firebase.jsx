// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH7HIKIh7UhLJt1pxSRxWG2dacLGgzHko",
  authDomain: "hospital-cff4d.firebaseapp.com",
  projectId: "hospital-cff4d",
  storageBucket: "hospital-cff4d.firebasestorage.app",
  messagingSenderId: "171203748199",
  appId: "1:171203748199:web:d4ca24e740cc979bbc4fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);