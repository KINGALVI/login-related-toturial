// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXgRbt4NK5BEiTXPAewPEebHq9TaJnHc",
  authDomain: "login-related-toturial.firebaseapp.com",
  projectId: "login-related-toturial",
  storageBucket: "login-related-toturial.appspot.com",
  messagingSenderId: "331550273299",
  appId: "1:331550273299:web:e830c578f0678b447434e6",
  measurementId: "G-96RN0FJ8VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;