import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpBFfqH3941kk26mgfU23MxE4mK8ll6Sk",
  authDomain: "netflix-gpt-83352.firebaseapp.com",
  projectId: "netflix-gpt-83352",
  storageBucket: "netflix-gpt-83352.appspot.com",
  messagingSenderId: "280691323506",
  appId: "1:280691323506:web:74c3a9a824516f813188eb",
  measurementId: "G-883WS640HH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
