// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcnGmK-_o-Wz5bOT_xjts9Q9gcS-pjoHY",
  authDomain: "vcpmc-6febb.firebaseapp.com",
  projectId: "vcpmc-6febb",
  storageBucket: "vcpmc-6febb.appspot.com",
  messagingSenderId: "634423417497",
  appId: "1:634423417497:web:53ab9ae9eb84b2ca32f608",
  measurementId: "G-HRBN5D2GT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
export const auth = getAuth(app);

// Get a reference to the database service
export const database = getDatabase(app);

