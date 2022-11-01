// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60KqwWIPHN3vB6RHiCR_5rj20GwnMljs",
  authDomain: "registeration-form-ecaab.firebaseapp.com",
  projectId: "registeration-form-ecaab",
  storageBucket: "registeration-form-ecaab.appspot.com",
  messagingSenderId: "683925857333",
  appId: "1:683925857333:web:6a3f2a91f72fa6f6507d7c",
  measurementId: "G-3KFGV1E4KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;