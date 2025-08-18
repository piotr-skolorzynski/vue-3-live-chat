import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2lev5JPqjxErFkgrzvNebBdcwC9FMS8M",
    authDomain: "vue-3-live-chat-d7d81.firebaseapp.com",
    projectId: "vue-3-live-chat-d7d81",
    storageBucket: "vue-3-live-chat-d7d81.firebasestorage.app",
    messagingSenderId: "165816885529",
    appId: "1:165816885529:web:cb7774d77fa37b5aca6588"
};

// Initialize 
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth };
