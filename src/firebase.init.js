// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdR7oCglwhEPaOJzff1_dRRR_JP88jIms",
    authDomain: "doctors-portal-e65b4.firebaseapp.com",
    projectId: "doctors-portal-e65b4",
    storageBucket: "doctors-portal-e65b4.appspot.com",
    messagingSenderId: "651191519159",
    appId: "1:651191519159:web:34c6e194357a553a7e8a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;