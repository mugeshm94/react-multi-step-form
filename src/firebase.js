import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoEkweCEECJa2dE9zL5euJuwaUU-zJ3lY",
  authDomain: "react-multi-step-form-3706c.firebaseapp.com",
  projectId: "react-multi-step-form-3706c",
  storageBucket: "react-multi-step-form-3706c.appspot.com",
  messagingSenderId: "909707174433",
  appId: "1:909707174433:web:91d6a8bd6b31b91a61b960"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };