import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF8UH5pKRFvZQLcU25BZGm7MNTQh7wlVo",
  authDomain: "test-d0147.firebaseapp.com",
  projectId: "test-d0147",
  storageBucket: "test-d0147.appspot.com",
  messagingSenderId: "37950372726",
  appId: "1:37950372726:web:a4e7add04b25e3cbd51857",
  measurementId: "G-JREN9Y1G77",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
