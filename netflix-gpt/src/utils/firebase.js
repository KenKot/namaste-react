// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHh_6EmBqi9KVbF_MdK5YeuysA7jaF6DM",
  authDomain: "netflixgpt-4126a.firebaseapp.com",
  projectId: "netflixgpt-4126a",
  storageBucket: "netflixgpt-4126a.appspot.com",
  messagingSenderId: "905014373982",
  appId: "1:905014373982:web:5b9dec1a3ca3dead0b4ecf",
  measurementId: "G-M1EZS4S50B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
