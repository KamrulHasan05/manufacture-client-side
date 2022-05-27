// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYN1dQIUkQcHYHQ1qaa2j4XONQF1TV8eU",
    authDomain: "gbytemotherboard.firebaseapp.com",
    projectId: "gbytemotherboard",
    storageBucket: "gbytemotherboard.appspot.com",
    messagingSenderId: "639097755062",
    appId: "1:639097755062:web:a87943939519019ab69d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;