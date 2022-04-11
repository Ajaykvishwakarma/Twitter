
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYXqvDnEdfp9dcqCb70cToekInaeo5aOA",
  authDomain: "twitter-clone-ba49b.firebaseapp.com",
  projectId: "twitter-clone-ba49b",
  storageBucket: "twitter-clone-ba49b.appspot.com",
  databaseURL: "https://twitter-clone-ba49b-default-rtdb.firebaseio.com",
  messagingSenderId: "1041126736507",
  appId: "1:1041126736507:web:e8251e40e1eb00a36b98de",
  measurementId: "G-MEFDQRTKFF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = firebaseApp.firestore();
export const storage = getStorage(firebaseApp);
