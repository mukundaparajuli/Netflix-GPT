// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ivK1mk-MCBYYRU0CxLpq6lXWp-Z7PGw",
  authDomain: "netflix-gpt-d19f2.firebaseapp.com",
  projectId: "netflix-gpt-d19f2",
  storageBucket: "netflix-gpt-d19f2.appspot.com",
  messagingSenderId: "382958377887",
  appId: "1:382958377887:web:3d07c48f770ab8d571fbaa",
  measurementId: "G-T6HN9YE9MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()