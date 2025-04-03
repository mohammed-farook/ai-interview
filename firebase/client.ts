// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUyd99tXGfBPoCrOFCrS6KVThZ0Jd_Wu4",
  authDomain: "prepwise-51f3c.firebaseapp.com",
  projectId: "prepwise-51f3c",
  storageBucket: "prepwise-51f3c.firebasestorage.app",
  messagingSenderId: "208573175195",
  appId: "1:208573175195:web:3fc3428f40f420aa0bbd3e",
  measurementId: "G-2KDPQDXLSR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);