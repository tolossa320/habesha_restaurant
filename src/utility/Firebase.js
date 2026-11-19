import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVvVbcROxAogmc8_3U19Sg0GAjHVGw-OY",
  authDomain: "habesha-restaurant-da60e.firebaseapp.com",
  projectId: "habesha-restaurant-da60e",
  storageBucket: "habesha-restaurant-da60e.firebasestorage.app",
  messagingSenderId: "699963845007",
  appId: "1:699963845007:web:8ed29baff324b6a23d83fa",
  measurementId: "G-YJ7X8XLC2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

export default app;
