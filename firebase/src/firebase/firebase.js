import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg-Xl6RsUavFp0wtLnNH6ksLOMoOVyRe0",
  authDomain: "frontend-auth-99afd.firebaseapp.com",
  projectId: "frontend-auth-99afd",
  storageBucket: "frontend-auth-99afd.appspot.com",
  messagingSenderId: "323947302267",
  appId: "1:323947302267:web:7e63f30e0acbf7b94281de",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
