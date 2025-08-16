// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2lev5JPqjxErFkgrzvNebBdcwC9FMS8M",
    authDomain: "vue-3-live-chat-d7d81.firebaseapp.com",
    projectId: "vue-3-live-chat-d7d81",
    storageBucket: "vue-3-live-chat-d7d81.firebasestorage.app",
    messagingSenderId: "165816885529",
    appId: "1:165816885529:web:cb7774d77fa37b5aca6588"
};

// Initialize Firebase, Firestore, Timestamp and Auth
const firebase = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebase);
const projectTimestamp = serverTimestamp;
const projectAuth = getAuth();

export { projectFirestore, projectTimestamp, projectAuth };
