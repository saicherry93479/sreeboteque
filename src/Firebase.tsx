import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyB_eCxsvRjbBJ4ea4_mWyojZN6W0x0M838",
    authDomain: "boteque-2bf6c.firebaseapp.com",
    projectId: "boteque-2bf6c",
    storageBucket: "boteque-2bf6c.appspot.com",
    messagingSenderId: "784116278339",
    appId: "1:784116278339:web:5efb463698379a215f20f6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);
