// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB4YJL30SrA9LsWE38Gy2BL8n9wIckohRs",
//   authDomain: "shopiverse-f6229.firebaseapp.com",
//   projectId: "shopiverse-f6229",
//   storageBucket: "shopiverse-f6229.appspot.com",
//   messagingSenderId: "781608108981",
//   appId: "1:781608108981:web:94a714e8d0b5810aa48ffc"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYrDpps-8dZvVwFCEQEr4YcmIE0PUCSto",
  authDomain: "shopiverse-1.firebaseapp.com",
  projectId: "shopiverse-1",
  storageBucket: "shopiverse-1.appspot.com",
  messagingSenderId: "746723711227",
  appId: "1:746723711227:web:bce26be07cc3f95414385e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app);

export {fireDB, auth};