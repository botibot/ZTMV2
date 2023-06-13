// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1kkNAETrgCcQgBKXyeId9Vznhu81gbY",
  authDomain: "crwn-clothing-db-44aee.firebaseapp.com",
  projectId: "crwn-clothing-db-44aee",
  storageBucket: "crwn-clothing-db-44aee.appspot.com",
  messagingSenderId: "855601242718",
  appId: "1:855601242718:web:586995cf63c307fe688acf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
