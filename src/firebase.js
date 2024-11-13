// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtKaCiTSyprmXPu6WMw7baraoGUwR4zC4",
  authDomain: "todo-list-onboarding.firebaseapp.com",
  projectId: "todo-list-onboarding",
  storageBucket: "todo-list-onboarding.firebasestorage.app",
  messagingSenderId: "958413484348",
  appId: "1:958413484348:web:e76f34f9d11b3a35fdae39"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;