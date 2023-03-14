import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB_iUdQh4mmBVmXHoHj-6248KctNyEpP5Q",
  authDomain: "disney-plus-f0d6a.firebaseapp.com",
  projectId: "disney-plus-f0d6a",
  storageBucket: "disney-plus-f0d6a.appspot.com",
  messagingSenderId: "416571052783",
  appId: "1:416571052783:web:531aa55bb440b5a802811a",
  measurementId: "G-JTY21D89K6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;