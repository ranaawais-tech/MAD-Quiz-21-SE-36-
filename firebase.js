// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQYkSu3_ZEmq-oj7dkcOEMigYAunWO6jU",
  authDomain: "mad-quiz-2-de059.firebaseapp.com",
  projectId: "mad-quiz-2-de059",
  storageBucket: "mad-quiz-2-de059.appspot.com",
  messagingSenderId: "490229335787",
  appId: "1:490229335787:web:6a13817db51e7ae7a160ae",
  measurementId: "G-6B29RM4T6N",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

export const storage = getStorage(firebaseApp);
