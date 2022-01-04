import firebase from "firebase";
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoKvny02imnU_-hRu6arbiZQg_d4iz_Zk",
    authDomain: "resume-bfd12.firebaseapp.com",
    projectId: "resume-bfd12",
    storageBucket: "resume-bfd12.appspot.com",
    messagingSenderId: "324522153512",
    appId: "1:324522153512:web:f567f0487b814aae36c71d",
    measurementId: "G-1C9JZ3HTGX"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
