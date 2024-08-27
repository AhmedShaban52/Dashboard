
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAR9sbwwrERq5TqI-TKyhupxF42lEAWZ5I",
  authDomain: "dashboard-cad28.firebaseapp.com",
  projectId: "dashboard-cad28",
  storageBucket: "dashboard-cad28.appspot.com",
  messagingSenderId: "1018588097741",
  appId: "1:1018588097741:web:d81907834b9a6912fe0d84"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
