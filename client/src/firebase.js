// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-fcbd1.firebaseapp.com",
  projectId: "mern-state-fcbd1",
  storageBucket: "mern-state-fcbd1.appspot.com",
  messagingSenderId: "873833280966",
  appId: "1:873833280966:web:3c914c5744704032f9aec7"
};
//console.log(import.meta.env.VITE_FIREBASE_API_KEY, "firebase connected");

// Initialize Firebase
export const app = initializeApp(firebaseConfig);