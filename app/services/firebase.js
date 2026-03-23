// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPsxfTW2NblXRg5FoCkQOZ61lHa5B21mU",
  authDomain: "todo-app-db454.firebaseapp.com",
  projectId: "todo-app-db454",
  storageBucket: "todo-app-db454.firebasestorage.app",
  messagingSenderId: "107081761304",
  appId: "1:107081761304:web:d009a413df678d9587396d",
  measurementId: "G-RB3E96JY4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


