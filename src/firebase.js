import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6SGFZ0BDgSUQLmnLHThq9VQ3gbCWSFB8",
  authDomain: "manage-students-app.firebaseapp.com",
  projectId: "manage-students-app",
  storageBucket: "manage-students-app.appspot.com",
  messagingSenderId: "996376028762",
  appId: "1:996376028762:web:8ee0a7777c52c122429a63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);