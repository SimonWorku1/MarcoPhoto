// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWTuW6eD1gxTf8sLnZzuWN2dngDFphUH8",
    authDomain: "marcophoto-9cb75.firebaseapp.com",
    projectId: "marcophoto-9cb75",
    storageBucket: "marcophoto-9cb75.firebasestorage.app",
    messagingSenderId: "690399228253",
    appId: "1:690399228253:web:39777c4e908417294838b4",
    measurementId: "G-EY1HGL647R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const initAnalytics = async () => {
    if (await isSupported()) {
        getAnalytics(app);
    }
};

const ensureAnonymousAuth = async () => {
    if (!auth.currentUser) {
        await signInAnonymously(auth);
    }
    return auth.currentUser;
};

initAnalytics();

export { app, auth, db, ensureAnonymousAuth };