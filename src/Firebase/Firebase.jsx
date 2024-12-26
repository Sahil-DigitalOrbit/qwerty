import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDFElsFuzcS8jRHPIUSB1GxEPVJHyr8TF0",
  authDomain: "chai-waley-2df5f.firebaseapp.com",
  projectId: "chai-waley-2df5f",
  storageBucket: "chai-waley-2df5f.firebasestorage.app",
  messagingSenderId: "1072313276706",
  appId: "1:1072313276706:web:aa116a20648f0ecfc12d7b"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);