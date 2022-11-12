// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdg70fLTmaGMl2s2FwRBZKRSNczpq6cNE",
  authDomain: "vue-fire-auth-yt-33d6f.firebaseapp.com",
  projectId: "vue-fire-auth-yt-33d6f",
  storageBucket: "vue-fire-auth-yt-33d6f.appspot.com",
  messagingSenderId: "294909062910",
  appId: "1:294909062910:web:19640daa632822c7b8ffaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
