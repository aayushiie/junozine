// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYDwwM2df0Cz-PCg4TB8Kjp0q5j9rXutM",
  authDomain: "juno-magazine.firebaseapp.com",
  projectId: "juno-magazine",
  storageBucket: "juno-magazine.firebasestorage.app",
  messagingSenderId: "748381409259",
  appId: "1:748381409259:web:b9fbcc6c7796183eb153ae",
  measurementId: "G-8X2GSMHDMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);