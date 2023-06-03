// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZCQgoeri6l93eIu13yVqsJUhWHdxCZws",
  authDomain: "clone-c2b71.firebaseapp.com",
  projectId: "clone-c2b71",
  storageBucket: "clone-c2b71.appspot.com",
  messagingSenderId: "779512218588",
  appId: "1:779512218588:web:8843727708ff53d009c519",
  measurementId: "G-HE73NQTQVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig