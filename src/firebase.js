import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDI4Vt_wWDoorQjroBSMav-yCGlhtoiHjY",
  authDomain: "doce-e-ser-de1f6.firebaseapp.com",
  databaseURL: "https://doce-e-ser-de1f6-default-rtdb.firebaseio.com",
  projectId: "doce-e-ser-de1f6",
  storageBucket: "doce-e-ser-de1f6.firebasestorage.app",
  messagingSenderId: "1021515521250",
  appId: "1:1021515521250:web:c07acb32b18bec05d512bb",
  measurementId: "G-5SBCEDZKR9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🔔 PUSH NOTIFICATIONS
export const messaging = getMessaging(app);
