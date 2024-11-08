// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage }  from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY ,
  authDomain: "bills-142ad.firebaseapp.com",
  projectId: "bills-142ad",
  storageBucket: "bills-142ad.appspot.com",
  messagingSenderId: "389947802262",
  appId: "1:389947802262:web:a4e9388bf1026efb6338b7"
};


// Initialize Firebase
const app =  getApps().length == 0 ? initializeApp(firebaseConfig): getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage  }