import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBZuBs3_E8N4herG_hdauJwesDBhRqux38",
    authDomain: "fb-style-2d56a.firebaseapp.com",
    projectId: "fb-style-2d56a",
    storageBucket: "fb-style-2d56a.firebasestorage.app",
    messagingSenderId: "1040579127987",
    appId: "1:1040579127987:web:cb81aedff5eefbc2005ec6",
    measurementId: "G-1LC0Y701FK"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };