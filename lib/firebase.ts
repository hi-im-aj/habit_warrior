import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1C8V394OOb5hAxv5g-2uCcGjys9zmMFI",
  authDomain: "habit-warrior.firebaseapp.com",
  projectId: "habit-warrior",
  storageBucket: "habit-warrior.appspot.com",
  messagingSenderId: "466055537287",
  appId: "1:466055537287:web:92262153686f87d1b20e22",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
