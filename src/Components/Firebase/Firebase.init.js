
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDve77Ff6H4QMRXRh3PSpC7GU79vQbGZZ0",
    authDomain: "sp-photography-8ec91.firebaseapp.com",
    projectId: "sp-photography-8ec91",
    storageBucket: "sp-photography-8ec91.appspot.com",
    messagingSenderId: "688048614998",
    appId: "1:688048614998:web:4508bac340aeec4ee3d5f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;