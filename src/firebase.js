
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBKHeUDZo29KFSvZ4f5fjzjqvl3WR24lYI",
  authDomain: "monkhoodform.firebaseapp.com",
  databaseURL: "https://monkhoodform-default-rtdb.firebaseio.com",
  projectId: "monkhoodform",
  storageBucket: "monkhoodform.appspot.com",
  messagingSenderId: "136024260772",
  appId: "1:136024260772:web:ab03d46eb5a2e1194ae631",
  measurementId: "G-8V91BW8F98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
export const auth= getAuth(app);
export default app; 