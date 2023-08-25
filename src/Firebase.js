// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMsWnPABmNis2dCRD0N6D1iViCRRZ1Uqc",
  authDomain: "fir-crud-1d94e.firebaseapp.com",
  projectId: "fir-crud-1d94e",
  storageBucket: "fir-crud-1d94e.appspot.com",
  messagingSenderId: "9428604844",
  appId: "1:9428604844:web:749d0efad4bbd320160c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);