// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcJmcF0ON3TQYIOoJasNS3U2K9MsrvsEI",
    authDomain: "tool-maker-edb88.firebaseapp.com",
    projectId: "tool-maker-edb88",
    storageBucket: "tool-maker-edb88.appspot.com",
    messagingSenderId: "520534006977",
    appId: "1:520534006977:web:ba5d0951d3e30dd5dbc840",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;