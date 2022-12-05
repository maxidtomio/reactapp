// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMD1cKCpKywFBli-UYEReChRK-woHxNaU",
  authDomain: "rincon-del-mate.firebaseapp.com",
  projectId: "rincon-del-mate",
  storageBucket: "rincon-del-mate.appspot.com",
  messagingSenderId: "214661285727",
  appId: "1:214661285727:web:745d508cee56ff74b2d8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db